# Puppeteer Express API

This is an Express API built using Puppeteer to provide three routes:

1. `/chart` - Returns a screenshot of a Kendo chart generated with Puppeteer (not yet).
2. `/red-square` - Returns a screenshot of a red square generated with Puppeteer.
3. `/google` - Returns a screenshot of Google homepage (any webpage) captured with Puppeteer.

## Installation

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Start the server by running `node app.js`.

## Usage

To use the API, send a POST request to any of the three routes described above. The response will be a base64 encoded image of the screenshot.
The mockup of the client-side app is below. Cope the HTML code below and create a separate file on your machine. Go life, by pressing "go life" button in VS code or alternatively open: http://127.0.0.1:5500/index.html

code here

### Example using curl

```bash
curl -X POST http://localhost:3000/chart > chart.png
