const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 
    'postgres://postgres:Mam%40ti21%23@localhost:5432/ecommerce',
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false }
    : false
});

module.exports = pool;