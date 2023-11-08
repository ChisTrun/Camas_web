const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
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
