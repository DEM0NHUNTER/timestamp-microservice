const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/:date?", (req, res) => {
  const { date } = req.params;
  let parsedDate = date ? new Date(date) : new Date();

  // Handle invalid dates
  if (date && isNaN(parsedDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Return Unix timestamp and UTC string
  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});