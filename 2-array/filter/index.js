function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(number => number % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((number, index) => collection.indexOf(number) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
