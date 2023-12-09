const firstInitText = `
  Olá, seja bem vindo ao seu verificador de bingo!
`;

const validCommands = `
  Lista de comandos aceitos:
  - mark <number>
  - unmark <number>
  - show <total|left|mine>
`;

function initBingoText() {
  console.clear();
  process.stdout.write(firstInitText);
  process.stdout.write(validCommands);
}

export { validCommands, firstInitText };
export { initBingoText };
