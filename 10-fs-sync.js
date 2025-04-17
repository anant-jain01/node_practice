const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);
const third = writeFileSync("./content/result-sync.txt", "reasult@123");
console.log(third);
const read_third = readFileSync("./content/result-sync.txt", "utf8");
console.log(read_third);
//flag:a appends
