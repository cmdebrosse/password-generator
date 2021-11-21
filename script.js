// Assignment code here
var charNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var charSpec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '<', '>', '?', ']'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = '';

  // Determine length of password
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
  if(passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8-128 characters.");
  return null;
  }

  // Determine password criteria based on user selections
  var passwordSpec = window.confirm("Would you like your password to contain special characters?");
  var passwordNum = window.confirm("Would you like your password to conatin numbers?");
  var passwordUpper = window.confirm("Would you like your password to contain UPPER case letters?");
  var passwordLower = window.confirm("Would you like your password to contain lower case letters?");

  // Loop character retrieval the amount of times user decided to set password length to
    for (var i = 0; i < passwordLength; i++) {
      if (passwordSpec) {
        password += charSpec[Math.floor(Math.random() * charSpec.length)];
      }

      if (passwordNum) {
        password += charNumbers[Math.floor(Math.random() * charNumbers.length)];
      }

      if (passwordUpper) {
        password += charUpper[Math.floor(Math.random() * charUpper.length)];
      }

      if (passwordLower) {
        password += charLower[Math.floor(Math.random() * charLower.length)];
      }
    }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);