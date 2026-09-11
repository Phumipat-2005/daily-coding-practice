//Problem: Shortest Word (7 kyu)
//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

//--------------Code--------------
/*function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length));
}*/

function findShort(s){
  return s.split(' ')
          .map(word => word.length)
          .sort((a, b) => a - b)[0];
}