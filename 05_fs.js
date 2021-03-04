// require引入fs
let fs = require("fs");

//  1. fs.stat - 判断是文件还是目录
fs.stat("index.js", (error, stats) => {
  if (error) {
    console.log(error);
    return false;
  } else {
    console.log(stats);
    console.log(`文件：${stats.isFile()}`);
    // Console：文件：true
    console.log(`目录：${stats.isDirectory()}`);
    // Console：目录：false
    return false;
  }
});

//  2. fs.mkdir - 创建目录
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
fs.mkdir("css", (err) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log("创建目录成功！");
    // Console：创建目录成功！
  }
});

//  3. fs.writeFile - 写入文件
/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。存在即覆盖，不存在即创建
 * callback { Function } 回调，传递一个异常参数 err。
 */

fs.writeFile("index.js", "Hello jsliang", (err) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log("写入成功！");
  }
});

// 4. fs.appendFile - 进行文本追加

fs.appendFile('index.js','这里是要追加的文本内容',(error)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log('追加成功');
  }
})

// 5. fs.readFile - 读取文件
fs.readFile('index.js', (err, data) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log("读取文件成功！");
    console.log(data);
    // Console：
    // 读取文件成功！
    // <Buffer 48 65 6c 6c 6f 20 6a 73 6c 69 61 6e 67>
  }
})

// 6. fs.readdir 读取目录
fs.readdir('node_modules/jsliang-module', (err, data) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log("读取目录成功！");
    console.log(data);
    // Console：
    // 读取目录成功！
    // [ 'package.json', 'tools.js' ]
  }
})


// 7. fs.rename 重命名，还可用于的移动
fs.rename('index.js', 'jsliang.js', (err) => {
  if(err) {
    console.log(err);
    return false;
  } else {
    console.log("重命名成功！");
  }
})

//  8. fs.rmdir
/**
 * 接收参数
 * path - 将创建的目录路径
 * mode - 目录权限（读写权限），默认 0777
 * callback - 回调，传递异常参数 err
 */
fs.rmdir("css", (err) => {
  if (err) {
    console.log(err);
    return false;
  } else {
    console.log("删除目录成功！");
    // Console：删除目录成功！
  }
});

// 9. fs.unlink - 删除文件
fs.unlink('jsliang.js',(error)=>{
  if(error){
    console.log('error',error);
  }
  else{
    console.log('删除文件成功');
  }
})






