export const getDaySuffix = (day: number) => {
  const stNumbers = [1, 21, 31];
  const ndNumbers = [2, 22];
  const rdNumbers = [3, 23];
  switch (true) {
    case stNumbers.find((num) => num === day) === day:
      return `${day}st`;
    case ndNumbers.find((num) => num === day) === day:
      return `${day}nd`;
    case rdNumbers.find((num) => num === day) === day:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};
