const express = require("express");
const app = express();
const port = 2400;
const productArray = ["bag", "ball", "doll", "videogame"];
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json(productArray);
});

/*app.post("/", (req, res) => {
  const newProduct = req.body.name;
  productArray.push(newProduct);
  res.status(201).json(productArray);
  console.log("posted");
});*/

app.delete("/:index", (req, res) => {
  const index = req.params.index;
  productArray.splice(index, 1);
  res.status(200).json(productArray);
  console.log(
    `Array Updated, element : ${productArray[index]} was successfully deleted`,
  );
});

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`);
});
