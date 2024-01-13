// prettier-ignore
const utils = {
  chars: {
    special:["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."].join(""),
    numeric:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].join(""),
    lowerCased: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].join(""),
    upperCase:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].join(""),
  },
  length: {
    min: 8,
    max: 128,
  },
  msgs: {
    refreshPage:`Refresh page(F5) to start again.`,
    optionsCondition: "Select at least one option for the password.",
    enterLength: (min, max) => `Enter length of the password. It should be a number between ${min} and ${max}`,
    wrongLength: (min, max, refreshPageMsg) =>`Incorrect password length. Please enter a valid password length between, it should be number between ${min} and ${max}.\n\n${refreshPageMsg}`,
    selectOption: (characterName, type, condition) => `Select if you want to include ${characterName} ${type} in password.\n${condition}`,
    noneSelectedOptions: (condition, refreshPageMsg) => `None options have been selected. ${condition}\n\n${refreshPageMsg}`,
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  var options = {
    length: undefined,
    inclSpecialChars: false,
    inclNumeric: false,
    inclLowerCase: false,
    inclUpperCase: false,
  };

  options.length = parseInt(prompt(utils.msgs.enterLength(utils.length.min, utils.length.max)));

  return options;
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var password = "";
  return password;
}

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
