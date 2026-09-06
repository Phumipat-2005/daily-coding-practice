//Problem: Highest and Lowest (7 kyu)
//https://www.codewars.com/kata/554b4ac871d6813a03000035

//--------------Code--------------
/*function highAndLow(numbers){
  const arr = numbers.split(' ');
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return `${max} ${min}`;
}*/

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}