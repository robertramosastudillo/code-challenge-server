exports.reverseString = (text) => {
  let newText = "";
  for (let x = text.length - 1; x >= 0; x--) {
    newText += text[x];
  }

  return newText;
};
