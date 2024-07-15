let encode = document.querySelector("#encode");
// let decode = document.querySelector("#decode");
let shift = document.querySelector("#shift");
let encodeButton = document.querySelector("#encodeButton");
let decodeButton = document.querySelector("#decodeButton");

function decoded() {
  let msgBtn = document.querySelector(".message-button");
  let message = document.querySelector("#message");
  text = encode.value.toLowerCase();
  shiftValue = shift.value;
  let decryptedMsg = "";

  for (let char of text) {
    letter_ord = char.charCodeAt(0);
    if (letter_ord >= 97 && letter_ord <= 122) {
      letter_ord = letter_ord - parseInt(shiftValue);
      if (letter_ord < 97) {
        letter_ord += 26;
      }
      decryptedMsg += String.fromCharCode(letter_ord);
    } else {
      decryptedMsg += char;
    }
  }
  msgBtn.classList.remove("d-none");
  message.innerHTML = `<h3>${decryptedMsg}</h3>`;
}
function encoded() {
  let msgBtn = document.querySelector(".message-button");
  let message = document.querySelector("#message");
  text = encode.value.toLowerCase();
  shiftValue = shift.value;
  let encryptedMsg = "";

  for (let char of text) {
    letter_ord = char.charCodeAt(0);
    if (letter_ord >= 97 && letter_ord <= 122) {
      letter_ord = letter_ord + parseInt(shiftValue);
      if (letter_ord > 122) {
        letter_ord -= 26;
      }
      encryptedMsg += String.fromCharCode(letter_ord);
    } else {
      encryptedMsg += char;
    }
  }
  msgBtn.classList.remove("d-none");
  message.innerHTML = `<h3>${encryptedMsg}</h3>`;
}
if (encodeButton) {
  encodeButton.addEventListener("click", encoded);
}

if (decodeButton) {
  decodeButton.addEventListener("click", decoded);
}
