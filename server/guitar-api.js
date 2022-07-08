const PORT = 3001;
const express = require("express");
const app = express();

const song = [
  [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 2, finger: 2 },
    { string: 3, fret: 2, finger: 3 },
  ],
  [
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 2, finger: 3 },
  ],
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api", (req, res) => {
  res.json(song);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
