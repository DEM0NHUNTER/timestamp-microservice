const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Serve static files from /public
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/:date?', (req, res) => {
  const { date } = req.params;
  let dateObj;

  if (!date) {
    dateObj = new Date();
  } else if (!isNaN(date)) {
    dateObj = new Date(parseInt(date));
  } else {
    dateObj = new Date(date);
  }

  if (dateObj.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString()
  });
});

// Listen on port from environment or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
