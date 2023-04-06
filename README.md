# API Documentation

This API uses [Puppeteer](https://github.com/puppeteer/puppeteer), a Node.js library for controlling headless Chrome or Chromium, to take screenshots of different web pages.

**At the moment it provides three routes:**

1.  `/chart` - Returns a screenshot of a Kendo chart generated with Puppeteer (not yet).

2.  `/red-square` - Returns a screenshot of a red square generated with Puppeteer.

3.  `/google` - Returns a screenshot of Google homepage (any webpage) captured with Puppeteer.

## Installation
To use this API, you will need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your computer.

1.  Clone this repository to your local machine.
2.  Open a terminal window and navigate to the directory where you cloned this repository.
3.  Run the command `npm install` to install the necessary dependencies.
4. Start the server by running `node app.js`. The server will listen on the specified port. You will receive a notification in your terminal shell `"Installed successfully! The server is listening on port 3000"` 

## Usage

To use the API, send a POST request to any of the three routes described above. The response will be a base64 encoded image of the screenshot.

The mockup of the client-side app is below. Cope the HTML code below and create a separate file on your machine. Go life, by pressing "go life" button in VS code or alternatively open: http://127.0.0.1:5500/index.html

  

code here

  

### Example using curl

  

```bash

curl -X  POST  http://localhost:3000/chart > chart.png












