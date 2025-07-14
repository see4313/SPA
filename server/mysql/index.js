// 실행할 쿼리문 작성
const mysql = require("mysql2");
const sql = require("./board.js");

const pool = mysql.createPool({
  //.ENV에 지정해놓은 변수명대로 적어주면 됨
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: process.env.LIMIT,
});

async function query(alias, values, where) {
  return new Promise((resolve, reject) => {
    console.log(sql[alias].query + where);
    pool.query(sql[alias].query + where, values, (err, result) => {
      if (err) {
        console.log("처리중 에러", err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { query };
