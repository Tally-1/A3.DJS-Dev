// Copyright (c) 2023 Leo Aleksander Hartgen.
// see: CopyrightA3DJS.txt or https://github.com/Tally-1/A3.DJS-Dev/blob/main/CopyrightA3DJS.txt

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
