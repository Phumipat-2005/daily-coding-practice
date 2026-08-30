//Problem: Convert boolean values to strings 'Yes' or 'No'. (8 kyu)
//https://www.codewars.com/kata/53369039d7ab3ac506000467

//--------------Code--------------
/*function boolToWord( bool ){
  if (bool) {
    return "Yes"
  } else {
    return "No"
  }
}*/

//const boolToWord = (bool) => bool ? "Yes" : "No";

const boolToWord = (bool) => ({true : "Yes", false : "No"})[bool];

/*function boolToWord(bool) {
  if (bool) return "Yes";
  return "No";
}*/