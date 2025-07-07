const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for testing and cross-origin
app.use(cors());

// Static files
app.use(express.static('public'));

// Root HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/:date?', (req, res) => {
  let dateInput = req.params.date;

  // Handle empty parameter — use current date
  let date;
  if (!dateInput) {
    date = new Date();
  } else if (!isNaN(dateInput)) {
    // Check for Unix timestamp (milliseconds)
    date = new Date(parseInt(dateInput));
  } else {
    // Try to parse natural date string
    date = new Date(dateInput);
  }

  // Validate date
  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
