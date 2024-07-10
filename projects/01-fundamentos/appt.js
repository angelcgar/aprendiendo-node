const fs = require("node:fs");

setTimeout(() => {
  console.log("SetTimeout ======>");
}, 0);

const data = fs.readFileSync("README.md", "utf8");

console.log(data);
