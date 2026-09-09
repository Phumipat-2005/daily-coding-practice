//Problem: You're a square! (7 kyu)
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e

//--------------Code--------------
/*var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}*/

/*var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
};*/

const isSquare = n => Number.isInteger(Math.sqrt(n));