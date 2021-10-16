const fs = require("fs");
// const { promises } = require("stream");

// 1. new Promise
// 2. 製作執行函式
// 3. 把非同步函式放進去
// 4.1 成功的地方，呼叫 resolve 把資料傳出來
// 4.2 失敗的地方，呼叫 reject 把錯誤傳出來no

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("inputA.txt", "utf-8", (err, data) => {
      if (err) {
        // console.log("發生錯誤喔", err);
        reject(err);
      } else {
        // console.log("拿到資料：", data);
        resolve(data);
      }
    });
  });
}

let p = readFilePromise();
p.then((data) => {
  console.log("Promise版本成功", data);
}).catch((err) => {
  console.error("Promise版本失敗", err);
});

// 課堂練習
function practice() {
  return new Promise((good, bad) => {
    fs.readFile("input.txt", "utf-8", (err, data) => {
      if (err) {
        bad(err);
      } else {
        good(data);
      }
    });
  });
}

practice()
  .then((data) => {
    console.log("正確讀到", data);
  })
  .catch((err) => {
    console.error("發生錯誤", err);
  });
