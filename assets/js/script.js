// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// function to generate a new password
var generatePassword = function() {
  
  // local variable declarations
  var lowerCaseString;
  var upperCaseString;
  var numberString;
  var specialCharString;
  var passwordLength = 0;  
  var lowerCaseConfirm = confirm("Would you like to include lower case letters in the password?");
  var upperCaseConfirm = confirm("Would you like to include upper case letters in the password?");
  var numberConfirm = confirm("Would you like to include numbers in the password?");
  var specialCharConfirm = confirm("Would you like to include special characters in the password?");

  // checks if passwordLength is between 8 and 128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How long would like the password to be? Between 8 and 128 characters.");
    while (isNaN(passwordLength)) {
      passwordLength = prompt("You have entered an invalid number. Please enter a number from 8 to 128");
    }
    passwordLength = Number(passwordLength);
  }
  
  console.log(passwordLength);
  console.log(lowerCaseConfirm);
  console.log(upperCaseConfirm);
  console.log(numberConfirm);
  console.log(specialCharConfirm);
};

generatePassword();

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
