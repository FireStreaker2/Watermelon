require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('static'));

app.post("/endpoint", urlencodedParser, async function (req, res) {
  
  var query = req.body.query;
  const response = await openai.createImage({
    prompt: query,
    n: 1,
    size: "256x256",
    response_format: "url",
  });

  image_url = response.data.data[0].url;
  res.send(image_url);
});

app.listen(port || 3000, () => {
    console.log(`App is now listening on localhost:${port}`);
});