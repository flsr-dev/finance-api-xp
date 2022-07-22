const replaceFunction = (upperCaseLetter) => upperCaseLetter
  .toUpperCase()
  .replace('/', '');

const toCamelCase = (string) => string
  .slice(1)
  .replace(/([/_][a-z\d])/ig, replaceFunction)
  .replace(/[\d-]/g, '');

module.exports = toCamelCase;
