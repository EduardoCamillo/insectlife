const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 
    'postgres://postgres:123@localhost:5432/ecommerce'
});

module.exports = pool;