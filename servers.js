/*
 * @Author: 朽木白
 * @Date: 2022-06-17 22:27:49
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-17 22:32:12
 * @Description:
 */
const http = require('node:http');
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>docker</title>
  </head>
  <body>
    hello docker
  </body>
</html>`;
const server = http.createServer((req, res) => {
  res.end(html);
});

server.listen(3000, () => {
  console.log('Listening in localhost:3000');
});
