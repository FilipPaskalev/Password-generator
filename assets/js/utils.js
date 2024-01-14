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

// Function for getting random index from given array
function getRandIndexFromArr(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function for getting a random element from an array
function getRandElFromArr(arr) {
  return arr[getRandIndexFromArr(arr)];
}
