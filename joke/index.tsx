const express = require('express');
const poji_ytmp3 = require('youtube-to-mp3-poji');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/convert', async (req, res) => {
  const youtubeUrl = req.body.youtubeUrl;
  try {
    const data = await poji_ytmp3(youtubeUrl);
    const linkk = data.data.link;
    res.json({ link: linkk });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send("Error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
