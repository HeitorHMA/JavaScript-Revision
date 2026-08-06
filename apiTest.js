require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function startDataBase() {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price NUMERIC(10,2) NOT NULL
        );
        `);
  console.log("Table 'products' verified in postgreSQL");
}
startDataBase();

app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products;");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: "Error while searching products" });
  }
});
app.post("/products", async (req, res) => {
  const { name, price } = req.body;

  try {
    const sql =
      "INSERT INTO products (name,price) VALUES ($1, $2) RETURNING *;";
    const result = await pool.query(sql, [name, price]);
    res.status(201).json(result.row[0]);
  } catch (error) {
    res.status(500).json({ error: "Error while adding product" });
  }
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const sql = `
        UPDATE products
        SET name = $1, price = $2
        WHERE id = $3
        RETURNING *;
        `;
    const result = await pool.query(sql, [name, price, id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "product not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "error while updating product" });
  }
});
app.listen(3000, () => {
  console.log("server launched at http://localhost:300 ");
});
