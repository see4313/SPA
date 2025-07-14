// 실행할 쿼리(board.js)
// 전체글목록, 글 등록(수정), 단건조회-댓글목록,

// const { query } = require(".");

module.exports = {
  // 전체목록조회
  boardList: {
    query: `SELECT b.no, b.title, b.writer, b.content, b.created_date, b.updated_date, count(c.no) as count 
            FROM t_board_board b LEFT JOIN t_comment_board c on b.no = c.bno 
            GROUP BY  b.no, b.title, b.writer, b.content, b.created_date, b.updated_date`,
  },

  // 단건조회
  boardDetail: { query: `select * from t_board_board where no = ?` },

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
