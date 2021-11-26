// Assignment code here
var charNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var charSpec = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '<', '>', '?', ']'];
var charUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = '';
  var userChoices = '';

  // Determine length of password
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
  
  if (!passwordLength) {
    passwordLength = parseInt(prompt("This requires a value. Please choose between 8-128 characters"));
  }

  if (passwordLength < 8 || passwordLength > 128) {
  passwordLength = alert("Password must be between 8-128 characters.");
  return null;
  }

  // Determine password criteria based on user selections
  var passwordSpec = window.confirm("Would you like your password to contain special characters?");
  var passwordNum = window.confirm("Would you like your password to conatin numbers?");
  var passwordUpper = window.confirm("Would you like your password to contain UPPER case letters?");
  var passwordLower = window.confirm("Would you like your password to contain lower case letters?");

      if (!passwordLower && !passwordNum && !passwordSpec && !passwordUpper) {
        alert("You must choose at least one character criteria");
        return null;
      }
      
    // Loop character retrieval the amount of times user decided to set password length to
    for (var i = 0; i < passwordLength; i++) {
      if (passwordSpec && passwordNum && passwordUpper && passwordLower) {
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }

      else if (passwordSpec && passwordNum && passwordUpper) {
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
      }

      else if (passwordSpec && passwordNum && passwordLower) {
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }

      else if (passwordUpper && passwordNum && passwordLower) {
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }
      
      else if (passwordSpec && passwordUpper && passwordLower) {
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }

      else if (passwordUpper && passwordLower) {
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }

      else if (passwordLower && passwordNum) {
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
      }

      else if (passwordUpper && passwordNum) {
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
      }

      else if (passwordSpec && passwordNum) {
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
      }

      else if (passwordUpper && passwordSpec) {
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
      }

      else if (passwordLower && passwordSpec) {
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }

      else if (passwordSpec) {
        userChoices += charSpec[Math.floor(Math.random() * charSpec.length)];
      }

      else if (passwordUpper) {
        userChoices += charUpper[Math.floor(Math.random() * charUpper.length)];
      }

      else if (passwordLength) {
        userChoices += charLower[Math.floor(Math.random() * charLower.length)];
      }

      else if (passwordNum) {
        userChoices += charNum[Math.floor(Math.random() * charNum.length)];
      }
    }

    // Randomly pull characters from userChoices
    for (var i = 0; i < passwordLength; i++) {
      password += userChoices[Math.floor(Math.random() * userChoices.length)];
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