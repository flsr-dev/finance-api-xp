const replaceFunction = (upperCaseLetter) => upperCaseLetter
  .toUpperCase()
  .replace('/', '');

const toCamelCase = (string) => string.slice(1).replace(/([/_][a-z])/ig, replaceFunction);

module.exports = toCamelCase;
