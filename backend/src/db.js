const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_DATABASE, // ← correct
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
