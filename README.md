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

The mockup of the client-side app is below. 

### How to use Example HTML
Instruction how to use the code below:
1.  Save the HTML code provided below as a file with the ".html" extension.
2.  Make sure the API server is running on your local machine at port 3000.
3.  Go life, by pressing "Go life" button in VS code or alternatively, open the HTML file in a web browser. Or open: http://127.0.0.1:5500/index.html (make sure it is running on a different port than API, which is 3000)
4.  The web page should display three containers, each with a unique ID: "chart-container", "square-container", and "google-container". Screenshot of what you should be able to see:
![screenshot](https://raw.githubusercontent.com/stachaassuredsupport/api-puppeteer/master/browser-look-screenshot.png)
  
5.  The JavaScript code in the HTML file will use jQuery to make three Ajax requests to the API, one for each container.
6.  Each Ajax request will use the POST method to send a request to the API server and receive a binary image response.
7.  The binary response will be converted to a base64-encoded string and used to create an image element.
8.  The image element will be appended to the corresponding container on the web page.
9.  If the API server is working correctly, the web page should display three images generated by the API in the three containers. If there is an error, the text "Error generating chart image" will be displayed in the corresponding container.

Note that in the JavaScript code, the URLs for the Ajax requests are hardcoded to "[http://localhost:3000/chart](http://localhost:3000/chart)", "[http://localhost:3000/red-square](http://localhost:3000/red-square)", and "[http://localhost:3000/google](http://localhost:3000/google)". 

### Example HTML code

```bash

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Chart API Demo</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
      .my-image,
      .my-container {
        width: 100%;
        background-color: #bebebe;
        padding: 20px;
        box-sizing: border-box;
      }

      .main {
        display: flex;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div id="chart-container" class="my-container"></div>
      <br><br>
      <div id="square-container" class="my-container"></div>
      <br><br>
      <div id="google-container" class="my-container"></div>
    </div>
    <script>
      $(document).ready(function() {
        // Make an Ajax request to the chart API
        $.ajax({
          url: 'http://localhost:3000/google',
          type: 'POST',
          success: function(data) {
            // Create an image element from the binary response
            let img = new Image();
            img.id = "chart-image";
            img.src = 'data:image/png;base64,' + data;
            img.classList.add("my-image");

            // Append the image element to the chart container
            $('#google-container').append(img);
          },
          error: function(xhr, status, error) {
            console.error(error);
            $('#google-container').text('Error generating chart image');
          }
        });

        $.ajax({
          url: 'http://localhost:3000/red-square',
          type: 'POST',
          success: function(data) {
            // Create an image element from the binary response
            let img = new Image();
            img.id = "chart-image";
            img.src = 'data:image/png;base64,' + data;
            img.classList.add("my-image");

            // Append the image element to the chart container
            $('#square-container').append(img);
          },
          error: function(xhr, status, error) {
            console.error(error);
            $('#square-container').text('Error generating chart image');
          }
        });

        $.ajax({
          url: 'http://localhost:3000/chart',
          type: 'POST',
          success: function(data) {
            // Create an image element from the binary response
            let img = new Image();
            img.id = "chart-image";
            img.src = 'data:image/png;base64,' + data;
            img.classList.add("my-image");

            // Append the image element to the chart container
            $('#chart-container').append(img);
          },
          error: function(xhr, status, error) {
            console.error(error);
            $('#chart-container').text('Error generating chart image');
          }
        });
      });
    </script>
  </body>
</html>
```

### Dependencies errors on Linux (and potentially other OS)

You might get a console error, that looks like this: 

`error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`

This error message usually means that a graphical application or program is not running properly because the system is missing essential low-level libraries. This issue can happen more often on Windows Subsystem for Linux (WSL), which is lightweight and doesn't have a graphical environment except for WSLg. To fix it, you need to install the missing libraries before running the application again.

The combined command that worked for Stacha's Ubuntu Linux in April 2023 

Please note that you should verify the list of packages and their corresponding versions before running this command to avoid any issues with package conflicts or incompatibilities.

```bash
sudo apt install -y libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libxkbcommon0 libpango1.0-0 libasound2
```

///command

But there is the explaination, how to make it by yourself, based on the error messages you get: 

To resolve this (Debian/Ubuntu example):

1.  Search the package manager's packages for the one that is missing

```bash
apt search libnss3

```

2.  Determine a suitable candidate from the search results

```yaml
Sorting... Done
Full Text Search... Done
libnss3/oldstable,now 2:3.42.1-1+deb10u5 amd64
  Network Security Service libraries

libnss3-dev/oldstable 2:3.42.1-1+deb10u5 amd64
  Development files for the Network Security Service libraries

libnss3-tools/oldstable 2:3.42.1-1+deb10u5 amd64
  Network Security Service tools

nss-passwords/oldstable 0.2-2+b2 amd64
  read passwords from a keyring

```

3.  Install the candidate

```bash
sudo apt install -y libnss3

```

4.  Run your command again (restart server and reload port/browser where HTML file was oppened)

If this exact the error message goes away => success

If the error message changes => repeat 1, 2, 3 steps for the new error message

If the error message does not change => the library you installed didn't have the files you need, so uninstall and try a different one

```bash
sudo apt purge -y libnss3 && sudo apt autoremove
```

Full list of commands that worked for Stacha's Ubuntu Linux in April 2023:
 ` 610  apt search libnss3
  611  sudo apt install -y libnss3
  614  node app.js
  615  apt search libatk-1.0
  618  apt search libatk1.0-0
  619  sudo apt-get install -y libatk1.0-0
  620  node app.js
  621  apt-get install libatk-bridge2.0-0
  622  sudo apt-get install -y libatk-bridge2.0-0
  623  node app.js
  624  apt search libcups
  625  sudo apt-get install -y libcups2
  626  node app.js
  627  apt search libXcomposite
  628  sudo apt-get install -y libxcomposite1
  629  node app.js
  630  apt search libXdamage
  631  sudo apt-get install -y libxdamage1
  632  node app.js
  633  apt search libXfixes
  634  sudo apt-get install -y libxfixes3
  635  node app.js
  636  apt search libXrandr
  637  sudo apt-get install -y libxrandr2
  638  node app.js
  639  apt search libgbm
  640  sudo apt-get install -y libgbm1
  641  node app.js
  642  apt search libxkbcommon
  643  sudo apt-get install -y libxkbcommon0
  644  node app.js
  645  apt search libpango
  646  sudo apt-get install -y libpango1.0-0
  647  node app.js
  648  apt search libasound
  649  sudo apt-get install -y libasound2
  650  node app.js
`


### Additional resourses 

* Blog post how to customise your screenshot done with Puppeteer https://www.bannerbear.com/blog/how-to-take-screenshots-with-puppeteer/
* StackOverflow branch on WSL/Linux errors https://stackoverflow.com/questions/66214552/tmp-chromium-error-while-loading-shared-libraries-libnss3-so-cannot-open-sha
* Puppeteer docs https://pptr.dev/api/puppeteer.page._ 

