/**
 * validating sequence of characters in a string
 * @param pwd contains password value
 * @param characters contains characters could be string, numbers or symbols
 * @returns {boolean} true/false
 */
const hasSequential = (pwd, characters) => {
  for (let i = 0; i < characters.length - 1; i += 1) {
    const str = characters.substring(i, i + 2);
    const revStr = str.split('').reverse().join('');
    if (
      pwd.toLowerCase().indexOf(str) !== -1 ||
      pwd.toLowerCase().indexOf(revStr) !== -1
    ) {
      return true;
    }
  }

  return false;
};

/**
 * validating sequence of letters in a string
 * @param value contains password value
 * @returns {boolean} true/false
 */
const hasSequentialLetters = (value) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  return hasSequential(value, alphabets);
};

/**
 * validating sequence of numbers in a string
 * @param value contains password value
 * @returns {boolean} true/false
 */
const hasSequentialNumbers = (value) => {
  const numbers = '01234567890';
  return hasSequential(value, numbers);
};

/**
 * validating sequence of symbols in a string
 * @param value contains password value
 * @returns {boolean} true/false
 */
const hasSequentialSymbols = (value) => {
  const symbols = ')!@#$%^&*()';
  return hasSequential(value, symbols);
};

/**
 * validating repeated charactes in password
 * @param value contains password value
 * @returns {boolean} true/false
 */
const hasRepeatedCharacters = (value) => {
  for (let i = 0; i < value.length; i += 1) {
    const previous = value[i];
    for (let j = i + 1; j < value.length; j += 1) {
      const current = value[j];
      if (previous.toLowerCase() === current.toLowerCase()) {
        return true;
      }
    }
  }

  return false;
};

/**
 * validating multiple validations of password value using regex
 * @param value contains password value
 * @returns {object} contains validations rules
 */
const getComplexValidationRules = (value) => {
  return {
    hasLettersOnly: value ? /^[a-zA-Z]*$/.test(value) : false,
    hasNumbersOnly: value ? /^[0-9]*$/.test(value) : false,
    hasRepeatedCharacters: hasRepeatedCharacters(value),
    hasConsecutiveUppercaseLetters: value ? /([A-Z]){2}/.test(value) : false,
    hasConsecutiveLowercaseLetters: value ? /([a-z]){2}/.test(value) : false,
    hasConsecutiveNumbers: value ? /\d{2}/.test(value) : false,
    hasSequentialLetters: value ? hasSequentialLetters(value) : false,
    hasSequentialNumbers: value ? hasSequentialNumbers(value) : false,
    hasSequentialSymbols: value ? hasSequentialSymbols(value) : false,
  };
};

/**
 * get weightage for complex validations with the help of this password strength gets increased or decreased
 * @param value contains password value
 * @returns {number} weightage in percentage
 */
const getComplexValidationRulesWeightage = (value) => {
  const rules = getComplexValidationRules(value);
  let propertyCount = 0;
  let validPropertyCount = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const property in rules) {
    // eslint-disable-next-line no-prototype-builtins
    if (rules.hasOwnProperty(property)) {
      propertyCount += 1;
      if (rules[property]) {
        validPropertyCount += 1;
      }
    }
  }

  return (validPropertyCount / propertyCount) * 40;
};

/**
 * validating multiple validations of password value using regex
 * @param value contains password value
 * @returns {object} contains validations rules
 */
const getStrictValidationRules = (value) => {
  return {
    isValidLength: value ? /^.{8,}$/.test(value) : false,
    // eslint-disable-next-line
    ['shouldMetAtleastThreeCases(UppercaseLetters,LowerCaseLetters,Numbers,Symbols)']: value
      ? /(((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])).*)/.test(
          value
        )
      : false,
  };
};

/**
 * get weightage for strict validations with the help of this password strength gets increased or decreased
 * @param value contains password value
 * @returns {number} weightage in percentage
 */
const getStrictValidationRulesWeightage = (value) => {
  const rules = getStrictValidationRules(value);
  let propertyCount = 0;
  let validPropertyCount = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const property in rules) {
    // eslint-disable-next-line no-prototype-builtins
    if (rules.hasOwnProperty(property)) {
      propertyCount += 1;
      if (rules[property]) {
        validPropertyCount += 1;
      }
    }
  }
  return (validPropertyCount / propertyCount) * 100;
};

/**
 * get combined validations rules
 * @param value contains password value
 * @returns {object} list of validation rules
 */
export const getRules = (value) => {
  return {
    strictValidationRules: getStrictValidationRules(value),
    complexValidationRules: getComplexValidationRules(value),
  };
};

/**
 * get width of meter with the help of valid or invalid password based on certain rules
 * @param value contains password value
 * @returns {number} meter width
 */
export const getMeterWidth = (value) => {
  const strictValidationRulesWeightage = getStrictValidationRulesWeightage(
    value
  );
  const complexValidationRulesWeightage = getComplexValidationRulesWeightage(
    value
  );

  const width =
    strictValidationRulesWeightage - complexValidationRulesWeightage;
  return width < 0 ? complexValidationRulesWeightage : width;
};

/**
 * get feedback of meter with the help of meter width based on multiple conditions
 * @param value contains password value
 * @returns {string} meter feedback
 */
// eslint-disable-next-line consistent-return
export const getMeterFeedback = (width) => {
  if (width >= 0 && width <= 20) {
    return 'Very Weak';
  }
  if (width > 20 && width <= 40) {
    return 'Weak';
  }
  if (width > 40 && width <= 60) {
    return 'Good';
  }
  if (width > 60 && width <= 80) {
    return 'Very Good';
  }
  if (width > 80 && width <= 95) {
    return 'Strong';
  }
  if (width > 95 && width <= 100) {
    return 'Very Strong';
  }
};
