const getRandomItemFromArray = (array: any[]) =>
  array[Math.floor(Math.random() * array.length)];

export default getRandomItemFromArray;
