//Problem: Printer Errors (7 kyu)
//https://www.codewars.com/kata/56541980fa08ab47a0000040

//--------------Code--------------
function printerError(s) {
  const errors = (s.match(/[n-z]/g) || []).length;
  return `${errors}/${s.length}`;
}