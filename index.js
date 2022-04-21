const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

app.listen(PORT, () =>
  console.log(`Good News: the server is really running on port ${PORT}`)
);
