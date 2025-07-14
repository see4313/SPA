<template>
  <table class="t_board">
    <thead>
      <tr>
        <th>No.</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일자</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(board, i) in boardList">
        <td>{{ board.no }}</td>
        <td>{{ board.title }}</td>
        <td>{{ board.writer }}</td>
        <td>{{ board.created_date }}</td>
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
      this.boardList = await this.$api("http://localhost:3000/boardList", {});
      console.log("데이터:", this.boardList);
    },
  },
  mounted() {
    this.getBoardList();
  },
};
</script>
