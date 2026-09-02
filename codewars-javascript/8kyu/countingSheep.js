//Problem: Counting sheep... (8 kyu)
//https://www.codewars.com/kata/54edbc7200b811e956000556

//--------------Code--------------
/*function countSheeps(sheep) {
  let sum = 0;
  for (let i of sheep) {
    if (i === true) {
      sum++;
    }
  }
  return sum;
}*/

const countSheeps = sheep => {let sum = 0; for (let i of sheep) {if (i === true) { sum++;}} return sum;};