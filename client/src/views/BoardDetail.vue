<template>
  <p>글번호: {{ boardNo }}</p>
  <p>작성자: {{ getBoard.writer }}</p>
  <p>제목: {{ getBoard.title }}</p>
  <p>내용: {{ getBoard.content }}</p>
  <p>작성일자: {{ getBoard.created_date }}</p>
  <p>댓글목록</p>
  <div :key="i" v-for="(comment, i) in commentList">
    <p>작성자: {{ comment.writer }}</p>
    <p>내용: {{ comment.content }}</p>
    <p>작성일자: {{ comment.created_date }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardNo: 0,
      getBoard: {},
      commentList: [],
    };
  },
  created() {
    this.boardNo = this.$route.query.boardNo;
  },
  methods: {
    async getBoardDetail() {
      let board = await this.$api("/api/boardDetail", {
        param: [this.boardNo],
      });
      this.getBoard = board[0];
    },
    async getComment() {
      this.commentList = await this.$api("/api/commentSelect", {
        param: [this.boardNo],
      });
    },
  },
  mounted() {
    this.getBoardDetail();
    this.getComment();
  },
};
</script>
