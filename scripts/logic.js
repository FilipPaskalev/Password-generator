/**
 * @description Function to prompts the user to input for password options, including the length
 * and types of characters. It validates the input and returns an object with the
 * selected options if they are valid. If not, it returns undefined.
 * @returns {Object | undefined} An object containing password options if valid options are selected, undefined otherwise.
 * @property {number} length - The length of the password.
 * @property {boolean} inclSymbols - Whether to include special characters.
 * @property {boolean} inclNumbers - Whether to include numbers.
 * @property {boolean} inclLowerCase - Whether to include lowercase letters.
 * @property {boolean} inclUpperCase - Whether to include uppercase letters.
 */
function getPasswordOptions() {
  // Get password length from user
  var length = parseInt(prompt(utils.msgs.enterLength(utils.length.min, utils.length.max)));

  // Length validation of the password
  if (isNaN(length) || length < utils.length.min || length > utils.length.max) {
    alert(utils.msgs.wrongLength(utils.length.min, utils.length.max, utils.msgs.startAgain));
    return;
  }

  // Get selected user options
  var inclSymbols = confirm(utils.msgs.selectOption(utils.chars[0].typeName, utils.msgs.optionsCondition));
  var inclNumbers = confirm(utils.msgs.selectOption(utils.chars[1].typeName, utils.msgs.optionsCondition));
  var inclLowerCase = confirm(utils.msgs.selectOption(utils.chars[2].typeName, utils.msgs.optionsCondition));
  var inclUpperCase = confirm(utils.msgs.selectOption(utils.chars[3].typeName, utils.msgs.optionsCondition));

  // Check that user has selected at least one option
  if (!inclSymbols && !inclNumbers && !inclLowerCase && !inclUpperCase) {
    alert(utils.msgs.noneSelectedOptions(utils.msgs.optionsCondition, utils.msgs.startAgain));
    return;
  }

  return { length, inclSymbols, inclNumbers, inclLowerCase, inclUpperCase };
}

/**
 * Generates a password based on user inputs.
 * @returns {string} The generated password.
 */
function generatePassword() {
  // Get user inputs
  // var options = getPasswordOptions();

  // Init empty var for password
  var password = "";

  // Init empty var for possible characters, that will be included in password
  var characters = "";

  // Test object
  // TODO fix the lines number
  // To test comment line 46 and remove comments from line 55 to line 61
  // This will hardcore user input instead to enter manual inputs.
  var options = {
    length: 20,
    inclSymbols: false,
    inclNumbers: true,
    inclLowerCase: false,
    inclUpperCase: true,
  };

  // Ensure that option is passed with some data and is NOT undefined
  if (!options) return password;

  if (options.inclSymbols) {
    password += utils.chars[0].symbols[getRandIndexFromArr(utils.chars[0].symbols)];
    characters += utils.chars[0].symbols.join("");
  }

  if (options.inclNumbers) {
    password += utils.chars[1].numbers[getRandIndexFromArr(utils.chars[1].numbers)];
    characters += utils.chars[1].numbers.join("");
  }

  if (options.inclLowerCase) {
    password += utils.chars[2].lowerCase[getRandIndexFromArr(utils.chars[2].lowerCase)];
    characters += utils.chars[2].lowerCase.join("");
  }

  if (options.inclUpperCase) {
    password += utils.chars[3].upperCase[getRandIndexFromArr(utils.chars[3].upperCase)];
    characters += utils.chars[3].upperCase.join("");
  }

  while (password.length < options.length) {
    var randIndex = getRandIndexFromArr(characters);
    password += characters.charAt(randIndex);
  }

  return password;
}
