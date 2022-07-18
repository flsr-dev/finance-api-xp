const replaceFunction = (upperCaseLetter) => upperCaseLetter
  .toUpperCase()
  .replace('/', '');

const toCamelCase = (string) => string.slice(1).replace(/([/][a-z])/ig, replaceFunction);

module.exports = toCamelCase;
