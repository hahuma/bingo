import { bingoCardToArray } from "../helpers/bingoCardToArray.mjs";

const SUPPORTED_ACTIONS = {
  TOTAL: "total",
  LEFT: "left",
  MINE: "mine",
};

function showTotal(bingoCard) {
  console.log(bingoCard);
}

function showLeft(bingoCard, hasMarked = []) {
  const bingoCardAsArray = bingoCardToArray(bingoCard);

  const left = bingoCardAsArray.filter(
    (value) => hasMarked.indexOf(value) === -1
  );

  console.log("Restam os seguintes valores:", left);
}

function showMine(bingoCard, hasMarked = []) {
  const bingoCardAsArray = bingoCardToArray(bingoCard);

  const mine = bingoCardAsArray.filter(
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
