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
  - [License](#license)

## Introduction

This project is a web application to demo the use of OpenAI's API. 
It leverages ChatGPT to give career advice and resume tips for new developers.

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

### License

In order to obtain an API key chatGPT you can follow the online [openAI documentation](https://platform.openai.com/docs/api-reference/authentication).
