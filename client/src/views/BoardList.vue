<template>
  <table class="t_board">
    <thead>
      <tr>
        <th>No.</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일자</th>
        <th>댓글 수</th>
      </tr>
    </thead>
    <tbody>
      <tr
        :key="i"
        v-for="(board, i) in boardList"
        @click="goToDetail(board.no)"
      >
        <td>{{ board.no }}</td>
        <td>{{ board.title }}</td>
        <td>{{ board.writer }}</td>
        <td>{{ board.created_date }}</td>
        <td>{{ board.count }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      boardList: [],
    };
  },
  methods: {
    async getBoardList() {
      console.log("데이터:");
      this.boardList = await this.$api("/api/boardList", {});
      console.log("데이터:", this.boardList);
    },
    goToDetail(boardNo) {
      this.$router.push({
        name: "boardDetail",
        query: { boardNo: boardNo },
      });
    },
  },
  mounted() {
    this.getBoardList();
  },
};
</script>
