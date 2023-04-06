const puppeteer = require('puppeteer');
const express = require('express');
const kendoChart = require('@progress/kendo-charts');

// Create a new instance of express
const app = express();

// Define a route for the API
app.post('/chart', async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    await page.addScriptTag({ url: 'https://kendo.cdn.telerik.com/2023.1.314/js/jquery.min.js' });
    await page.addScriptTag({ url: 'https://kendo.cdn.telerik.com/2023.1.314/js/kendo.all.min.js' });

    const chartData = [10, 20, 30, 40, 50];
    const chartOptions = {
      title: {
        text: 'My Chart'
      },
      series: [{
        type: 'column',
        data: chartData
      }]
    };

    /* not working yet
    await page.evaluate((chartOptions) => {
      $(document).append('<div id="chart"></div>');
      $("#chart").kendoChart(chartOptions);

    }, chartOptions);
    */

    // Take a screenshot of the chart
    const screenshot = await page.screenshot({
      // saves screenshot in the API's root directory
      // path: 'screenshot.png',
      encoding: 'base64',
      fullPage: true
    });

    res.set('Content-Type', 'text/plain');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.send(screenshot);


    await browser.close();
  })();
});

// Define a route for the API
app.post('/red-square', async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    await page.evaluate((chartOptions) => {
      const div = document.createElement('div');
      div.style.backgroundColor = 'tomato';
      div.style.width = '100px';
      div.style.height = '100px';
      document.body.appendChild(div);
      // add red square here
    });

    // Take a screenshot of the chart
    const screenshot = await page.screenshot({
      // saves screenshot in the API's root directory
      // path: 'screenshot.png',
      encoding: 'base64',
      fullPage: true
    });

    res.set('Content-Type', 'text/plain');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.send(screenshot);


    await browser.close();
  })();
});

// Define a route for the API
app.post('/google', async (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    await page.goto('https://google.com');

    // Take a screenshot of the chart
    const screenshot = await page.screenshot({
      // saves screenshot in the API's root directory
      // path: 'screenshot.png',
      encoding: 'base64',
      fullPage: true
    });

    res.set('Content-Type', 'text/plain');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.send(screenshot);


    await browser.close();
  })();
});

// Start the server and listen on a port
const port = 3000;
app.listen(port, () => {
  console.log(`Installed successfully! The server is listening on port ${port}`);
});
