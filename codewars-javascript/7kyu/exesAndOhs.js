//Problem: Exes and Ohs (7 kyu)
//https://www.codewars.com/kata/55908aad6620c066bc00002a

//--------------Code--------------
/*function XO(str) {
  const lower = str.toLowerCase();
  return lower.split('x').length === lower.split('o').length;
}*/

function XO(str) {
  const x = str.match(/x/gi) || [];
  const o = str.match(/o/gi) || [];
  return x.length === o.length;
}