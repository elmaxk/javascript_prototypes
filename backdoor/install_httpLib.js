/* Install a library called browser-direct and add it to the express app */

const express = require("express");
const helmet = require("helmet");
const browserRedirect = require("browser-redirect ");

const app = express();

app.use(browserRedirect());
app.use(helmet());

app.get("/", (req, res) => {
    res.send("Hello Chrome User!")
});

app.listen(8080);