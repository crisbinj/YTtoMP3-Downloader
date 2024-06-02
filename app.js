const express = require('express');
const poji_ytmp3 = require('youtube-to-mp3-poji');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.json());

app.post('/convert', async (req, res) => {
  const youtubeUrl = req.body.youtubeUrl;
  try {
    const data = await poji_ytmp3(youtubeUrl);
    const linkk = data.data.link;
    res.json({ linkk });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
