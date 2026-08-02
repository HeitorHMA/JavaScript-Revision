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

app.put("/:index", (req, res) => {
  const index = req.params.index;
  const newName = req.body.name;
  productArray[index] = newName;
  res.status(200).json(productArray);
  console.log(
    `Array Updated, element : ${newName} added to array at index : ${index}`,
  );
});

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}`);
});
