//Problem: Mumbling (7 kyu)
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

//--------------Code--------------
function accum(s) {
  return s.split('')
          .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
          .join('-');
}