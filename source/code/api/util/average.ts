// Copyright (c) 2023 Leo Aleksander Hartgen.
// BSD 3-Clause License

export default function average(numArr: number[]) {
  let sum = 0;
  for (const value of numArr) {
    if (typeof value == "number") {
      sum = sum + value;
    }
  }
  if (sum == 0) {
    return 0;
  }
  const average = Math.round(sum / numArr.length);
  return average;
}
