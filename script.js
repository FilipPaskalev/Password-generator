// prettier-ignore
const utils = {
  chars: [
    {
      typeName: "special symbols",
      special: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."],
    },
    {
      typeName: "number characters",
      numbers:["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    {
      typeName: "lower case letters",
      lowerCased: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    },
    {
      typeName: "upper case letters",
      upperCase:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    }
  ],
  length: {
    min: 8,
    max: 128,
  },
  msgs: {
    startAgain: "Please try again to generate password.",
    optionsCondition: "Select at least one option for generating the password.",
    enterLength: (min, max) => `Enter length of the password. It should be a number between ${min} and ${max}`,
    wrongLength: (min, max, startAgainMsg) => `Incorrect password length. Please enter a valid password length between, it should be number between ${min} and ${max}.\n\n${startAgainMsg}`,
    selectOption: (typeName, condition) => `Select if you want to include ${typeName} in password.\n${condition}`,
    noneSelectedOptions: (condition, startAgainMsg) => `None of the options have been selected. ${condition}\n\n${startAgainMsg}`,
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt(utils.msgs.enterLength(utils.length.min, utils.length.max)));

  if (isNaN(length) || length < utils.length.min || length > utils.length.max) {
    alert(utils.msgs.wrongLength(utils.length.min, utils.length.max, utils.msgs.startAgain));
    return;
  }

  var inclSpecialChars = confirm(utils.msgs.selectOption(utils.chars[0].typeName, utils.msgs.optionsCondition));
  var inclNumbers = confirm(utils.msgs.selectOption(utils.chars[1].typeName, utils.msgs.optionsCondition));
  var inclLowerCase = confirm(utils.msgs.selectOption(utils.chars[2].typeName, utils.msgs.optionsCondition));
  var inclUpperCase = confirm(utils.msgs.selectOption(utils.chars[3].typeName, utils.msgs.optionsCondition));

  if (!inclSpecialChars && !inclNumbers && !inclLowerCase && !inclUpperCase) {
    alert(utils.msgs.noneSelectedOptions(utils.msgs.optionsCondition, utils.msgs.startAgain));
    return;
  }

  return {
    length,
    inclSpecialChars,
    inclNumbers,
    inclLowerCase,
    inclUpperCase,
  };
}

// Function for getting random index from given array
function getRandIndexFromArr(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function for getting a random element from an array
function getRandElFromArr(arr) {
  return arr[getRandIndexFromArr(arr)];
}

// Function to generate password with user input
function generatePassword() {
  // var options = getPasswordOptions();

  var options = {
    length: 10,
    inclLowerCase: false,
    inclNumbers: true,
    inclSpecialChars: false,
    inclUpperCase: true,
  };

  var password = "";

  var characters = "";

  if (options.inclSpecialChars) {
    password = password.concat(getRandElFromArr(utils.chars[0].special));
    characters = characters.concat(utils.chars[0].special);
  }

  if (options.inclNumbers) {
    password = password.concat(getRandElFromArr(utils.chars[1].numbers));
    characters = characters.concat(utils.chars[1].numbers);
  }

  if (options.inclLowerCase) {
    password = password.concat(getRandElFromArr(utils.chars[2].lowerCased));
    characters = characters.concat(utils.chars[2].lowerCased);
  }
  if (options.inclUpperCase) {
    password = password.concat(getRandElFromArr(utils.chars[3].upperCase));
    characters = characters.concat(utils.chars[3].upperCase);
  }

  characters = characters.split(",");

  while (password.length < options.length) {
    var randIndex = getRandIndexFromArr(characters);
    var randomChar = characters[randIndex];
    password = password.concat(randomChar);
  }

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
