//Problem: Get the Middle Character (7 kyu)
//https://www.codewars.com/kata/56747fd5cb988479af000028

//--------------Code--------------
/*function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  
  return s.length % 2 === 0 
    ? s.slice(mid - 1, mid + 1) 
    : s[mid];
}*/

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}