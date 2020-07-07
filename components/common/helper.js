const endingOfWord = (value) => {
  const lastNumOfAmount = value % 10;
  const twoLastNumOfAmount = value % 100;
  if (lastNumOfAmount !== 1 || twoLastNumOfAmount === 11) {
    if ([12, 13, 14].includes(twoLastNumOfAmount)) {
      return 'ів';
    }
    if ([2, 3, 4].includes(lastNumOfAmount)) {
      return 'и';
    }
    return 'ів';
  }
  return '';
};
const HelperFun = {
  endingOfWord,
};
export default HelperFun;
