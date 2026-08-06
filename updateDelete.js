require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function updateFunction() {
  try {
    const sqlUpdate = `
        UPDATE products
        SET price = $1
        WHERE id = $2
        RETURNING *;
        `;
    const newValues = [199.99, 1];

    const resultUpdate = await pool.query(sqlUpdate, newValues);

    if (resultUpdate.rowCount > 0) {
      console.log("product updated", resultUpdate.rows[0]);
    } else {
      console.log("no product found");
    }

    console.log("\n products after UPDATE:");
    const selectAfterUpdate = await pool.query("SELECT * FROM products;");
    console.table(selectAfterUpdate.rows);

    const sqlDelete = "DELETE FROM products WHERE id = $1 RETURNING *;";
    const idToDelete = [1];

    const resultDelete = await pool.query(sqlDelete, idToDelete);

    if (resultDelete.rowCount > 0) {
      console.log("\n product deleted", resultDelete.rows[0]);
    } else {
      console.log("\n no product found delete");
    }

    console.log("\n products left");
    const selectFinal = await pool.query("SELECT * FROM products;");
    console.table(selectFinal.rows);
  } catch (error) {
    console.error("error", error.message);
  } finally {
    await pool.end();
  }
}

updateFunction();
