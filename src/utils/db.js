const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
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
        pool.query(sql, (err, data) => {
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
  },
  getRandom: async (tbName, condition, limit) => {
    try {
      const limitSql = parseInt(limit) ? parseInt(limit) : "";
      const conditionSql = condition != "" ? 'where ' + condition : '';
      const sql = `select * from ${tbName} ${conditionSql} ORDER BY RAND() ${limitSql}`;
      const result = await new Promise((resolve, reject) => {
        pool.query(sql, (err, data) => {
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
  },
  selectCondition: async (condition, tbName) => {
    try {
      let conditionString = "";
      if (condition) conditionString = ` WHERE ${condition}`;
      const result = await new Promise((resolve, reject) => {
        pool.query(`select distinct * from ${tbName} ${conditionString} `, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        })
      });
      return result;
    } catch (error) {
      throw error;
    };
  },
  insertInto: async (values, tbName) => {
    try {
      const result = await new Promise((resolve, reject) => {
        pool.query(`insert into ${tbName} values ${values}`, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        })
      })
      return result;
    } catch (error) {
      throw error;
    };

  }
};
