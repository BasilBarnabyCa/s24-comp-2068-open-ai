var express = require("express");
var router = express.Router();
var appName = "CareerCraft";
var fileService = require("../services/fileService");
var openaiService = require("../services/openaiService");
const dbService = require("../services/dbService");
const Suggestion = require("../models/Suggestion");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: `${appName}` });
});

router.post("/process-data", fileService.uploadMiddleware, async (req, res, next) => {
	const file = req.file;
	let resumeText = req.body.resumeText || '';
	let combinedText = '';

	try {
		if (file) {
			extractedResumeText = await fileService.extractText(file);
			combinedText = extractedResumeText + ' ' + resumeText;
		} else {
			combinedText = resumeText;
		}

		// Process the resume text with OpenAI
		const apiResponse = await openaiService.getCareerSuggestions(combinedText);
		const suggestions = JSON.parse(apiResponse);
		const jsonData = JSON.stringify(suggestions);

		// Save the suggestions using the suggestion service
		await dbService.saveSuggestion(jsonData);

		const formattedData = {
			title: suggestions.title,
			summary: suggestions.summary,
			careerPath: suggestions.careerPath.map(item => ({
				role: item.role,
				percentageMatch: item.percentageMatch,
				overview: item.overview,
			})),
			strongSkills: suggestions.strongSkills,
			suggestedLearning: suggestions.suggestedLearning,
			suggestedCertifications: suggestions.suggestedCertifications,
			industryTrends: suggestions.industryTrends,
			salaryExpectations: suggestions.salaryExpectations,
		};

		res.json({ formattedData });

	} catch (error) {
		console.error('Error details:', error.message);
		res.status(500).json({ error: "An error occurred while processing your request." });
	}
});

// Route to fetch suggestions
router.get("/suggestions", async (req, res) => {
	try {
		const suggestions = await Suggestion.find().sort({ createdAt: -1 }).limit(50);
		res.json(suggestions);
	} catch (error) {
		console.error('Error fetching suggestions:', error.message);
		res.status(500).json({ error: "An error occurred while fetching suggestions." });
	}
});

// Route to fetch a single suggestion by ID
router.get("/suggestions/:id", async (req, res, next) => {
	const suggestionId = req.params.id;
	try {
		const suggestion = await dbService.getSuggestionById(suggestionId);
		if (!suggestion) {
			return res.status(404).json({ error: "Suggestion not found." });
		}
		res.json({ formattedData: JSON.parse(suggestion.data) });
	} catch (error) {
		console.error('Error fetching suggestion:', error.message);
		res.status(500).json({ error: "An error occurred while fetching the suggestion." });
	}
});

// New DELETE route for removing a suggestion
router.delete("/suggestions/:id", async (req, res, next) => {
    try {
        const suggestionId = req.params.id;
        await Suggestion.findByIdAndDelete(suggestionId);
        res.status(204).send(); // No content, indicating successful deletion
    } catch (error) {
        console.error('Error deleting suggestion:', error.message);
        res.status(500).json({ error: "An error occurred while deleting the suggestion." });
    }
});

router.get("/documentation", function (req, res, next) {
	res.render("documentation", { title: `${appName} | Documentation` });
});

router.get("/user-guide", function (req, res, next) {
	res.render("user-guide", { title: `${appName} | User Guide` });
});

module.exports = router;
