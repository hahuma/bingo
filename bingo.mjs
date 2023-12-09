import readline from "readline";
import { showCommandOptions } from "./commands/show.mjs";
import { cartelaToArray } from "./helpers/cartelaToArray.mjs";
import { initBingoText, validCommands } from "./helpers/initBingoText.mjs";
import {
  handleMainCommandsErrors,
  handleMarkErrors,
  handleShowErrors,
  handleUnmarkErrors,
} from "./errors/handlers.mjs";

const cartela = {
  b: [3, 11, 12, 1, 15],
  i: [27, 16, 17, 26, 18],
  n: [40, 36, 42, 41, 35],
  g: [51, 57, 50, 47, 53],
  o: [66, 71, 61, 67, 62],
};

let hasMarked = [];

let totalMarked = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

initBingoText();

rl.on("line", (input) => {
  if (!input || input.length === 0 || input.split(" ").length !== 2) {
    console.log("Digite um comando válido.");
    console.log(validCommands);
  }

  const [command, arg] = input.split(" ");

  console.clear();
  const hasError = handleMainCommandsErrors(command);

  if (hasError) return;

  switch (command) {
    case "mark": {
      const cartelaAsArray = cartelaToArray(cartela);
      const value = +arg;

      console.clear();

      const hasErrors = handleMarkErrors(+arg, cartelaAsArray, hasMarked);

      if (hasErrors) break;

      hasMarked.push(value);
      totalMarked = totalMarked + 1;

      console.log("Seus itens marcados", hasMarked);
      console.log("Total marcado", totalMarked);

      if (totalMarked === 25 && hasMarked.length === 25) {
        console.log("BINGO!!!!");
        break;
      }

      break;
    }
    case "unmark": {
      const cartelaAsArray = cartelaToArray(cartela);
      const value = +arg;

      console.clear();

      const hasErrors = handleUnmarkErrors(+arg, cartelaAsArray, hasMarked);

      if (hasErrors) break;

      hasMarked = hasMarked.filter((markedValue) => markedValue !== value);
      totalMarked = totalMarked - 1;

      console.log("Seus itens marcados", hasMarked);
      break;
    }

    case "show": {
      console.clear();

      const hasErrors = handleShowErrors(arg);

      if (hasErrors) break;

      showCommandOptions[arg](cartela, hasMarked);
      break;
    }
  }
});
