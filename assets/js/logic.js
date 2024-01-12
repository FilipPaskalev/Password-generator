// prettier-ignore
const specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// prettier-ignore
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// prettier-ignore
const lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// prettier-ignore
const upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const minPassLength = 8;

const maxPassLength = 128;

const refreshPageMsg = "Please refresh the page (F5) to start again.";

const enterPassLengthMsg = `Please enter password length. It should be number between ${minPassLength} and ${maxPassLength}.`;

const messages = {
  selectCharType: (name, type) => `Please select do you want to include ${name} ${type} in to the password?`,
  alerts: {
    wrongPassLength: `The password length that have been entered is incorrect.\n${enterPassLengthMsg}.\n\n${refreshPageMsg}`,
    passContainsChar: `The password length that have been entered contains letter or symbol.\n${enterPassLengthMsg}\n\n${refreshPageMsg}`,
    noneCharSelected: `Please select at least one character type.\n${refreshPageMsg}`,
  },
};

var userInputs;

function getPassLength() {
  userInputs = { passLength: parseInt(prompt(enterPassLengthMsg)) };
  if (isNaN(userInputs.passLength)) return alert(messages.alerts.passContainsChar);
  if (userInputs.passLength < minPassLength || userInputs.passLength > maxPassLength)
    return alert(messages.alerts.wrongPassLength);
}

getPassLength();

console.log(userInputs);
