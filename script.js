/**
 * @description - Array of special characters to be included in password
 * @type {[string]}
 */
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

/**
 * @description - Array of numeric characters to be included in password
 * @type {[string]}
 */
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * @description - Array of lowercase characters to be included in password
 * @type {[string]}
 */
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/**
 * @description Array of uppercase characters to be included in password
 * @type {[string]}
 */
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/**
 * @description - Store minimum length of the password.
 * @type {number}
 */
var minPasswordLength = 8;

/**
 * @description - Store maximum length of the password.
 * @type {number}
 */
var maxPasswordLength = 128;

/**
 * @description - Function to collect user options.
 * @param {string} type - Message to point to user what type of option should be selected.
 * @returns {boolean} - true if option IS selected, false if option is NOT selected.
 */
const getUserOption = (type) => confirm(`Please select do you want to include ${type} in to the password?`);

/**
 * @description - Function to collect user option for password length with prompt().
 * @param {number} min - minimum length of the password.
 * @param {number} max - maximum length of the password.
 * @returns {string} - string element that contains length of the password.
 */
const getPasswordLength = (min, max) => prompt(`Please enter password length. It should be NUMBER between ${min} and ${max}.\nPlease refresh the page to start again.`);

/**
 * @description - Function to collect all user options for password.
 * @returns {{
 *  isLowerCaseSelected: boolean;
 *  isUpperCaseSelected: boolean;
 *  isNumbersOptionSelected: boolean;
 *  isSpecialCharsOptionSelected: boolean;
 *  length: number;
 * }} - object that contains all selected password options from user input.
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
 * @param {[string]} arr - array of strings.
 * @returns {string} - single string chosen random from input array.
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
