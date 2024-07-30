# CareerCraft - Open AI Group Documentation

This repository contains the documentation for the Open AI Group project developed as part of the COMP2068-JavaScript Frameworks course at Georgian College.

## Table of Contents

- [Demo Link](#group-members)
- [Objectives](#objectives)
- [Technologies Used](#technologies-used)
- [Packages Used](#packages-used)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [Installation Steps](#installation-steps)
- [Environment Configuration](#environment-configuration)
- [API Integration](#api-integration)
  - [OpenAI API](#openai-api)
- [Database Management](#database-management)
  - [MongoDB Setup](#mongodb-setup)

## Demo Link
You can view demo <a href="https://careercraft-web-app.azurewebsites.net/" target="_blank">here</a>.

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
- **Mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
- **OpenAI:** A client library for accessing the OpenAI API from Node.js.

## Project Setup
### Prerequisites
Before setting up the project, ensure you have the following:
- NodeJS and NPM installed
- MongoDB connection string
- OpenAI API key

### Installation Steps
1. Clone the repository:		
    ```bash
	cd path/to/where/you/want/to/save/project/folder
    ```		
    ```bash
    git clone https://github.com/BasilBarnabyCa/s24-comp-2068-open-ai.git
	cd s24-comp-2068-open-ai
    ```		
2. Install dependencies:		
    ```bash
    npm install
    ```		
3. Configure environment variables:
    - Create a `.env` file in the root directory		
	```bash
    cp .env.example .env
    ```		
    - Add your OpenAI API key and MongoDB connection string

### API Integration
#### OpenAI API
1. Sign in to your OpenAI account:
    - Visit <a href="https://platform.openai.com/" target="_blank">OpenAI Platform</a>
2. Steps for generating your API key:
    - Click on your profile icon.
    - Select the option [Your Profile].
    - Under User API Keys, click View Project API keys, create a new secret key.
	- Copy secret key to the `.env` file.
	- NB once you close the secret window, you will not have access to copying the ke again.

### Database Management
#### MongoDB Setup
Steps to Create a MongoDB Account and Implement it in VS Code:
1. Create a Cluster:
    - Visit the <a href="https://www.mongodb.com/" target="_blank">MongoDB website</a> and sign in.
    - On the Overview page click the <strong>Create</strong> if you want to create a new cluster.
	- Select a tier.
	- Select a cluster name, provider and region of your choice.
	- Click <strong>Create Deployment</strong>
3. Create a Database User:
    - In the sidebar, click on <strong>Database Access</strong>.
    - Click on <strong>Add New Database User</strong>.
    - Select <strong>Password</strong> as the <strong>Authentication Method</strong>.
	- Enter a user name and click <strong>Autogenerate Password</strong>.
	- Under <strong>Built-in Role </strong>, select <strong>Atlas admin</strong>.
	- Click <strong>Add User</strong>.
4. Update Network Access:
    - In the sidebar, click on <strong>Network Access</strong>.
    - Click on <strong>Add IP Address</strong>.
	- Enter a desired whitelisted IP address or enter <strong>0.0.0.0</strong> so the DB can be accessed by anyone.
	- Click on <strong>Confirm</strong>.
5. Get the Connection String:
    - In the sidebar, click on <strong>Database</strong>.
	- Click on <strong>Connect</strong>.
	- Select <strong>MongoDB for VS Code</strong>.
	- Copy your connection string and paste in the `.env` file in your project.
    - It will look something like this:		
      ```bash
      mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbName>
      ```		
    - Replace `<username>`, `<password>`, and `<dbName>` with your MongoDB username, password, and database name respectively.		
6. Install MongoDB Extension for VS Code:
    - Open Visual Studio Code.
    - Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
    - Search for "MongoDB for VS Code" and install the extension.
7. Connect to MongoDB in VS Code:
    - Open the Command Palette (Ctrl+Shift+P) and type MongoDB: Connect.
    - Select "Add Connection String" and paste the connection string you copied earlier.

## References
- <a href="https://www.mongodb.com/docs/" target="_blank">MongoDB Documentation</a>
- <a href="https://platform.openai.com/docs/quickstart?context=node" target="_blank">OpenAI Documentation</a>
- <a href="https://expressjs.com/" target="_blank">Express Documentation</a>

## Useful VS Code Extensions
Here are some useful VS Code extensions to enhance your development experience:

- **<a href="https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode" target="_blank">MongoDB for VS Code</a>**: MongoDB for VS Code
- **<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier - Code formatter</a>**: Prettier - Code formatter

# CareerCraft User Guide
## Uploading Your Resume
Once you are on the CareerCraft homepage, follow these steps to upload your resume:
1. Locate and copy the Resume Upload Section: On the main page, you will see a section labeled "Upload Your Resume."
2. Paste Resume text into textarea or type any career related information you want to query.
3. Click the submit button.

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
