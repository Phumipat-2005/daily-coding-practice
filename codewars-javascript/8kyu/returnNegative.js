//Problem: Return Negative (8 kyu)
//https://www.codewars.com/kata/55685cd7ad70877c23000102

//--------------Code--------------
/*function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}*/

//const makeNegative = (num) => num > 0 ? -num : num;

const makeNegative = (num) => -Math.abs(num);