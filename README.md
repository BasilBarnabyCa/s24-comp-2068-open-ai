# Career Craft - OpenAI API Demo

## Table of Contents

  - [Introduction](#introduction)
  - [Demo Site](#demo-application)
  - [Lesson Exercise](#lesson-exercise)
  - [Requirements](#requirements)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [API Integration](#api-integration)
  - [Prequisites](#prerequisites)
  - [Developers](#developers)
  - [References](#references)

## Introduction

In today's competitive job market, finding the right career path can be a daunting task. CareerCraft aims to simplify this process by utilizing state-of-the-art AI technology to analyze resumes and suggest optimal career paths for users. By integrating OpenAI's API, the application provides insightful and personalized career guidance, helping users make informed decisions about their professional futures.

## Demo Application

View the demo app [here](#).

## Lesson Exercise

### Requirements

- Node.js (v14 or later)
- npm (v6 or later)
- OpenAI API key

### Getting Started

1. **Clone the repository:**
    ```sh
    git clone https://github.com/BasilBarnabyCa/s24-comp-2068-open-ai
    cd s24-comp-2068-open-ai
    ```

2. **Install dependencies:**
    ```sh
    npm install or npm i
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add your OpenAI API key:
    ```sh
    OPENAI_API_KEY=your_openai_api_key
    ```

4. **Start the application:**
    ```sh
    npm start
    ```

### Usage

Once the application is running, you can access it at `http://localhost:3000`. 
The web app will allow users to input career-related questions and receive advice from the ChatGPT model.
If you would like to modify the port where your aplication is runing you can modify the line 
    ```javascript
    var port = normalizePort(process.env.PORT || '3000'); 
    ```
in the file `./bin/www`.

### Project Structure

- `app.js`: Main application file that sets up the server and middleware.
- `index.js`: Entry point of the application.
- `users.js`: Contains user-related data and functionality.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout open-ai-integration`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

### API Integration
## OpenAI API

Integrate OpenAI's API to analyze the content of uploaded resumes and generate career path recommendations. Ensure proper configuration and handling of API requests to maintain performance and reliability. The following steps are required to ensure OpenAI’s API integration is successfully implemented:

    Sign in to your OpenAI account:
        Visit OpenAI Platform
    Steps for generating your API key:
        Click on your profile icon.
        Select the option [Your Profile].
        Under User API Keys, create a new secret key.

Note: Although OpenAI provides some free tokens, they may not be sufficient to achieve the desired results for this project. It is highly recommended to fund your account for a better experience.

### Prerequisites
 
Before setting up the project, ensure you have the following:

   1. NodeJS and NPM installed
   2. MongoDB installed and running
   3. OpenAI API key

## Developers
1. [Basil Barnaby](https://github.com/BasilBarnabyCa) – 200540109
2. [Merik De Vree](https://github.com/merikdevree) – 200462061
3. [Nicolas Millan](https://github.com/NicolasMillan) – 200533728
4. [Michael Anthony](https://github.com/MikeyUko) - 200558549

### References

In order to obtain an API key chatGPT you can follow the online 
[openAI documentation](https://platform.openai.com/docs/api-reference/authentication).

If you would like to know more about MongoDB you can follow the online
[MongoDB documentation](https://www.mongodb.com/docs/)

If you would like to know more about Express.js you can follow the online
[Expressjs documentation](https://expressjs.com/)
