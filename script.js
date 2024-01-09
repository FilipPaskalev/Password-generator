/**
 * Description placeholder
 * @date 1/7/2024
 * @author The author tag identifies the author of an item. In JSDoc 3.2 and later, if the author's name is followed by an email address enclosed in angle brackets, the default template will convert the email address to a mailto: link.
 * @version 1.0.0
 * @license MIT
 * @file The file tag provides a description for a file. Use the tag in a JSDoc comment at the beginning of the file.
 * @copyright The copyright tag is used to document copyright information in a file overview comment. Use this tag in combination with the file tag.
 */

var userSelection = {
  passwordLength: 0,
  options: {
    specialCharacters: {
      isSelected: false,
      utils: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."],
    },
    numericCharacters: {
      isSelected: false,
      utils: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    lowerCaseCharacters: {
      isSelected: false,
      utils: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    },
    lowerCaseCharacters: {
      isSelected: false,
      utils: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    },
  },
};

/**
 * @description - Array of special characters to be included in password
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 */
var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

/**
 * @description - Array of numeric characters to be included in password
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 */
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * @description - Array of lowercase characters to be included in password
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 */
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/**
 * @description - Array of uppercase characters to be included in password
 * @version 1.0.0
 * @since 1.0.0
 * @type {[string]}
 */
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

/**
 * @description - Store minimum length of the password.
 * @version 1.0.0
 * @since 1.0.0
 * @type {number}
 */
var minPasswordLength = 8;

/**
 * @description - Store maximum length of the password.
 * @version 1.0.0
 * @since 1.0.0
 * @type {number}
 */
var maxPasswordLength = 128;

/**
 * @description - Function to collect user options.
 * @version 1.0.0
 * @since 1.0.0
 * @param {string} type - Message to point to user what type of option should be selected.
 * @returns {boolean} - true if option IS selected, false if option is NOT selected.
 */
const getUserOption = (type) => confirm(`Please select do you want to include ${type} in to the password?`);

/**
 * @description - Function to collect user option for password length with prompt().
 * @version 1.0.0
 * @since 1.0.0
 * @param {number} min - minimum length of the password.
 * @param {number} max - maximum length of the password.
 * @returns {string} - string element that contains length of the password.
 */
const getPasswordLength = (min, max) => prompt(`Please enter password length. It should be NUMBER between ${min} and ${max}.\nPlease refresh the page to start again.`);

/**
 * @description - Function to collect all user options for password.
 * @version 1.0.0
 * @since 1.0.0
 * @this minPasswordLength
 * @this maxPasswordLength
 * @returns {object} options
 */
function getPasswordOptions() {
  var userPasswordLengthInputs = {
    length: parseInt(getPasswordLength(this.minPasswordLength, this.maxPasswordLength)),
  };

  if (userPasswordLengthInputs.length < this.minPasswordLength || userPasswordLengthInputs.length > this.maxPasswordLength) {
    alert(`Please enter correct password length. It should be minimum ${minPasswordLength} or maximum ${maxPasswordLength}.`);
    return;
  } else {
    var selectedOptions = {
      lowerCase: getUserOption("LOWER CASE CHARACTERS"),
      upperCase: getUserOption("UPPER CASE CHARACTERS"),
      numbers: getUserOption("NUMBERS"),
      specialCharacters: getUserOption("SPECIAL CHARACTERS"),
    };

    if (Object.values(selectedOptions).some((value) => value === true)) {
      /**
       * Documented as options object
       * @typedef {object} options - object that contains all selected password options from user input.
       * @property {boolean} isLowerCaseSelected - store value of user input for lower case option.
       * @property {boolean} isUpperCaseSelected - store value of user input for upper case option.
       * @property {boolean} isNumbersOptionSelected - store value of user input for numeric characters option.
       * @property {boolean} isSpecialCharsOptionSelected - store value of user input for special characters option.
       * @property {number} length - store value of user input for password length.
       */
      //TODO change description of the object
      var options = {
        ...userPasswordLengthInputs,
        guaranteedCharacters: {
          ...selectedOptions,
        },
      };
      return options;
    } else {
      return alert("Please select at least one character type.\nPlease refresh the page to start again.");
    }
  }
}

/**
 * @description - Function for getting a random element from an array.
 * @version 1.0.0
 * @since 1.0.0
 * @param {[any]} arr - array of elements. It could be any type of elements
 * @returns {any} - single element chosen random from input array.
 */
function getRandomElementFromArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

function getRandomPropertyFromObject(obj) {
  var keys = Object.keys(obj);

  // return obj[keys[(keys.length * Math.random()) << 0]];
  return keys[(Math.random() * Object.keys(obj).length) | 0];
}

/**
 * @description - Function that take for input string array and returns same array, but elements are on random positions (shuffled).
 * @version 1.0.0
 * @since 1.0.0
 * @param {[string]} arr - array of strings.
 * @returns {[string]} - same array but all elements are placed on random indexes.
 */
const shuffleArray = (arr) => arr.sort((firstElement, secondElement) => 0.5 - Math.random());

function selectGuaranteedCharacters(isLowerCaseSelected, isUpperCaseSelected, isNumbersSelected, isSpecialCharsSelected) {
  var guaranteedCharacters = [];

  if (isSpecialCharsSelected) {
    guaranteedCharacters.push(getRandomElementFromArray(specialCharacters));
  }

  if (isLowerCaseSelected) {
    guaranteedCharacters.push(getRandomElementFromArray(lowerCasedCharacters));
  }

  if (isUpperCaseSelected) {
    guaranteedCharacters.push(getRandomElementFromArray(upperCasedCharacters));
  }

  if (isNumbersSelected) {
    guaranteedCharacters.push(getRandomElementFromArray(numericCharacters));
  }

  return guaranteedCharacters;
}

// Function to generate password with user input
function generatePassword() {
  // var options = getPasswordOptions();

  var guaranteedCharacters = selectGuaranteedCharacters(
    options.selectedOptions.lowerCase,
    options.selectedOptions.upperCase,
    options.selectedOptions.numbers,
    options.selectedOptions.specialCharacters
  );
  var options = {
    selectedCharacters: {
      isLowerCaseSelected: true,
      isUpperCaseSelected: false,
      isNumbersOptionSelected: true,
      isSpecialCharsOptionSelected: false,
    },
    length: 10,
  };

  var password = new Array();

  for (let i = 0; i < 10; i++) {
    console.log(getRandomPropertyFromObject(options.selectedCharacters));

    // switch (getRandomPropertyFromObject(options.selectedCharacters)) {
    //   case "isLowerCaseSelected":
    //     password.push(getRandomElementFromArray(lowerCasedCharacters));
    //     break;
    //   case "isUpperCaseSelected":
    //     password.push(getRandomElementFromArray(upperCasedCharacters));
    //     break;
    //   case "isNumbersOptionSelected":
    //     password.push(getRandomElementFromArray(numericCharacters));
    //     break;
    //   case "isSpecialCharsOptionSelected":
    //     password.push(getRandomElementFromArray(specialCharacters));
    //     break;
    //   default:
    //     break;
    // }
  }

  // do {
  //   if(getRandomElementFromArray(guaranteedCharacters)) password.push()
  // } while (password === options.length - Object.keys(guaranteedCharacters).length);

  password.join();
  console.log(password);
  return password;
}

generatePassword();

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
