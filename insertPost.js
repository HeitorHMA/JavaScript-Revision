const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function insertInTable() {
  try {
    const sqlInsert = `
        INSERT INTO products (name, price)
        VALUES ($1, $2)
        RETURNING *
        `;
    const values = ["Mechanical Keyboard", 300.0];
    const resultInsert = await pool.query(sqlInsert, values);
    console.log(`product added`, resultInsert.rows[0]);

    const sqlSelect = "SELECT * FROM products;";
    const resultSelect = await pool.query(sqlSelect);

    console.log("\n Products list");
    console.table(resultSelect.rows);
  } catch (error) {
    console.error("Error", error.message);
  } finally {
    await pool.end();
  }
}
insertInTable();
