const specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const passwordLength = {
  min: 8,
  max: 128,
};

const messages = {
  refreshPage: "Please refresh (F5) the page to start again.",
  alerts: {
    passwordLength: `Please enter correct password length. It should be minimum ${passwordLength.min} and maximum ${passwordLength.max} symbols.\n${this.refreshPage}`,
    noneOptions: `Please select at least one character type.\n${this.refreshPage}`,
  },
  prompts: {
    passwordLength: `Please enter password length. It should be number between ${passwordLength.max} and ${passwordLength.max}.`,
  },
  confirms: {
    characterType: (name, type) => `Please select do you want to include ${name} ${type} in to the password?`,
  },
};
