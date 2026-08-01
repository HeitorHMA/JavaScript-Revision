const express = require("express");
const app = express();
const port = 2400;

app.get("/", (req, res) => {
  res.send("TUNTUNTUN SAHUR");
  const productArray = ["bag", "ball", "doll", "videogame"];
});

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`);
});
