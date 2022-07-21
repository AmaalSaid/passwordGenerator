// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passwordLength = parseInt(prompt('What is the length of your password?'))
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert('Must be between 8 and 128 numbers')
    return  'Must be between 8 and 128 numbers';
  }
  var uppercaseChoice = confirm('would you like Capital letters?')
  var lowercaseChoice = confirm('Would you like lower case Letters?')
  var numericChoice = confirm('would you like numbers?')
  var specialCharacters = confirm('Would you like special characters?')
  if(!uppercaseChoice && !lowercaseChoice && !numericChoice && !specialCharacters){
    return "You must choose one option"
  }
}
// generator function  http://www.net-comber.com/charset.html
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomUpper())

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbol = '@#€£%^&*(){}[]+=<>/,.'
  return symbol[Math.random(Math.random() * symbol.length)]
  console.log(getRandomSymbol())
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
