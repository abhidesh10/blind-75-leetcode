/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

// code copied from chatgpt
var isValid = function (s) {
  if (s.length < 1) {
    return false;
  }

  let stack = [];
  let openingBrack = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (openingBrack[currentChar]) {
      stack.push(currentChar);
      continue;
    }

    const lastSym = stack.pop();
    if (openingBrack[lastSym] !== currentChar) {
      return false;
    }
  }

  return stack.length === 0;
};

let inputStr = "(]";
let result = isValid(inputStr);
console.log({ result });
