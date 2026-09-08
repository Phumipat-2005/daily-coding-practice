//Problem: List Filtering (7 kyu)
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

//--------------Code--------------
/*function filter_list(l) {
  return l.filter(item => typeof item == 'number');
}*/

function filter_list(l) {
  return l.filter(item => Number.isInteger(item));
}