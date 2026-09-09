//Problem: Descending Order (7 kyu)
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

//--------------Code--------------
/*function descendingOrder(n){
  let result = [];
  for (const number of String(n)) {
    result.push(number);
  }
  return Number(result.sort((a, b) => b - a).join(''));
}*/

function descendingOrder(n) {
  return Number(String(n).split('').sort((a, b) => b - a).join(''));
}