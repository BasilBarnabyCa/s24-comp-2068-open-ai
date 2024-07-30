var express = require("express");
var router = express.Router();
var appName = "CareerCraft";
var openaiService = require("../services/openaiService");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: `${appName}` });
});

router.post("/process-data", async (req, res, next) => {
    const file = req.file;
    let resumeText = req.body.resumeText || "";
    let combinedText = "";

    try {
        // if (file) {
        //     extractedResumeText = await fileService.extractText(file);
        //     combinedText = extractedResumeText + " " + resumeText;
        // } else {
        //     combinedText = resumeText;
        // }

        // // Process the resume text with OpenAI
        // const apiResponse = await openaiService.getCareerSuggestions(combinedText);
        // const suggestions = JSON.parse(apiResponse);
        // const jsonData = JSON.stringify(suggestions);

        // // Save the suggestions using the suggestion service
        // await dbService.saveSuggestion(jsonData);

        // const formattedData = {
        //     title: suggestions.title,
        //     summary: suggestions.summary,
        //     careerPath: suggestions.careerPath.map((item) => ({
        //         role: item.role,
        //         percentageMatch: item.percentageMatch,
        //         overview: item.overview,
        //     })),
        //     strongSkills: suggestions.strongSkills,
        //     suggestedLearning: suggestions.suggestedLearning,
        //     suggestedCertifications: suggestions.suggestedCertifications,
        //     industryTrends: suggestions.industryTrends,
        //     salaryExpectations: suggestions.salaryExpectations,
        // };

        res.json({ formattedData });
    } catch (error) {
        console.error("Error details:", error.message);
        res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

module.exports = router;
