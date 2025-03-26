const oracledb = require("oracledb");
require("dotenv").config();

async function getConnection() {
  return await oracledb.getConnection({
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    connectionString: process.env.ORACLE_CONNECTION_STRING
  });
}

async function getAllUsers() {
  const connection = await getConnection();
  const result = await connection.execute("SELECT * FROM users");
  await connection.close();
  return result.rows;
}

module.exports = { getAllUsers };