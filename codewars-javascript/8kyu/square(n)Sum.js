//Problem: Square(n) Sum (8 kyu)
//https://www.codewars.com/kata/515e271a311df0350d00000f

//--------------Code--------------
/*function squareSum(numbers){
  let sum = 0;
  for (const num of numbers) {
    sum += num ** 2;
  }
  return sum;
}*/

const squareSum = (numbers) => numbers.reduce((sum, numbers) => sum + (numbers ** 2), 0)