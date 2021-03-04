// 1. 加载http模块，创建http服务，并设置跨域的处理方式
// 2. 进行了请求的判断处理
// 3. 将请求的结果返回给客户端
const http = require("http");
const items = ["lch"]; // 模拟从数据库读取出来的数据
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // 访问控制允许来源，设置跨域为*
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // 设置header类型
    res.setHeader("Content-Type", "application/json"); // 跨域允许请求的方式
    switch (req.method) {
      // post 请求时，浏览器会先发一次 options 请求，如果请求通过，则继续发送正式的 post 请求
      case "OPTIONS":
        res.statusCode = 200;
        res.end();
        break;
      // get请求，直接返回数据
      case "GET":
        let data = JSON.stringify(items);
        res.write(data);
        res.end();
        break;
      case "POST":
        let item = "";
        req.on("data", (chunk) => {
          item += chunk;
        });
        req.on("end", () => {
          item = JSON.parse(item);
          console.log("item:", item);
          items.push(item.item);
          // 将数据返回到客户端
          let data = JSON.stringify(items);
          res.write(data);
          res.end();
        });
        break;
    }
  })
  .listen(3000);

console.log("http server is start...");


