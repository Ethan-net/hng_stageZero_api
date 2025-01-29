**Simple API for User Information**

This is a simple API that returns basic user information, including your email, the current date and time, and the GitHub URL of this project. The API is built using Node.js and Express.

**Features**

Returns the user's email
Returns the current date and time in UTC format
Returns the GitHub URL of the project

**Endpoint**

GET /mydata
This endpoint returns a JSON response with the following information:
email: Your email address
current_datetime: The current date and time in UTC format
github_url: The GitHub URL of the project

**Example Response**

{
"email": "koredeajibola@gmail.com",
"current_datetime": "2025-01-29T08:00:00.000Z",
"github_url": "https://github.com/Ethan-net/hng_stageZero_api.git"
}

**Requirements**

Node.js (v12 or higher)
npm (Node Package Manager)

**Installation**

_Clone the repository_:
git clone https://github.com/Ethan-net/hng_stageZero_api.git
_Navigate into the project directory_:
cd hng*stageZero_api
\_Install the dependencies*:
npm install

**Running the API**

_To start the server, run_:
npm start
By default, the API will be accessible at http://localhost:4000.

**Deployment**

You can host this API on platforms like Heroku, Render, or any other cloud service. Refer to their documentation for instructions on how to deploy Node.js applications.

**License**
This project is licensed under the MIT License - see the LICENSE file for details.
