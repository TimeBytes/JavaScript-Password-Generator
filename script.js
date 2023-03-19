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

function passwordLengthValidation(){
	var userInput = prompt("How long would you like your password to be? (Length between 8 - 128 characters");
	if(isNaN(userInput) == false && userInput >= 8 && userInput <= 128){
		return userInput;
	}
	else{
		alert("Invalid entry, please try again (Pick a number between 8 - 128");
		passwordLengthValidation();
	}
}

function toInclude(){
var includeLowerCase = confirm("Would you like to include lowercase characters in your password?");
var includeUpperCase = confirm("Would you like to include uppercase characters in your password?");
var includeNumbers = confirm("Would you like to include numbers in your password?");
var includeSymbols = confirm("Would you like to include symbols in your password?");
 if (!includeLowerCase || !includeUpperCase || !includeNumbers || !includeSymbols)
 	{
		alert("Please make sure at least one type is included");
		toInclude();
	}
	

}

var passwordLength = passwordLengthValidation();
toInclude();



function generatePassword(){
	var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
	var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
	
}
