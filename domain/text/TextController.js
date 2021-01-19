const { reverseString } = require("../../utils/CustomMethods");

// GetReverseText
exports.getReverseText = (req, res) => {

  // Validar si existe la variable text
  const { text } = req.query;

  //   The method is called to invert the string
  const invertedText = reverseString(text);

  //   We return the result of the inverted text
  return res.send(invertedText);
};
