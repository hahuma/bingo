import { SUPPORTED_ACTIONS } from "../commands/show.mjs";

function handleMarkErrors(value, cartelaArray, hasMarked) {
  let hasErrors = false;

  if (isNaN(value)) {
    console.log("Valor inválido");
    hasErrors = true;
  }

  if (!hasErrors && cartelaArray.indexOf(value) === -1) {
    console.log("Seu bingo não tem esse número");
    hasErrors = true;
  }

  if (!hasErrors && hasMarked.indexOf(value) !== -1) {
    console.log("Valor já selecionado");
    hasErrors = true;
  }

  return hasErrors;
}

function handleUnmarkErrors(value, cartelaArray, hasMarked) {
  let hasErrors = false;

  if (isNaN(value)) {
    console.log("Valor inválido");
    hasErrors = true;
  }

  if (!hasErrors && cartelaArray.indexOf(value) === -1) {
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

export { handleMarkErrors, handleUnmarkErrors, handleShowErrors };
