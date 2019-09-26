const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.header("Cache-Control", "public, max-age=10000");
  res.send("It's Workingg!");
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
