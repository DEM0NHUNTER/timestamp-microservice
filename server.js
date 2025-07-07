const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

app.get('/api/:date?', (req, res) => {
  const { date } = req.params;
  let parsedDate;

  if (!date) {
    parsedDate = new Date();
  } else if (/^\d+$/.test(date)) {
    parsedDate = new Date(parseInt(date));
  } else {
    parsedDate = new Date(date);
  }

  if (parsedDate.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString()
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
