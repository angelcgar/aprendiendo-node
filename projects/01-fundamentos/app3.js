const fs = require("node:fs");

const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ");

// const wordCountReact = content.replace(/React/gi);

// const wordCountReact = content.split("React")

const wordCountReact = content.match(/react/gi ?? []);

console.log("Palabras: ", wordCount.length);
console.log("Palabras de React: ", wordCountReact.length);
