// 利用http模块、url模块、path模块、fs模块创建一个Web服务器

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
http
  .createServer((req, res) => {
    // let pathName = req.url;
    let pathName = url.parse(req.url).pathname;

    if (pathName == "/") {
      pathName = "index.html";
    }

    let extName = path.extname(pathName);

    if (pathName != "/favicon.ico") {
      fs.readFile("./07_WebService/" + pathName, (err, data) => {
        if (err) {
          console.log("404 Not Found");
          fs.readFile(
            "./07_WebService/404.html",
            (errNotFound, dataNotFound) => {
              if (errNotFound) {
                console.log(errNotFound);
              } else {
                res.writeHead(200, {
                  "Content-Type": "text/html; charset='utf-8'",
                });
                res.write(dataNotFound);
                res.end();
              }
            }
          );
          return;
        } else {
          let ext = getExt(extName); //获取文件类型
          res.writeHead(200, {
            "Content-Type": ext + "; charset='utf-8'",
          });
          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(8080);

getExt = (extName) => {
  // switch(extName) {
  //     case '.html': return 'text/html';
  //     case '.css': return 'text/css';
  //     case '.js': return 'text/js';
  //     default: return 'text/html';
  // }
  let data = fs.readFileSync("./07_ext.json"); // 需要执行同步操作: sync
  let ext = JSON.parse(data.toString());
  return ext[extName];
};
