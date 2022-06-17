/*
 * @Author: 朽木白
 * @Date: 2022-06-17 22:27:49
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-17 22:48:53
 * @Description:
 */
const http = require('node:http');
const fs = require('node:fs');
const fsp = require('node:fs/promises');

const html = fs.readFileSync('./index.html');
const server = http.createServer(async (req, res) => {
  const stat = await fsp.stat('./index.html');
  res.setHeader('content-length', stat.size);
  fs.createReadStream('./index.html').pipe(res);
});

server.listen(3000, () => {
  console.log('Listening in localhost:3000');
});
