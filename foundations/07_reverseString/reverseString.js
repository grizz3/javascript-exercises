const reverseString = function(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
