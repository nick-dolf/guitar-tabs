const PORT = 3001;
const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const song = JSON.parse(fs.readFileSync("song.json"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api", (req, res) => {
  res.json(song);
});

app.post("/api", (req, res) => {
  fs.writeFile("song.json", JSON.stringify(req.body), (err) => {
    if (err) throw err;
  });
  res.end();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});
