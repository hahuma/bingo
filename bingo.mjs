import readline from "readline";

const firstInitText = `
  Olá, seja bem vindo ao seu verificador de bingo!
`;

const validCommands = `
  Lista de comandos aceitos:
  - mark <number>
  - unmark <number>
  - show <total|left|mine>
`;

const SUPPORTED_ACTIONS = {
  TOTAL: "total",
  LEFT: "left",
  MINE: "mine",
};

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

console.clear();
process.stdout.write(firstInitText);
process.stdout.write(validCommands);

function showTotal() {
  console.log(cartela);
}

function showLeft() {
  const cartelaAsArray = cartelaToArray(cartela);

  const left = cartelaAsArray.filter(
    (value) => hasMarked.indexOf(value) === -1
  );

  console.log("Restam os seguintes valores:", left);
}

function showMine() {
  const cartelaAsArray = cartelaToArray(cartela);

  const mine = cartelaAsArray.filter(
    (value) => hasMarked.indexOf(value) !== -1
  );

  console.log("Meus valores já marcados:", mine);
}

rl.on("line", (input) => {
  if (!input || input.length === 0 || input.split(" ").length !== 2) {
    console.log("Digite um comando válido.");
    console.log(validCommands);
  }

  const [command, arg] = input.split(" ");

  function cartelaToArray(cartela) {
    const cartelaKeys = Object.values(cartela);
    const data = cartelaKeys.reduce((prev, curr) => {
      curr.forEach((value) => prev.push(value));

      return prev;
    }, []);

    return data;
  }

  switch (command) {
    case "mark": {
      const cartelaAsArray = cartelaToArray(cartela);
      const value = +arg;

      console.clear();

      if (isNaN(value)) {
        console.log("Valor inválido");
        break;
      }

      if (cartelaAsArray.indexOf(value) === -1) {
        console.log("Seu bingo não tem esse número");
        break;
      }

      if (hasMarked.indexOf(value) !== -1) {
        console.log("Valor já selecionado");
        break;
      }

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

      if (isNaN(value)) {
        console.log("Valor inválido");
        break;
      }

      if (cartelaAsArray.indexOf(value) === -1) {
        console.log("Seu bingo não tem esse número");
        break;
      }

      if (hasMarked.indexOf(value) === -1) {
        console.log("Valor não foi selecionado ainda");
        break;
      }

      hasMarked = hasMarked.filter((markedValue) => markedValue !== value);
      totalMarked = totalMarked - 1;

      console.log("Seus itens marcados", hasMarked);
      break;
    }

    case "show": {
      console.clear();

      if (
        arg !== SUPPORTED_ACTIONS.TOTAL &&
        arg !== SUPPORTED_ACTIONS.LEFT &&
        arg !== SUPPORTED_ACTIONS.MINE
      ) {
        console.log(`O comando ${arg} é inválido`);

        break;
      }

      const options = {
        [SUPPORTED_ACTIONS.TOTAL]: showTotal,
        [SUPPORTED_ACTIONS.LEFT]: showLeft,
        [SUPPORTED_ACTIONS.MINE]: showMine,
      };

      options[arg]();
      break;
    }
  }
});
