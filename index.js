import { CharStreams, CommonTokenStream } from 'antlr4';
import fs from 'fs';
import readline from 'readline';

import MiLenguajeLexer from './generated/MiLenguajeLexer.js';
import MiLenguajeParser from './generated/MiLenguajeParser.js';
import CustomMiLenguajeVisitor from './CustomMiLenguajeVisitor.js';

async function main() {
  let input;

  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch (err) {
    input = await leerCadena();
  }

  const inputStream = CharStreams.fromString(input);
  const lexer = new MiLenguajeLexer(inputStream);
  const tokens = lexer.getAllTokens();

  if (tokens.length === 0) {
    console.error("No se generaron tokens. Verifica la entrada.");
    return;
  }

  console.log("\nTabla de Tokens y Lexemas:");
  console.log("--------------------------------------------------");
  console.log("| Lexema         | Token                         |");
  console.log("--------------------------------------------------");
  for (const token of tokens) {
    const tokenType = MiLenguajeLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    console.log(`| ${token.text.padEnd(14)} | ${tokenType.padEnd(30)}|`);
  }
  console.log("--------------------------------------------------");

  // Necesitamos recrear el stream porque getAllTokens consume todo
  const inputStream2 = CharStreams.fromString(input);
  const lexer2 = new MiLenguajeLexer(inputStream2);
  const tokenStream = new CommonTokenStream(lexer2);
  const parser = new MiLenguajeParser(tokenStream);

  const tree = parser.prog();

  if (parser._syntaxErrors > 0) {
    console.error("Se encontraron errores de sintaxis.");
    return;
  }

  console.log("\nEntrada válida.");
  console.log("Árbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));

  const visitor = new CustomMiLenguajeVisitor();
  const jsCode = visitor.visit(tree);

  console.log("\n--- Código JavaScript generado ---\n");
  console.log(jsCode);

  console.log("\n--- Salida al ejecutar el código generado ---\n");

  try {
    eval(jsCode);
  } catch (e) {
    console.error("❌ Error al ejecutar el código generado:", e.message);
  }
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Ingrese una cadena: ", answer => {
      rl.close();
      resolve(answer);
    });
  });
}

main();
