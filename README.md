# CareerCraft - Open AI Group Documentation

This repository contains the documentation for the Open AI Group project developed as part of the COMP2068-JavaScript Frameworks course at Georgian College.

## Table of Contents

- [Demo Link](#group-members)
- [Group Members](#group-members)
- [Introduction](#introduction)
- [Abstract](#abstract)
- [Objectives](#objectives)
- [Technologies Used](#technologies-used)
- [Packages Used](#packages-used)
- [System Requirements](#system-requirements)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [Environment Configuration](#environment-configuration)
- [API Integration](#api-integration)
  - [OpenAI API](#openai-api)
- [Database Management](#database-management)
  - [MongoDB Setup](#mongodb-setup)
- [Career Path Analysis](#career-path-analysis)
- [Error Handling](#error-handling)
- [Testing and Validation](#testing-and-validation)
- [Conclusion](#conclusion)
- [References](#references)
- [Useful VS Code Extensions](#useful-vs-code-extensions)

## Demo Link
You can view demo <a href="https://careercraft-web-app.azurewebsites.net/" target="_blank">here</a>.

## Group Members
- Basil Barnaby – 200540109
- Merik De Vree – 200462061
- Nicolas Millan – 200533728
- Michael Anthony - 200558549

## Abstract
CareerCraft is an innovative web application designed to guide users toward suitable career paths based on the analysis of their uploaded resumes. Leveraging the power of NodeJS, Express, MongoDB, and OpenAI's advanced natural language processing capabilities, CareerCraft offers personalized career advice, enhancing the job-seeking experience by providing tailored career path recommendations.

## Introduction
In today's competitive job market, finding the right career path can be a daunting task. CareerCraft aims to simplify this process by utilizing state-of-the-art AI technology to analyze resumes and suggest optimal career paths for users. By integrating OpenAI's API, the application provides insightful and personalized career guidance, helping users make informed decisions about their professional futures.

## Objectives
- Analyze User Resumes: Utilize AI to analyze the content of user-uploaded resumes.
- Provide Career Recommendations: Offer personalized career path suggestions based on resume analysis.
- Maintain User Interaction History: Store and manage user interaction data using MongoDB.
- Enhance User Experience: Ensure a seamless and user-friendly interface for uploading resumes and receiving career guidance.

## Technologies Used
- NodeJS: A JavaScript runtime for building server-side applications.
- Express: A minimal and flexible Node.js web application framework.
- MongoDB: A NoSQL database for storing user interaction history.
- OpenAI API: A service for generating AI-based responses and analyzing resume content.

## Packages Used

Here is a list of all the packages used in this project as specified in the `package.json` file:

- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **CORS (Cross-Origin Resource Sharing):** A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **Dotenv:** Loads environment variables from a `.env` file into `process.env`.
- **Mammoth:** Converts `.docx` documents into HTML or plain text.
- **Mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
- **Multer:** Node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.
- **OpenAI:** A client library for accessing the OpenAI API from Node.js.
- **PDF-Parse:** A PDF parsing library for Node.js.

## System Requirements
- Operating System: Windows, macOS, or Linux
- NodeJS: Version 14.x or higher
- NPM (Node Package Manager): Version 6.x or higher
- MongoDB: Version 4.x or higher
- OpenAI API Key

## Project Setup
### Prerequisites
Before setting up the project, ensure you have the following:
- NodeJS and NPM installed
- MongoDB installed and running
- OpenAI API key

### Installation Steps
1. Clone the repository: 
    ```bash
    git clone https://github.com/BasilBarnabyCa/s24-comp-2068-open-ai.git
    ```		
2. Install dependencies: 
    ```bash
    npm install
    ```		
3. Configure environment variables:
    - Create a `.env` file in the root directory
    - Add your OpenAI API key and MongoDB connection string

### Environment Configuration
Creating a `.env` file in the root directory and adding the necessary environment variables is crucial for the proper functioning of the CareerCraft application. An `.env.example` file is provided at the root of this project to guide users on the requirements for the application. To create a `.env` file from the example file, use the terminal in the project directory and run the following command:		
    ```bash
    cp .env.example .env
    ```

### API Integration
#### OpenAI API
Integrate OpenAI's API to analyze the content of uploaded resumes and generate career path recommendations. Ensure proper configuration and handling of API requests to maintain performance and reliability. The following steps are required to ensure OpenAI’s API integration is successfully implemented:
1. Sign in to your OpenAI account:
    - Visit <a href="https://platform.openai.com/" target="_blank">OpenAI Platform</a>
2. Steps for generating your API key:
    - Click on your profile icon.
    - Select the option [Your Profile].
    - Under User API Keys, create a new secret key.
    > Note: Although OpenAI provides some free tokens, they may not be sufficient to achieve the desired results for this project. It is highly recommended to fund your account for a better experience.

### Database Management
#### MongoDB Setup
Configure MongoDB to store user interaction data, including uploaded resumes and generated career path suggestions. This enables the application to maintain a history of user interactions and provide better insights over time.
Steps to Create a MongoDB Account and Implement it in VS Code:
1. Create a MongoDB Account:
    - Visit the <a href="https://www.mongodb.com/" target="_blank">MongoDB website</a>.
    - Click the "Sign In" button at the top right corner and select "Create an Account."
    - Fill in the required details and complete the registration process.
2. Create a New Project:
    - Once logged in, click on "New Project."
    - Enter a name for your project and click "Next."
3. Create a Cluster:
    - In your new project, click on "Build a Cluster."
    - Select the "Shared" option for the free tier and choose your preferred cloud provider and region.
    - Click "Create Cluster."
4. Configure the Cluster:
    - After the cluster is created, click on "Collections" and then on "Add My Own Data."
    - Enter a database name (e.g., careerCraftDB) and a collection name (e.g., userInteractions).
5. Get the Connection String:
    - Click on "Connect" in your cluster view.
    - Select "Connect your application" and copy the connection string. It will look something like this:		
      ```bash
      mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
      ```		
    - Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB username, password, and database name respectively.
6. Install MongoDB Extension for VS Code:
    - Open Visual Studio Code.
    - Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
    - Search for "MongoDB for VS Code" and install the extension.
7. Connect to MongoDB in VS Code:
    - Open the Command Palette (Ctrl+Shift+P) and type MongoDB: Connect.
    - Select "Add Connection String" and paste the connection string you copied earlier.
    - Enter the required credentials if prompted.
8. Integrate MongoDB with Your Node.js Application:
    - Ensure you have Mongoose installed in your project: `npm install mongoose`
    - Create a new file `config/globals.js` to store your MongoDB connection string:		
      ```javascript
      module.exports = {
         ConnectionStrings: {
            MongoDB: 'your_mongodb_connection_string_here'
         }
      };
      ```		
    - Update your `app.js` to include the MongoDB connection:		
      ```javascript
      const mongoose = require('mongoose');
      const config = require('./config/globals');
      mongoose.connect(config.ConnectionStrings.MongoDB, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB connected successfully'))
      .catch(err => console.error('MongoDB connection error:', err));
      ```		

## Career Path Analysis
Developing the core functionality to analyze uploaded resumes using OpenAI's API involves several key steps. Below is an explanation of how the Career Path Analysis is generated:
1. Preparation of the Directive:
    - A detailed directive is created, instructing the AI on how to analyze the resume. The directive includes specific instructions on generating a structured JSON response, covering various aspects such as summary, career path, strong skills, suggested learning, suggested certifications, industry trends, and salary expectations.
2. Integration with OpenAI's API:
    - The application uses the OpenAI API to process the resume content. This involves sending a POST request to the OpenAI endpoint with the prepared directive and the resume text.
3. Sending the Request:
    - The POST request includes the following:
      - Model Specification: The model used for generating responses.
      - Messages: The directive is a system message and the user's resume text.
      - Token Limit: A limit on the number of tokens (words and characters) to ensure a concise response.
      - Headers: Authorization with the API key and content type as JSON.
4. Receiving the Response:
    - The OpenAI API processes the request and returns a response containing the AI-generated suggestions. This response includes the career path analysis and other requested details in JSON format.
5. Parsing the Response:
    - The application parses the JSON response to extract the relevant information. This involves ensuring the JSON is well-formatted and free of errors.
6. Providing Career Suggestions:
    - The parsed response is used to provide the user with career path suggestions. This includes:
      - Summary: A summary of the resume.
      - Career Path: An overview of suitable career paths with detailed roles and percentage matches.
      - Strong Skills: Key skills are categorized with brief descriptions.
      - Suggested Learning: Additional skills to learn and explanations.
      - Suggested Certifications: Relevant industry certifications and courses with links.
      - Industry Trends: Current trends in the industry.
      - Salary Expectations: Salary ranges for the suggested roles.

## Error Handling
If there are any errors in fetching data from the OpenAI API, appropriate error messages are logged, and a user-friendly error message is displayed.

## Testing and Validation
Conduct thorough testing to validate the functionality of the application. Perform unit tests, integration tests, and user acceptance tests to ensure the application meets all requirements and provides a seamless user experience.

## Conclusion
CareerCraft leverages modern web technologies and AI capabilities to offer personalized career guidance. By analyzing user resumes and providing tailored career path suggestions, CareerCraft aims to simplify the job-seeking process and help users make informed career decisions.

## References
- <a href="https://www.mongodb.com/docs/" target="_blank">MongoDB Documentation</a>
- <a href="https://platform.openai.com/docs/quickstart?context=node" target="_blank">OpenAI Documentation</a>
- <a href="https://expressjs.com/" target="_blank">Express Documentation</a>

## Useful VS Code Extensions

Here are some useful VS Code extensions to enhance your development experience:

- **<a href="https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode" target="_blank">MongoDB for VS Code</a>**: MongoDB for VS Code
- **<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier - Code formatter</a>**: Prettier - Code formatter

# CareerCraft User Guide

Welcome to CareerCraft! This guide will help you navigate and use CareerCraft to discover the best career paths suited for you based on your resume. Follow these simple steps to get started.

## Introduction
CareerCraft is an easy-to-use web application designed to help you find the best career path based on the content of your resume. By leveraging advanced AI technology, CareerCraft provides personalized career advice and recommendations.

## Accessing CareerCraft
To access CareerCraft, open your web browser and go to the <a href="https://careercraft-web-app.azurewebsites.net" target="_blank">CareerCraft website</a>.

## Uploading Your Resume
Once you are on the CareerCraft homepage, follow these steps to upload your resume:
1. Locate the Resume Upload Section: On the main page, you will see a section labeled "Upload Your Resume."
2. Choose a File: Click the "Choose File" button to open a file dialog. Select your resume file from your computer. Supported formats include .pdf and .docx.
3. Paste Resume Text (Optional): If you prefer, you can paste the text of your resume directly into the provided text box.
4. Submit Your Resume: After selecting your file or pasting your resume text, click the "Submit" button to upload your resume.

## Viewing Career Suggestions
After submitting your resume, CareerCraft will process the information and generate career suggestions for you. This may take a few moments. Once the analysis is complete:
1. Results Section: Your career suggestions will be displayed in the results section.
2. Career Path Recommendations: You will see a list of recommended career paths, each with a brief description and a percentage that matches your resume.
3. Skills and Learning Suggestions: CareerCraft will also provide a list of your strong skills and suggest additional skills or certifications that could benefit your career development.
4. Industry Trends: Stay updated with the latest trends in your suggested career fields.
5. Salary Expectations: Get an idea of the salary ranges for the recommended career paths.

## Understanding Your Results
CareerCraft's results are designed to be easy to understand. Here’s a breakdown of the information provided:
- Summary: A summary of your resume's content.
- Career Path: Detailed roles and percentage matches based on your resume. Each role will have an overview.
- Strong Skills: A list of key skills categorized with brief descriptions.
- Suggested Learning: Additional skills to learn with explanations.
- Suggested Certifications: Relevant industry certifications and courses with links.
- Industry Trends: Descriptions of current trends in the industry.
- Salary Expectations: Salary ranges for the suggested roles.
