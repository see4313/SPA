// express 생성
//router추가
// 게시글 전체 조회, 글등록,

const express = require("express");
require("dotenv").config({ path: "./mysql/.env" });

const fs = require("fs");
const path = require("path");
const cors = require("cors");

const { query } = require("./mysql/index.js");
const bodyParser = require("body-parser");

const app = express();

let uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Root Router");
});

app.get("/fileupload", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//데이터 쿼리하는 부분
// :alias는 파라미터값
app.post("/api/:alias", async (req, res) => {
  //라우팅정보를 통해서 실행할 쿼리지정. localhost:3000/api/productList
  console.log(req.params);
  console.log(req.body.param); // param: {product_name: ~} 의 방식으로 값을 넣어줘야됨
  // console.log(req.body.where);

  const result = await query(req.params.alias, req.body.param, req.body.where);
  res.send(result);
  console.log(result);
});

//게시글 전체 조회
app.get("/boardList", async (req, res) => {
  try {
    const result = await query("boardList");
    console.log(result);
    res.send(result);
  } catch (err) {
    res.send("에러발생=>", err);
  }
});

// 글등록
app.post("/boardInsert", async (req, res) => {
  try {
    let result = await query("boardInsert");
    res.send(result);
  } catch (err) {
    res.send("에러발생=>", err);
  }
});

// app.put("/updateBoard", async (req, res) => {
//   try {
//     let data = req.body.param;
//     let result = await query("updateBoard", data);
//     res.send(result);
//   } catch (err) {
//     res.send("에러발생 =>", err);
//   }
// });

app.listen(3000, () => {
  console.log("http://localhost:3000 running...!!!");
});
