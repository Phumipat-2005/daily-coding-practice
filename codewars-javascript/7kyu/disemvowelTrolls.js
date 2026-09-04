//Problem: Disemvowel Trolls (7 kyu)
//https://www.codewars.com/kata/52fba66badcd10859f00097e

//--------------Code--------------
function disemvowel(str) {
  let result = '';
  const vowels = 'aeiouAEIOU';
  
  for (const char of str) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

/*function disemvowel(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => !vowels.includes(char)).join('');
}*/

//const disemvowel = str => str.replace(/[aeiou]/gi, '');