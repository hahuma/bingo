import { MAIN_COMMANDS } from "../commands/main.mjs";
import { SUPPORTED_ACTIONS } from "../commands/show.mjs";

function handleMarkErrors(value, bingoCardArray, hasMarked) {
  let hasErrors = false;

  if (isNaN(value)) {
    console.log("Valor inválido");
    hasErrors = true;
  }

  if (!hasErrors && bingoCardArray.indexOf(value) === -1) {
    console.log("Seu bingo não tem esse número");
    hasErrors = true;
  }

  if (!hasErrors && hasMarked.indexOf(value) !== -1) {
    console.log("Valor já selecionado");
    hasErrors = true;
  }

  return hasErrors;
}

function handleUnmarkErrors(value, bingoCardArray, hasMarked) {
  let hasErrors = false;

  if (isNaN(value)) {
    console.log("Valor inválido");
    hasErrors = true;
  }

  if (!hasErrors && bingoCardArray.indexOf(value) === -1) {
    console.log("Seu bingo não tem esse número");
    hasErrors = true;
  }

  if (!hasErrors && hasMarked.indexOf(value) === -1) {
    console.log("Valor não foi selecionado ainda");
    hasErrors = true;
  }

  return hasErrors;
}

function handleShowErrors(value) {
  let hasErrors = false;

  if (
    value !== SUPPORTED_ACTIONS.TOTAL &&
    value !== SUPPORTED_ACTIONS.LEFT &&
    value !== SUPPORTED_ACTIONS.MINE
  ) {
    console.log(`O comando ${value} é inválido`);

    hasErrors = true;
  }

  return hasErrors;
}

function handleMainCommandsErrors(command) {
  let hasErrors = false;

  if (
    command !== MAIN_COMMANDS.MARK &&
    command !== MAIN_COMMANDS.UNMARK &&
    command !== MAIN_COMMANDS.SHOW
  ) {
    console.log(`O comando ${command} é inválido`);

    hasErrors = true;
  }

  return hasErrors;
}

export {
  handleMarkErrors,
  handleUnmarkErrors,
  handleShowErrors,
  handleMainCommandsErrors,
};
