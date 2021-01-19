exports.reverseString = (text) => {
  let newText = "";
  for (let x = text.length - 1; x >= 0; x--) {
    newText += text[x];
  }

  return newText;
};

exports.checkPalydrome = (text) => {

  // eliminamos los espacios en blanco
  text = text.replace(/ /g, "");

  for (var i = 0; i < text.length; i++) {
    if (text[i] != text[text.length - i - 1]) {
      return false;
    }
  }
  return true;
};
