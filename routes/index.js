var express = require("express");
var router = express.Router();
var appName = "CareerCraft";
var fileService = require("../services/fileService");
var openaiService = require("../services/openaiService");
const e = require("express");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: `${appName}` });
});

// router.post("/process-resume", async (req, res, next) => {
// 	const { resumeText } = req.body;
// 	console.log("Resume text:", resumeText);

// 	try {
// 		const suggestions = await openaiService.getCareerSuggestions(resumeText);
// 		res.json({ suggestions });
// 	} catch (error) {
// 		console.error('Error details:', error.response ? error.response.data : error.message);
// 		res.status(500).json({ error: "An error occurred while processing your request." });
// 	}
// });

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

		const formattedData = {
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

		  console.log(suggestions.salaryExpectations)
		  
		  res.json({ formattedData });

	} catch (error) {
		console.error('Error details:', error.message);
		res.status(500).json({ error: "An error occurred while processing your request." });
	}
});

module.exports = router;
