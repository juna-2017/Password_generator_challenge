// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var checkLowercase;
var checkUppercase;
var checkNumbers;
var checkSpecialCharacters;
var userChoices;

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0, 1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}","|",";",":",",",".","<",">","?","/"];


// variable to change lowercase to uppercase
var blankUpper = [];
var toUpper = function(ltr){
  return ltr.toUpperCase();
}

upperCase = lowerCase.map(toUpper);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Starts function to generate the password
function generatePassword(){
  // This is asking for user input in order to assign variable "passwordLength"
 
  var passwordLength = window.prompt("What is your password desired length? Has to be a minimum of 8 characters, and no more than 128 characters");
  console.log("Password length: " + passwordLength);

  if(!passwordLength) {
    window.alert("Required value!");
// sets parameters of password length. Has to be greater than 8 but less than 128 characters. If nothing is inputted alert will show "required value"
  } else if(passwordLength < 8 || passwordLength > 128){
    passwordLength = window.prompt("You must choose a number between 8 and 128 characters.");
    console.log("Password length: " + passwordLength);

// asks and confirms if you want lowercase, uppercase, numbers, and special characters in this password
  } else{
    checkLowercase = window.confirm("Do you want lower case letters?");
    console.log("Lower case: " + checkLowercase);

    checkUppercase = window.confirm("Do you want upper case letters?");
    console.log("Upper case: " + checkUppercase);

    checkNumbers = window.confirm("Do you want numbers?");
    console.log("Numbers: " + checkNumbers);

    checkSpecialCharacters = window.confirm("Do you want special characters?");
    console.log("Special characters: " + checkSpecialCharacters);
  };

// If there is no user input to all 4 criteria, alert will tell you, you need to choose 
  if(!checkLowercase && !checkUppercase && !checkNumbers && !checkSpecialCharacters){
    userChoices = window.alert("You must choose at least one criteria!");
// if all 4 options were chosen or true
  } else if(checkLowercase && checkUppercase && checkNumbers && checkSpecialCharacters){
    userChoices = lowerCase.concat(upperCase, numbers, specialCharacters);
    console.log(userChoices);
  }
// if 3 options were chosen or true
  else if(checkLowercase && checkUppercase && checkNumbers){
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if(checkLowercase && checkUppercase && checkSpecialCharacters){
    userChoices = lowerCase.concat(upperCase, specialCharacters);
    console.log(userChoices);
  }
  else if(checkLowercase && checkNumbers && checkSpecialCharacters){
    userChoices = lowerCase.concat(numbers, specialCharacters);
    console.log(userChoices);
  }
  else if(checkUppercase && checkNumbers && checkSpecialCharacters){
    userChoices = upperCase.concat(numbers, specialCharacters);
    console.log(userChoices);
  }
// if 2 options were chosen or true
  else if(checkLowercase && checkUppercase){
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  } 
  else if(checkLowercase && checkNumbers){
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if(checkLowercase && checkSpecialCharacters){
    userChoices = lowerCase.concat(specialCharacters);
    console.log(userChoices);
  }
  else if(checkUppercase && checkNumbers){
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if(checkUppercase && checkSpecialCharacters){
    userChoices = upperCase.concat(specialCharacters);
    console.log(userChoices)
  }
  else if(checkNumbers && checkSpecialCharacters){
    userChoices = numbers.concat(specialCharacters);
    console.log(userChoices);
  }
// if only 1 option was chosen or true
  else if(checkLowercase){
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if(checkUppercase){
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if(checkNumbers){
    userChoices = numbers;
    console.log(userChoices);
  }
  else if(checkSpecialCharacters){
    userChoices = specialCharacters;
    console.log(userChoices);
  }


}