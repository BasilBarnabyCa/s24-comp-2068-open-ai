var express = require("express");
var router = express.Router();
var appName = "CareerCraft";
var openaiService = require("../services/openaiService");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: `${appName}` });
});

router.post("/process-resume", async (req, res, next) => {
	const { resumeText } = req.body;
	console.log("Resume text:", resumeText);

	try {
		const suggestions = await openaiService.getCareerSuggestions(resumeText);
		res.json({ suggestions });
	} catch (error) {
		console.error('Error details:', error.response ? error.response.data : error.message);
		res.status(500).json({ error: "An error occurred while processing your request." });
	}
});

module.exports = router;
