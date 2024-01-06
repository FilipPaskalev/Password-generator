/**
 * @date 1/6/2024 - 3:00:36 PM
 * @description - Array of special characters to be included in password
 * @author © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
 * @type {[]}
 */
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

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
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/**
 * @description - Array of uppercase characters to be included in password
 * @date 1/6/2024 - 3:02:51 PM
 * @author © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
 * @type {[]}
 */
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getPasswordLength() {
  var passwordLength = prompt("Please enter password length. It should be number between 8 and 128.");

  return passwordLength;
}

function getLowerCaseOption() {
  var isLowerCaseCharsIncluded = confirm(
    "Please select do you want to include LowerCase characters in to the password?"
  );

  return isLowerCaseCharsIncluded;
}

function getUpperCaseOption() {
  var isUpperCaseCharsIncluded = confirm(
    "Please select do you want to include UpperCase characters in to the password ?"
  );

  return isUpperCaseCharsIncluded;
}

function getNumberOption() {
  var isNumbersCharsIncluded = confirm("Please select do you want to include Numbers in to the password ?");

  return isNumbersCharsIncluded;
}

function getSpecialCharsOption() {
  var isSpecialCharsIncluded = confirm("Please select do you want to include Special characters in to the password ?");

  return isSpecialCharsIncluded;
}

// Function to prompt user for password options
function getPasswordOptions() {
  var minLength = 8;
  var maxLength = 128;

  var userPasswordLengthInputs = {
    length: getPasswordLength(),
  };

  if (userPasswordLengthInputs.length < minLength || userPasswordLengthInputs.length > maxLength) {
    alert("Please enter password length. It should be minimum 8 or maximum 128.");
    return;
  } else {
    var userInputSelectedOptions = {
      isLowerCaseSelected: getLowerCaseOption(),
      isUpperCaseSelected: getUpperCaseOption(),
      isNumbersOptionSelected: getNumberOption(),
      isSpecialCharsOptionSelected: getSpecialCharsOption(),
    };

    if (Object.values(userInputSelectedOptions).some((value) => value === true)) {
      var passwordOptions = {
        ...userPasswordLengthInputs,
        ...userInputSelectedOptions,
      };
      console.log(passwordOptions);
      return passwordOptions;
    } else {
      return alert("Please select at least one character type. \n Please refresh the page to start again.");
    }
  }
}

// Function for getting a random element from an array
function getRandomElementFromArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function for shuffle array
function shuffleArray(arr) {
  return arr.sort((firstElement, secondElement) => 0.5 - Math.random());
}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

getPasswordOptions();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
