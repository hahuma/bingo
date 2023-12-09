import { cartelaToArray } from "../helpers/cartelaToArray.mjs";

const SUPPORTED_ACTIONS = {
  TOTAL: "total",
  LEFT: "left",
  MINE: "mine",
};

function showTotal(cartela) {
  console.log(cartela);
}

function showLeft(cartela, hasMarked = []) {
  const cartelaAsArray = cartelaToArray(cartela);

  const left = cartelaAsArray.filter(
    (value) => hasMarked.indexOf(value) === -1
  );

  console.log("Restam os seguintes valores:", left);
}

function showMine(cartela, hasMarked = []) {
  const cartelaAsArray = cartelaToArray(cartela);

  const mine = cartelaAsArray.filter(
    (value) => hasMarked.indexOf(value) !== -1
  );

  console.log("Meus valores já marcados:", mine);
}

const options = {
  [SUPPORTED_ACTIONS.TOTAL]: showTotal,
  [SUPPORTED_ACTIONS.LEFT]: showLeft,
  [SUPPORTED_ACTIONS.MINE]: showMine,
};

export { options as showCommandOptions };

export { showLeft, showTotal, showMine };
export { SUPPORTED_ACTIONS };
