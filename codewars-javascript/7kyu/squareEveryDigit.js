//Problem: Square Every Digit (7 kyu)
//https://www.codewars.com/kata/546e2562b03326a88e000020

//--------------Code--------------
function squareDigits(num) {
  let result = '';
  
  for (const digit of String(num)) {
    result += digit ** 2;
  }
  
  return Number(result);
}
/*function squareDigits(num) {
  return Number(
    String(num)
      .split('')
      .map(digit => digit ** 2)
      .join('')
  );
}*/