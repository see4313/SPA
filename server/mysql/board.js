// 실행할 쿼리(board.js)
// 전체글목록, 글 등록(수정), 단건조회-댓글목록,

// const { query } = require(".");

module.exports = {
  // 전체목록조회
  boardList: {
    query: `SELECT * FROM t_board_board`,
  },

  // 단건조회
  boardSelect: { query: `select * from t_board_board where no = ?` },

  // 단건조회(댓글목록)
  commentSelect: { query: `select * from t_comment_board where bno = ?` },

  // 글 등록
  boardInsert: {
    query: `insert into t_board_board (title, writer, content, created_date, updated_date) VALUES (?, ?, ?, ?, ?)`,
  },

  // //글 수정
  // updateBoard: {
  //   query: `update t_board_board `,
  // },
};
