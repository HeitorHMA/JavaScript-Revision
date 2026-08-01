const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("TUNTUNTUN SAHUR");
});

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`);
});
