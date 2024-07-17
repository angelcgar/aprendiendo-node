import { mkdirSync, writeFile, writeFileSync } from "node:fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;
let outputMessage: string = "";
let outputPath = "outputs";
const headerTitle: string = `
===========================
    Tabla del ${base}
===========================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} * ${i} = ${base * i}\n`;
}

outputMessage = headerTitle + outputMessage;
if (showTable) {
  console.log(outputMessage);
}

mkdirSync(outputPath, { recursive: true });
writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage, "utf-8");

console.log("File created!");
