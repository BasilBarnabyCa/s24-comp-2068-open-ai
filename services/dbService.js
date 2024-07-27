const Suggestion = require('../models/Suggestion');

const dbService = {
	saveSuggestion: async (jsonData) => {
		try {
			// Parse the JSON data to extract relevant fields
			const data = JSON.parse(jsonData);
			const title = data.title || 'No Title';  // Assuming the response includes a title field

			// Create a new suggestion document
			const newSuggestion = new Suggestion({
				data: jsonData,
				title: title
			});

			// Save the suggestion to the database
			await newSuggestion.save();
			return newSuggestion;
		} catch (error) {
			console.error('Error saving suggestion:', error.message);
			throw new Error('Failed to save suggestion.');
		}
	},
	getSuggestionById: async (id) => {
		try {
			return await Suggestion.findById(id);
		} catch (error) {
			console.error('Error fetching suggestion by ID:', error.message);
			throw new Error('Failed to fetch suggestion.');
		}
	}

};

module.exports = dbService;
