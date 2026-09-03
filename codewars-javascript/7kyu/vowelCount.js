//Problem: Vowel Count (7 kyu)
//https://www.codewars.com/kata/54ff3102c1bad923760001f3

//--------------Code--------------
/*function getCount(str) {
  let count = 0;
  const vowels = "aeiou";
  
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}*/

/*function getCount(str) {
  return str.split('').filter(char => "aeiou".includes(char)).length;
}*/

function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}