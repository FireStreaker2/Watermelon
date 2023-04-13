require('dotenv').config();
const express = require("express");

const app = express();
const port = 3000;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", async (req, res) => {

  const response = await openai.createImage({
    prompt: "Watermelon",
    n: 1,
    size: "256x256",
    response_format: "url",
  })

  var image_url = response.data.data[0].url;

  res.setHeader("Content-Type", "text/html");

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Watermelon">
        <meta name="keywords" content="FireStreaker2, Watermelon" />
        <meta name=”copyright” content=”FireStreaker2”>
        <meta property="og:title" content="Watermelon" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://github.com/FireStreaker2/Watermelon" />
        <meta property="og:image" content="https://firestreaker2.gq/watermelonFavicon.png" />
        <meta property="og:description" content="Watermelon" />
        <meta name="theme-color" content="#000000">
        <meta name="twitter:card" content="summary_large_image">
        
        <title>Watermelon</title>
        <link rel="icon" type="image/x-icon" href="https://firestreaker2.gq/watermelonFavicon.png" />
      </head>

      <body>
        <style>
          * {
            margin: 0;
          }

          img {
            width: 100%;
            height: 100%;
          }
        </style>
        <img src="${image_url}" />
      </body>
    </html>
  `);
});

app.listen(port || 3000, () => {
    console.log(`App is now listening on localhost:${port}`);
});