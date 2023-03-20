// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//generates a password depending on user input/interaction
//returns a password with data type string
function generatePassword() {
  // prompts the user for an input between 8-128 (inclusive) and validates the input to ensure it's a number bettween 8-128 (inclusive)
  // returns an integer which is the user input
  function passwordLengthValidation() {
    //prompts the user for a number between 8-128 (inclusive)
    var userInput = prompt(
      "How long would you like your password to be? (Length between 8 - 128 characters"
    );
    // validates if the user inputs a valid input
    if (isNaN(userInput) == false && userInput >= 8 && userInput <= 128) {
      return userInput;
    } else {
      //when user input is no valid, reccursive funcation call.
      alert("Invalid entry, please try again (Pick a number between 8 - 128");
      return passwordLengthValidation();
    }
  }
  //confirm what types of characters the user wants to include in the password
  //returns a string that includes all the characters that match the type of characters user has selected
  function toInclude() {
    var includeLowerCase = confirm(
      "Would you like to include lowercase characters in your password?"
    );
    var includeUpperCase = confirm(
      "Would you like to include uppercase characters in your password?"
    );
    var includeNumbers = confirm(
      "Would you like to include numbers in your password?"
    );
    var includeSymbols = confirm(
      "Would you like to include symbols in your password?"
    );
    //validates that at least one type of character is selected
    if (
      includeLowerCase ||
      includeUpperCase ||
      includeNumbers ||
      includeSymbols
    ) {
      var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
      var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      //string to concatenate different types of characters
      var charactersToInclude = "";
      //checks which types of characters the user selected and concatenates them into variable charactersToInclude
      if (includeLowerCase == true) {
        charactersToInclude += lowerCaseCharacters;
      }
      if (includeUpperCase == true) {
        charactersToInclude += upperCaseCharacters;
      }
      if (includeNumbers == true) {
        charactersToInclude += numbers;
      }
      if (includeSymbols == true) {
        charactersToInclude += symbols;
      }
      //returns a string of all characters that match the character type the user selected
      return charactersToInclude;
    } else {
      //recursive funcation call if no types of characters were not selected
      alert("Please make sure at least one type is included");
      return toInclude();
    }
  }
  // calls passwordLengthValidation function and stores returned value into passwordLength
  var passwordLength = passwordLengthValidation();
  //calls toInclude function and stores returned value into characterList
  var characterList = toInclude();
  //empty string to concatenate characters randomly from characterList
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    randomPassword +=
      characterList[Math.floor(Math.random() * characterList.length)];
  }
  //returns password with data type string
  return randomPassword;
}
