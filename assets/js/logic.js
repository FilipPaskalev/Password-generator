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
