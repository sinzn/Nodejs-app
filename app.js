const express = require("express");
const app = express();
const port = 3000;

// Serve static files like CSS and client-side JavaScript
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js App</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="center-content">
                <h1>Hello from Node.js</h1>
                <p id="datetime">Loading date and time...</p>
            </div>
            <script src="/script.js"></script>
        </body>
        </html>
    `;

    res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

