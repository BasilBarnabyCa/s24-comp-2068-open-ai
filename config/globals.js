require("dotenv").config();

const configurations = {
	ConnectionStrings: {
		MongoDB: process.env.CONNECTION_STRING_MONGODB
	},
	ApiKeys: {
		OpenAI: process.env.OPENAI_API_KEY
	}
}

module.exports = configurations;