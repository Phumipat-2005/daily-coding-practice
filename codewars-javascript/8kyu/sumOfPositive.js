//Problem: Sum of positive (8 kyu)
//https://www.codewars.com/kata/5715eaedb436cf5606000381

//--------------Code--------------
/*function positiveSum(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}*/

//const positiveSum = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

const positiveSum = (arr) => arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);