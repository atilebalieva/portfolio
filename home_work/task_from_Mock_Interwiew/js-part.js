function log(text) {
  console.log(text);
}

let cardName = document.getElementById("card-name"); //1
let cardNumber = document.getElementById("card-number");
let cardMonth = document.getElementById("month");
let cardYear = document.getElementById("year");
let cvc = document.getElementById("cvc");
let confirmButton = document.getElementById("confirm");

let cardNumberText = document.getElementById("card-number-text"); //2
let cardNameText = document.getElementById("card-name-text");
let monthText = document.getElementById("month-text");
let yearText = document.getElementById("year-text");
let cvcText = document.getElementById("cvc-text");

addEventListener(cardName, cardNameText);
addEventListener(cardNumber, cardNumberText);
addEventListener(cvc, cvcText);
addEventListener(cardMonth, monthText);
addEventListener(cardYear, yearText);

function addEventListener(inputName, elementName) {
  inputName.addEventListener("input", () => {
    elementName.innerHTML = inputName.value;
  });
}
