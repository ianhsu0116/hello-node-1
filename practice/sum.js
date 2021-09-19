console.log("hello world!");

function sum(param) {
  let total = 0;
  let i = 0;
  while (i <= param) {
    total += i;
    i++;
  }
  console.log(total);
}

sum(3);
