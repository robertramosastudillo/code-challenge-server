const { reverseString, checkPalydrome } = require("../../utils/CustomMethods");

// GetReverseText
exports.getReverseText = (req, res) => {
  // Validar si existe la variable text
  let { text } = req.query;

  // We convert the text to lowercase
  text = text.toLowerCase();

  // Check if it is palindrome
  const isPalindrome = checkPalydrome(text);
  //   The method is called to invert the string
  const invertedText = reverseString(text);

  //   We return the result of the inverted text
  return res.status(200).json({
    text: invertedText,
    palindrome: isPalindrome,
  });
};
