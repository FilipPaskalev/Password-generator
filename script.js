// prettier-ignore
const utils = {
  chars: {
    special:["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."],
    numeric:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowerCased: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCase:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  },
  length: {
    min: 8,
    max: 128,
  },
  msgs: {
    startAgain: "Please try again to generate password.",
    optionsCondition: "Select at least one option for generating the password.",
    enterLength: (min, max) => `Enter length of the password. It should be a number between ${min} and ${max}`,
    wrongLength: (min, max, startAgainMsg) => `Incorrect password length. Please enter a valid password length between, it should be number between ${min} and ${max}.\n\n${startAgainMsg}`,
    selectOption: (characterName, type, condition) => `Select if you want to include ${characterName} ${type} in password.\n${condition}`,
    noneSelectedOptions: (condition, startAgainMsg) => `None of the options have been selected. ${condition}\n\n${startAgainMsg}`,
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  var options = {
    length: 0,
    inclSpecialChars: false,
    inclNumbers: false,
    inclLowerCase: false,
    inclUpperCase: false,
  };

  options.length = parseInt(prompt(utils.msgs.enterLength(utils.length.min, utils.length.max)));

  if (isNaN(options.length) || options.length < utils.length.min || options.length > utils.length.max) {
    alert(utils.msgs.wrongLength(utils.length.min, utils.length.max, utils.msgs.startAgain));
    return;
  }

  options.inclSpecialChars = confirm(utils.msgs.selectOption("special", "symbols"));
  options.inclNumbers = confirm(utils.msgs.selectOption("number", "characters"));
  options.inclLowerCase = confirm(utils.msgs.selectOption("lower case", "letters"));
  options.inclUpperCase = confirm(utils.msgs.selectOption("upper case", "letters"));

  if (!options.inclSpecialChars && !options.inclNumbers && !options.inclLowerCase && !options.inclUpperCase) {
    alert(utils.msgs.noneSelectedOptions(utils.msgs.optionsCondition, utils.msgs.startAgain));
    return;
  }

  return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var password = "";

  if (options.inclSpecialChars) password = password.concat(getRandom(utils.chars.special));
  if (options.inclNumbers) password = password.concat(getRandom(utils.chars.numeric));
  if (options.inclLowerCase) password = password.concat(getRandom(utils.chars.lowerCased));
  if (options.inclUpperCase) password = password.concat(getRandom(utils.chars.upperCase));

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
