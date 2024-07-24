const axios = require('axios');
const config = require('../config/globals.js');

const directive = "Based on the following resume text, suggest the best career path, highlight strong skills, and suggest new skills to learn:"

const openaiService = {
	getCareerSuggestions: async (resumeText) => {
	  try {
		const response = await axios.post('https://api.openai.com/v1/completions', {
		  model: 'text-davinci-003',
		  prompt: `${directive}\n\n${resumeText}`,
		  max_tokens: 150,
		}, {
		  headers: {
			'Authorization': `Bearer ${config.ApiKeys.OpenAI}`,
			'Content-Type': 'application/json',
		  }
		});
  
		return response.data.choices[0].text;
	  } catch (error) {
		console.error('Error fetching data from OpenAI:', error);
		console.error('Error details:', error.response ? error.response.data : error.message);
		throw new Error('Could not get suggestions from OpenAI');
	  }
	}
  };
  
  module.exports = openaiService;