// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
const target = "http://localhost:3000"; // 백엔드 서버주소
module.exports = {
  devServer: {
    port: 8080, //프론트개발서버포트
    proxy: {
      // 다운로드라는 요청이 들어오면
      "^/download": {
        target,
        changeOrigin: true,
      },
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/upload": {
        target,
        changeOrigin: true,
      },
    },
  },
};
