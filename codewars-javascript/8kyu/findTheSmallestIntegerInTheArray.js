//Problem: Find the smallest integer in the array (8 kyu)
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

//--------------Code--------------
/*function findSmallestInt(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}*/

const findSmallestInt = (arr) => Math.min(...arr);