//Problem: String repeat (8 kyu)
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

//--------------Code--------------
/*function repeatStr (n, s) {
  let str = "";
  for (i = 0; i < n; i++) {
    str += s;
  }
  return str;
}*/

//const repeatStr = (n, s) => {let str = ""; for (i = 0; i < n; i++) { str += s;} return str;}

const repeatStr = (n, s) => s.repeat(n);