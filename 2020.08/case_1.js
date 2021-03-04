// 判断有无xx目录，没有就创建该目录
let fs = require("fs");
fs.stat("upload", (err, stats) => {
  if (err) {
    fs.mkdir("upload", (error) => {
      if (error) {
        console.log("创建失败", error);
      } else {
        console.log("创建upload目录成功");
      }
    });
  } else {
    console.log("stats信息：", stats);
    console.log("已有upload目录");
  }
});
