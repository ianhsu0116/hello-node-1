const axios = require("axios");
const moment = require("moment");

let stockCode = "0050";
let today = moment().format("YYYYMMDD");
let format = "json";

// "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=" + format + "&date=" + today + "&stockNo=" + stockCode
// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`

async function getStockData(format, today, stockCode) {
  try {
    let res = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          stockNo: stockCode,
          date: today,
          response: format,
        },
      }
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("done");
  }
}

getStockData(format, today, stockCode);

// promise
// axios
//   .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//     params: {
//       response: format,
//       date: today,
//       stockNo: stockCode,
//     },
//   })
//   .then((res) => {
//     // HTTP response
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.error("發生錯誤啦", e);
//   });
