export function getRandomNumberBtwNums(
  startNum: number,
  endNum: number
): number {
  const randomNum = Math.floor(Math.random() * (endNum - startNum) + startNum);
  return randomNum;
}
