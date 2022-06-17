/*
 * @Author: 朽木白
 * @Date: 2022-06-17 22:27:49
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-17 22:35:15
 * @Description:
 */
const http = require('node:http');
const fs = require('node:fs');

const html = fs.readFileSync('./index.html');
const server = http.createServer((req, res) => {
  res.end(html);
});

server.listen(3000, () => {
  console.log('Listening in localhost:3000');
});
