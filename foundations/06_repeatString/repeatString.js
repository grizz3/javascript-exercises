const repeatString = function(input, repeatCount) {
  if (repeatCount < 0) return 'ERROR';
  if (typeof input === 'number' && (!Number.isInteger(input) || input < 0)) {
    return 'ERROR';
  }
  let result = '';
  for (let i = 0; i < repeatCount; i++) {
    result += input;
  }
  return typeof input === 'number' ? Number(result) : result;
};
// Do not edit below this line
module.exports = repeatString;
