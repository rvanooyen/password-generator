// Assignment code here
var charArray;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var getRandomLower = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var getRandomNumber = function() {
  // return String.fromCharCode(Math.floor(Math.random() * 10));
  return Math.floor(Math.random() * 10);
}

var getRandomSymbol = function() {
  const symbols = '~!@#$%^&*()_+{}":?><;.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var resetCharArray = function() {
  charArray = [""];
}

// function to generate a new password
var generatePassword = function() {
  
  // local variable declarations
  var lowerCaseString;
  var upperCaseString;
  var numberString;
  var specialCharString;
  var passwordArray = [""];
  var password = "";
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

  for (var i = 0; i < passwordLength; i++) {
    resetCharArray();
    if (lowerCaseConfirm) {
      lowerCaseString = getRandomLower();
      charArray.push(lowerCaseString);
    }
    if (upperCaseConfirm) {
      upperCaseString = getRandomUpper();
      charArray.push(upperCaseString);
    }
    if (numberConfirm) {
      numberString = getRandomNumber();
      charArray.push(numberString);
    }
    if (specialCharConfirm) {
      specialCharString = getRandomSymbol();
      charArray.push(specialCharString);
    }
    charArray.splice(0, 1);
    passwordArray.push(charArray[Math.floor(Math.random() * charArray.length)]);
    password = password + passwordArray[i + 1];
  }

  passwordArray.splice(0, 1);
  return password;
};

// generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
