const axios = require('axios');
const config = require('../config/globals.js');

const simpleDirective = "Based on the following resume text, suggest the best career path, highlight strong skills, and suggest new skills to learn:";
const directive = `Based on the following resume text, generate a JSON response structured as follows:
- summary: Provide a summary of the resume
- careerPath: Provide an overview and detailed roles. Each role should have percentage match with the resume on a scale of 0-100. The job experience on the resume should NOT BE RETURNED and should ONLY be used to help determine the career path (THIS IS IMPORTANT). The suggested career path should show progression. careerPath should only include role, percentageMatch, and overview.
- strongSkills: List key skills. strongSkills should categorize the skills giving a brief description or summary of each category. strongSkills should only include category and skills, and summary.
- suggestedLearning: Outline additional skills to learn	with a brief explanation as to why. suggestedLearning should only include skill and explanation and should always follow the structure: "suggestedLearning" {skill: "skill name or subject", explanation: "explanation info"}.
- suggestedCertifications: Include relevant industry certifications and courses and links to these resources. suggestedCertifications should only include name, link, and description.
- industryTrends: Describe current industry trends
- salaryExpectations: Provide salary expectations for the jobs chosen in the careerPath object. This MUST BE DONE. salaryExpectations should only have the role and salary range and should always follow this structure: "salaryExpectations": {"career path role" : "min - max"}.
Ensure the response is valid JSON without any additional text or formatting characters like \`json\` or \`text\` and non-whitespace characters. Make sure there are no unterminated strings or missing commas. Double the response to ensure there are no missing curly braces or brackets and quotes. It is important that I receive a well formatted JSON response.
`

const openaiService = {
  getCareerSuggestions: async (resumeText) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: directive },
          { role: 'user', content: resumeText }
        ],
        max_tokens: 1500,
      }, {
        headers: {
          'Authorization': `Bearer ${config.ApiKeys.OpenAI}`,
          'Content-Type': 'application/json',
        }
      });

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      console.error('Error details:', error.response ? error.response.data : error.message);
      throw new Error('Could not get suggestions from OpenAI');
    }
  }
};

module.exports = openaiService;
