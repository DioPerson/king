// index.js - Node.js 基础示例

// 引入内置模块
const http = require('http');
const path = require('path');
const fs = require('fs');



// --------------------------
// 基础 Express 服务器示例
// --------------------------
const app = express();
const port = process.env.PORT || 3000;

// 基础中间件
app.use(express.json()); // 解析 JSON 请求体
app.use(express.urlencoded({ extended: true })); // 解析 URL-encoded 请求体

// 静态文件服务（创建 public 文件夹存放静态文件）
app.use(express.static(path.join(__dirname, 'public')));

// 基础路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API 示例路由
app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is sample API response',
    timestamp: Date.now(),
    status: 'OK'
  });
});

// 404 处理
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// simpleServer.listen(8080, () => {
//   console.log('Simple server running on port 8080');
// });

// --------------------------
// 其他工具函数示例
// --------------------------
function sampleUtility() {
  console.log('Utility function called');
}

module.exports = {
  sampleUtility
};
