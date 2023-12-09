import readline from "readline";

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

rl.on("line", (input) => {
  if (!input || input.length === 0 || input.split(" ").length !== 2) {
    console.log("Digite um comando válido.");
    console.log(`
    Lista de comandos aceitos:
    - mark <number>
    - unmark <number>
    - show <total|left|mine>
    `);
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

      break;const
    }
    case "unmark": {
      const cartelaAsArray = cartelaToArray(cartela);
      const value = +arg;

      if (isNaN(value)) {
        console.log("Valor inválido");
        break;
      }

      if (cartelaAsArray.indexOf(value) === -1) {
        console.log("Seu bingo não tem esse número");
        break;
      }

      if (hasMarked.indexOf(value) === -1) {
        console.log("Valor não foi selecionado");
        break;
      }

      hasMarked = hasMarked.filter((markedValue) => markedValue !== value);
      totalMarked = totalMarked - 1;

      console.log("Seus itens marcados", hasMarked);
      break;
    }
  }
});
