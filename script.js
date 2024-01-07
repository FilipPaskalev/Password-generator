/**
 * Description placeholder
 * @date 1/7/2024
 * @author The author tag identifies the author of an item. In JSDoc 3.2 and later, if the author's name is followed by an email address enclosed in angle brackets, the default template will convert the email address to a mailto: link.
 * @version 1.0.0
 * @license MIT
 * @file The file tag provides a description for a file. Use the tag in a JSDoc comment at the beginning of the file.
 * @copyright The copyright tag is used to document copyright information in a file overview comment. Use this tag in combination with the file tag.
 */

/**
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 * @description - Array of special characters to be included in password
 */
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

/**
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 * @description - Array of numeric characters to be included in password
 */
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 * @description - Array of lowercase characters to be included in password
 */
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/**
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 * @description - Array of uppercase characters to be included in password
 */
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/**
 * @version 1.0.0
 * @since 1.0.0
 * @type {number}
 * @description - Store minimum length of the password.
 */
var minPasswordLength = 8;

/**
 * @version 1.0.0
 * @since 1.0.0
 * @type {number}
 * @description - Store maximum length of the password.
 */
var maxPasswordLength = 128;

/**
 * @version 1.0.0
 * @since 1.0.0
 * @see getPasswordOptions()
 * @param {string} type - Message to point to user what type of option should be selected.
 * @returns {boolean} - true if option IS selected, false if option is NOT selected.
 * @description - Function to collect user options.
 */
const getUserOption = (type) => confirm(`Please select do you want to include ${type} in to the password?`);

/**
 * @version 1.0.0
 * @since 1.0.0
 * @param {number} min - minimum length of the password.
 * @param {number} max - maximum length of the password.
 * @returns {string} - string element that contains length of the password.
 * @see getPasswordOptions()
 * @description - Function to collect user option for password length with prompt().
 */
const getPasswordLength = (min, max) => prompt(`Please enter password length. It should be NUMBER between ${min} and ${max}.\nPlease refresh the page to start again.`);

/**
 * @version 1.0.0
 * @since 1.0.0
 * @this minPasswordLength
 * @this maxPasswordLength
 * @returns {{
 *  isLowerCaseSelected: boolean;
 *  isUpperCaseSelected: boolean;
 *  isNumbersOptionSelected: boolean;
 *  isSpecialCharsOptionSelected: boolean;
 *  length: number;
 * }} - object that contains all selected password options from user input.
 * @description - Function to collect all user options for password.
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
 * @version 1.0.0
 * @since 1.0.0
 * @param {[string]} arr - array of strings.
 * @returns {string} - single string chosen random from input array.
 * @description - Function for getting a random element from an array.
 */
function getRandomElementFromArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

/**
 * @version 1.0.0
 * @since 1.0.0
 * @param {[string]} arr - array of strings.
 * @returns {[string]} - same array but all elements are placed on random indexes.
 * @description - Function that take for input string array and returns same array, but elements are on random positions (shuffled).
 */
const shuffleArray = (arr) => arr.sort((firstElement, secondElement) => 0.5 - Math.random());

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
