// 底層已經寫好以下這行
// module.exports = exports = {};

let brand = "Ford";
let color = "red";
let price = "100"; // 萬
let size = "1000"; // cc

function getBrand() {
  return brand;
}

function showInfo() {
  console.log(`這台車的顏色${color}，CC數是${size}`);
}

// module.exports = {
//   getBrand,
//   showInfo,
//   price,
// };
