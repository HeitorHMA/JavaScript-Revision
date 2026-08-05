const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function createTable() {
  const querySQL = `
  CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL, 
  price NUMERIC(10, 2) NOT NULL);`;
  try {
    await pool.query(querySQL);
    console.log(`table created`);
  } catch (error) {
    console.error(`error`, error.message);
  } finally {
    await pool.end();
  }
}
module.exports = pool;
createTable();
