// 0. 为什么使用回调
getExt = () => {
  fs.readFile("07_ext.json", (err, data) => {
    // 思考：如何将这里的data传递到外面
    // 利用一个函数来完成，给这个函数起个好听的名字：回调函数
    // 实现：即getExt将一个函数当作参数传入，见1
  });
};

// 1. 可以通过callback回调函数来取得数据
console.log("1");
let fs = require("fs");
function callback(data) {
  // 回调函数
  console.log(data);
}
getExt = (callback) => {
  fs.readFile("07_ext.json", (err, data) => {
    callback(data);
  });
};
getExt(callback);

console.log("3");

// 2. 通过Node的events模块来解决异步问题
let fs = require("fs");
let events = require("events");
let EventEmitter = new events.EventEmitter();

getExt = () => {
  fs.readFile("07_ext.json", (err, data) => {
    EventEmitter.emit("data", data);
  });
};

getExt();

EventEmitter.on("data", (res) => {
  console.log(res);
});
