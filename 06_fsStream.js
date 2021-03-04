const fs = require("fs");
// 1. 流读取
let fileReadStream = fs.createReadStream("case_2.js");
let count = 0;
let str = "";
fileReadStream.on("data", (chunk) => {
  console.log(`次数：${++count}，接收到长度：${chunk.length}`);
  str += chunk;
});

fileReadStream.on("end", () => {
  console.log("——结束——");
  console.log(count);
  console.log(str);
});

fileReadStream.on("error", (err) => {
  console.log("err", err);
});

// 2.流写入
let data = 'console.log("Hello World! 我要存入数据！")';
// 创建一个可以写入的流，写入到文件 index.js 中
let writeStream = fs.createWriteStream('index.js');
// 开始写入
writeStream.write(data, 'utf8');
// 写入完成
writeStream.end();
writeStream.on('finish', () => {
  console.log('写入完成！');
  // Console：写入完成
});

