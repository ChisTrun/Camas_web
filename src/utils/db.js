const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

module.exports = {
  getAll: async (tbName) => {
    try {
      const sql = `select * from ${tbName}`;
      const result = await new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};
