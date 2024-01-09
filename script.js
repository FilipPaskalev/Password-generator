// var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
// var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var utils = {
  passwordLength: {
    min: 8,
    max: 128,
  },
  specialCharacters: {
    name: "SPECIAL SYMBOLS",
    utils: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."],
  },
  numericCharacters: {
    name: "NUMBERS",
    utils: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  lowerCasedCharacters: {
    name: "LOWER CASE LETTERS",
    utils: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  },
  upperCasedCharacters: {
    name: "UPPER CASE LETTERS",
    utils: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  },
  messages: {
    refreshPage: "Please refresh the browser to start again.",
  },
};

var userOptions = {
  passwordLength: 0,
  symbols: {
    isSpecialCharactersIncluded: false,
    isNumbersIncluded: false,
    isLowerCaseCharactersIncluded: false,
    isUpperCaseCharactersIncluded: false,
  },
};

const getUserOption = (typeName) => confirm(`Please select do you want to include ${typeName} in to the password?`);

function validatePasswordLength(minLength, maxLength, userInput) {
  if (userInput < minLength || userInput > maxLength) {
    return false;
  } else {
    return true;
  }
}

function getPasswordLength(minLength, maxLength) {
  var length = prompt(`Please enter password length. It should be number between ${minLength} and ${maxLength}.`);
  return parseInt(length);
}

function getPasswordOptions() {
  userOptions.passwordLength = getPasswordLength(utils.passwordLength.min, utils.passwordLength.max);

  if (validatePasswordLength(utils.passwordLength.min, utils.passwordLength.max, userOptions.passwordLength)) {
    userOptions.symbols.isSpecialCharactersIncluded = getUserOption(utils.specialCharacters.name);
    userOptions.symbols.isNumbersIncluded = getUserOption(utils.numericCharacters.name);
    userOptions.symbols.isLowerCaseCharactersIncluded = getUserOption(utils.lowerCasedCharacters.name);
    userOptions.symbols.isUpperCaseCharactersIncluded = getUserOption(utils.upperCasedCharacters.name);
    if (Object.values(userOptions.symbols).some((value) => value === true)) {
      console.log(userOptions);
      return;
    } else {
      alert(`Please select at least one character type.\n${utils.messages.refreshPage}`);
      return;
    }
  } else {
    alert(
      `Please enter correct password length. It should be minimum ${utils.passwordLength.min} and maximum ${utils.passwordLength.max} symbols.\n${utils.messages.refreshPage}`
    );
    return;
  }
}

function getRandomElementFromArray(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getRandomPropertyFromObject(obj) {
  var keys = Object.keys(obj);
  // return obj[keys[(keys.length * Math.random()) << 0]];
  return keys[(Math.random() * Object.keys(obj).length) | 0];
}

// const shuffleArray = (arr) => arr.sort((firstElement, secondElement) => 0.5 - Math.random());
function shuffleArray(arr) {
  return arr.sort((firstElement, secondElement) => 0.5 - Math.random());
}

function selectGuaranteedCharacters() {
  // var guaranteedCharacters = [];
  // if (isSpecialCharsSelected) {
  //   guaranteedCharacters.push(getRandomElementFromArray(specialCharacters));
  // }
  // if (isLowerCaseSelected) {
  //   guaranteedCharacters.push(getRandomElementFromArray(lowerCasedCharacters));
  // }
  // if (isUpperCaseSelected) {
  //   guaranteedCharacters.push(getRandomElementFromArray(upperCasedCharacters));
  // }
  // if (isNumbersSelected) {
  //   guaranteedCharacters.push(getRandomElementFromArray(numericCharacters));
  // }
  // return guaranteedCharacters;
}

// Function to generate password with user input
function generatePassword() {
  // var options = getPasswordOptions();
  // var guaranteedCharacters = selectGuaranteedCharacters(
  //   options.selectedOptions.lowerCase,
  //   options.selectedOptions.upperCase,
  //   options.selectedOptions.numbers,
  //   options.selectedOptions.specialCharacters
  // );
  // var options = {
  //   selectedCharacters: {
  //     isLowerCaseSelected: true,
  //     isUpperCaseSelected: false,
  //     isNumbersOptionSelected: true,
  //     isSpecialCharsOptionSelected: false,
  //   },
  //   length: 10,
  // };
  // var password = new Array();
  // for (let i = 0; i < 10; i++) {
  // console.log(getRandomPropertyFromObject(options.selectedCharacters));
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
  // }
  // do {
  //   if(getRandomElementFromArray(guaranteedCharacters)) password.push()
  // } while (password === options.length - Object.keys(guaranteedCharacters).length);
  // password.join();
  // console.log(password);
  // return password;
}

getPasswordOptions();
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
