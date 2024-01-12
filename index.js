// var utils = {
//   passwordLength: {
//     min: 8,
//     max: 128,
//   },
//   chars: {
//     special: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."],
//     numerical: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//     lowerCased: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//     upperCased: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//   },
//   messages: {
//     refreshPage: "Please refresh (F5) the browser to start again.",
//   },
// };

// function getPasswordLength(minLength, maxLength) {
//   var length = prompt(`Please enter password length. It should be number between ${minLength} and ${maxLength}.`);
//   return parseInt(length);
// }

// const getUserOption = (typeName) => confirm(`Please select do you want to include ${typeName} in to the password?`);

// function getPasswordOptions() {
//   var options = {
//     length: getPasswordLength(utils.passwordLength.min, utils.passwordLength.max),
//     selectedSymbols: {
//       isSpecialCharactersIncluded: getUserOption(utils.specialCharacters.name),
//       isNumbersIncluded: getUserOption(utils.numericCharacters.name),
//       isLowerCaseCharactersIncluded: getUserOption(utils.lowerCasedCharacters.name),
//       isUpperCaseCharactersIncluded: getUserOption(utils.upperCasedCharacters.name),
//     },
//   };

//   // validate password length
//   if (options.length < utils.passwordLength.min || options.length > utils.passwordLength.max) {
//     alert(
//       `Please enter correct password length. It should be minimum ${utils.passwordLength.min} and maximum ${utils.passwordLength.max} symbols.\n${utils.messages.refreshPage}`
//     );
//     return;
//   }

//   var isAnyCharacterTypeSelected = Object.values(options.selectedSymbols).some((value) => value === true);

//   // validate is any character selected
//   if (!isAnyCharacterTypeSelected) {
//     alert(`Please select at least one character type.\n${utils.messages.refreshPage}`);
//     return;
//   }

//   // console.log(options);

//   return;
// }

// function getRandomElementFromArray(arr) {
//   var randomIndex = Math.floor(Math.random() * arr.length);
//   return arr[randomIndex];
// }

// function getRandomPropertyFromObject(obj) {
//   var keys = Object.keys(obj);
//   // return obj[keys[(keys.length * Math.random()) << 0]];
//   return keys[(Math.random() * Object.keys(obj).length) | 0];
// }

// function selectGuaranteedCharacters(selectedSymbols) {
//   var guaranteedCharacters = [];

//   if (selectedSymbols.isSpecialCharactersIncluded) {
//     guaranteedCharacters.push(getRandomElementFromArray(utils.characters.special));
//   }
//   if (selectedSymbols.isNumbersIncluded) {
//     guaranteedCharacters.push(getRandomElementFromArray(utils.characters.numeric));
//   }
//   if (selectedSymbols.isLowerCaseCharactersIncluded) {
//     guaranteedCharacters.push(getRandomElementFromArray(utils.characters.lowerCased));
//   }
//   if (selectedSymbols.isUpperCaseCharactersIncluded) {
//     guaranteedCharacters.push(getRandomElementFromArray(utils.characters.upperCased));
//   }

//   return guaranteedCharacters;
// }

// // Function to generate password with user input
// function generatePassword() {
//   // TODO remove comment after finish with coding
//   // var options = getPasswordOptions();

//   //TODO delete after finish with coding
//   options = {
//     length: 10,
//     selectedSymbols: {
//       isSpecialCharactersIncluded: false,
//       isNumbersIncluded: true,
//       isLowerCaseCharactersIncluded: false,
//       isUpperCaseCharactersIncluded: false,
//     },
//   };

//   // add guaranteed characters in password
//   var password = selectGuaranteedCharacters(options.selectedSymbols);

//   var passwordLength = password.length;

//   // console.log(password.length);

//   do {
//     var selectedOption = getRandomPropertyFromObject(options.selectedSymbols);
//     switch (selectedOption) {
//       case "isSpecialCharactersIncluded":
//         if (options.selectedSymbols.isSpecialCharactersIncluded) {
//           password.push(getRandomElementFromArray(utils.characters.special));
//         }
//         passwordLength++;
//         break;
//       case "isNumbersIncluded":
//         if (options.selectedSymbols.isNumbersIncluded) {
//           password.push(getRandomElementFromArray(utils.characters.numeric));
//         }
//         passwordLength++;
//         break;
//       case "isLowerCaseCharactersIncluded":
//         if (options.selectedSymbols.isLowerCaseCharactersIncluded) {
//           password.push(getRandomElementFromArray(utils.characters.lowerCased));
//         }
//         passwordLength++;
//         break;
//       case "isUpperCaseCharactersIncluded":
//         if (options.selectedSymbols.isUpperCaseCharactersIncluded) {
//           password.push(getRandomElementFromArray(utils.characters.upperCased));
//         }
//         passwordLength++;
//         break;
//       default:
//         break;
//     }
//   } while (passwordLength < options.length);

//   console.log(password);

//   return password;
// }

// generatePassword();

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
