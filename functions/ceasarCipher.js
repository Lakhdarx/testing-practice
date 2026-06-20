export default function caesarCipher(text, key) {
  const textArray = text.split("");
  const modifiedArray = textArray.map((element) => {
    return shiftLetter(element, key);
  });
  return modifiedArray.join("");
}

function shiftLetter(letter, key) {
  if (letter === "") return "";
  let acsiCode = letter.charCodeAt();
  if (acsiCode < 65 || acsiCode > 122 || (acsiCode > 90 && acsiCode < 97))
    return letter;
  if (isUpperCase(letter)) {
    acsiCode = acsiCode - 65 + key;
    acsiCode = acsiCode % 26;
    acsiCode += 65;
  } else {
    acsiCode = acsiCode - 97 + key;
    acsiCode = acsiCode % 26;
    acsiCode += 97;
  }
  return String.fromCharCode(acsiCode);
}

const isUpperCase = (str) => str === str.toUpperCase();
