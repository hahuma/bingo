function cartelaToArray(cartela) {
  const cartelaKeys = Object.values(cartela);
  const cartelaAsArray = cartelaKeys.reduce((prev, curr) => {
    curr.forEach((value) => prev.push(value));

    return prev;
  }, []);

  return cartelaAsArray;
}

export { cartelaToArray };
