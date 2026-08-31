//Problem: Convert a String to a Number! (8 kyu)
//https://www.codewars.com/kata/544675c6f971f7399a000e79

//--------------Code--------------
/*const stringToNumber = function(str){
  return Number(str);
}*/

//const stringToNumber = (str) => +(str);

const stringToNumber = (str) => parseInt(str, 10);
