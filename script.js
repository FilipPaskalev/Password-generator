/**
 * @date 1/6/2024 - 3:00:36 PM
 * @description - Array of special characters to be included in password
 * @author © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
 * @type {[]}
 */
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

/**
 * @date 1/6/2024 - 3:01:17 PM
 * @description - Array of numeric characters to be included in password
 * @author © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
 * @type {[]}
 */
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * @date 1/6/2024 - 3:02:20 PM
 * @description - Array of lowercase characters to be included in password
 * @author © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
 * @type {[]}
 */
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/**
 * @description - Array of uppercase characters to be included in password
 * @date 1/6/2024 - 3:02:51 PM
 * @author © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
 * @type {[]}
 */
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var minPasswordLength = 8;

var maxPasswordLength = 128;

const getUserOption = (type) => confirm(`Please select do you want to include ${type} in to the password?`);

const getPasswordLength = (min, max) => prompt(`Please enter password length. It should be NUMBER between ${min} and ${max}.\nPlease refresh the page to start again.`);

//

/**
 * @description - Function to prompt user for password options
 * @date 1/6/2024 - 6:53:35 PM
 * @returns {{ isLowerCaseSelected: boolean; isUpperCaseSelected: boolean; isNumbersOptionSelected: boolean; isSpecialCharsOptionSelected: boolean; length: number; }}
 */
function getPasswordOptions() {
  var userPasswordLengthInputs = {
    length: getPasswordLength(this.minPasswordLength, this.maxPasswordLength),
  };

  if (userPasswordLengthInputs.length < this.minPasswordLength || userPasswordLengthInputs.length > this.maxPasswordLength) {
    alert(`Please enter correct password length. It should be minimum ${minPasswordLength} or maximum ${maxPasswordLength}.`);
    return;
  } else {
    var userInputSelectedOptions = {
      isLowerCaseSelected: getUserOption("LOWER CASE CHARACTERS"),
      isUpperCaseSelected: getUserOption("UPPER CASE CHARACTERS"),
      isNumbersOptionSelected: getUserOption("NUMBERS"),
      isSpecialCharsOptionSelected: getUserOption("SPECIAL CHARACTERS"),
    };

    if (Object.values(userInputSelectedOptions).some((value) => value === true)) {
      var options = {
        ...userPasswordLengthInputs,
        ...userInputSelectedOptions,
      };
      return options;
    } else {
      return alert("Please select at least one character type.\nPlease refresh the page to start again.");
    }
  }
}

/**
 * @description - Function for getting a random element from an array
 * @date 1/6/2024 - 6:51:41 PM
 * @param {[string]} arr - // TODO
 * @returns {string} - // TODO
 */
function getRandomElementFromArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

/**
 * @description - // TODO
 * @date 1/6/2024 - 6:49:53 PM
 * @param {[string]} arr - // TODO
 * @returns {[string]} - // TODO
 */
function shuffleArray(arr) {
  return arr.sort((firstElement, secondElement) => 0.5 - Math.random());
}

function selectPossibleCharacters(isLowerCaseSelected, isUpperCaseSelected, isNumbersSelected, isSpecialCharsSelected) {
  var possibleCharacters = [];

  if (isSpecialCharsSelected) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    possibleCharacters.push(getRandomElementFromArray(specialCharacters));
  }

  if (isLowerCaseSelected) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    possibleCharacters.push(getRandomElementFromArray(lowerCasedCharacters));
  }

  if (isUpperCaseSelected) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    possibleCharacters.push(getRandomElementFromArray(upperCasedCharacters));
  }

  if (isNumbersSelected) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    possibleCharacters.push(getRandomElementFromArray(numericCharacters));
  }

  possibleCharacters = shuffleArray(possibleCharacters);
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();

  var guaranteedCharacters = selectPossibleCharacters(
    passwordOptions.isLowerCaseSelected,
    passwordOptions.isUpperCaseSelected,
    passwordOptions.isNumbersOptionSelected,
    passwordOptions.isSpecialCharsOptionSelected
  );

  console.log(guaranteedCharacters);
}

getPasswordOptions();
// generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
