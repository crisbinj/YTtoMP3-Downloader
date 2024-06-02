document.getElementById('convertForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    try {
      const response = await fetch('/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ youtubeUrl })
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      const linkk = data.linkk;
      
      const downloadLink = document.getElementById('downloadLink');
      const mp3Link = document.getElementById('mp3Link');
      mp3Link.href = linkk;
      downloadLink.style.display = 'block';
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while converting the video.');
    }
  });
  