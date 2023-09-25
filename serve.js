const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호

// 정적 파일 서비스 설정 (HTML, JavaScript 파일을 호스팅)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
