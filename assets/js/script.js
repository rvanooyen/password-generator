// Password Generator
// Generates a random password given four options for characters and a password length

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// function to generate random lower case character
var getRandomLower = function() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
};

// function to generate random upper case character
var getRandomUpper = function() {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
};

// function to generate random number character
var getRandomNumber = function() {
  return Math.floor(Math.random() * 10);
};

// function to generate random special character
var getRandomSymbol = function() {
  const symbols = '~!@#$%^&*()_+{}":?><;.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// function to reset charArray 
var resetCharArray = function() {
  var charArray = [""];
  return charArray;
};

// function to generate a new password
var generatePassword = function() {
  
  // local variable declarations
  var lowerCaseString;
  var upperCaseString;
  var numberString;
  var specialCharString;
  var charArray = [""];
  var passwordArray = [""];
  var password = "";
  var passwordLength = 0;  
  var lowerCaseConfirm = confirm("Would you like to include lower case letters in the password?");
  var upperCaseConfirm = confirm("Would you like to include upper case letters in the password?");
  var numberConfirm = confirm("Would you like to include numbers in the password?");
  var specialCharConfirm = confirm("Would you like to include special characters in the password?");
  let confirmArray = [lowerCaseConfirm, upperCaseConfirm, numberConfirm, specialCharConfirm];
  console.log("Confirms: ");
  console.log(confirmArray);
  
  // checks if passwordLength is between 8 and 128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("You have entered an invalid number. Please enter a number from 8 to 128.");
    passwordLength = Number(passwordLength);
  }

  // // checks if user has selected atleast one password character type
  // if (confirmArray === [false, false, false, false]) {
  //   alert("Please enter atleast one character type for your password.");
  //   generatePassword();
  // }

  // generate random character array with a possible one of each type of password character
  for (var i = 0; i < passwordLength; i++) {    
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
        
    // adds a character to password for the passwordLength
    passwordArray.push(charArray[Math.floor(Math.random() * charArray.length)]);
    password = password + passwordArray[i + 1];
    
    // resets the charArray variable
    charArray = resetCharArray();
  }

  // removes the first blank character from passwordArray
  passwordArray.splice(0, 1);
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
