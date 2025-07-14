// express 생성
//router추가
// 게시글 전체 조회, 글등록,

const express = require("express");
require("dotenv").config({ path: "./mysql/.env" });

const path = require("path");
const cors = require("cors");

const { query } = require("./mysql/index.js");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());

// 라우터에 있는걸 사용하기위해서
// 따로 /boardList  사용할필요x(그건 postman에서 사용하기위함)
const apiRouter = require("./router/index.js");
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000 running...!!!");
});
