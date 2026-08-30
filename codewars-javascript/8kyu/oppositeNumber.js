//Problem: Opposite number (8 kyu)
//https://www.codewars.com/kata/56dec885c54a926dcd001095

//--------------Code--------------
/*function opposite(number) {
  return -number;
}*/

//const opposite = (number) => -number;

const opposite = (number) => ({number: -number}).number;