//Problem: Grasshopper - Summation (8 kyu)
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030

//--------------Code--------------
/*var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}*/

const summation = num => (num * (num + 1)) / 2;