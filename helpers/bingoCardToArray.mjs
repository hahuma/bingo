function bingoCardToArray(bingoCard) {
  const bingoCardKeys = Object.values(bingoCard);
  const bingoCardAsArray = bingoCardKeys.reduce((prev, curr) => {
    curr.forEach((value) => prev.push(value));

    return prev;
  }, []);

  return bingoCardAsArray;
}

export { bingoCardToArray };
