## eventLoop-quiz

**code1:**

<pre><code>function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}

readData(0);
console.log("after");</code></pre>

**Answer1:**

> A1. 執行結果：

<pre><code>
1
2
3
...
498
499
500
after</code></pre>

> A2. after 會在什麼數字後印出？ 為什麼？

> 500, 因為執行 **readData(0)** 後， for loop 會執行五次，idx 最終會被加到 500。直到執行完 **readData(0)** 且 **call stack** 空出來之後，才會去執行 **console.log("after")** 。
> 且因為 for, if 都是 JS 的 default function， **console** 也是 BOM，不會用到任何非 JS runtime (e.g. V8) 提供的 api，因此所有過程都只會在 call stack 中執行，也因此所有輸出內容會跟 coding 的順序一致。
