const firstNumber = document.querySelector('#first_number');
const secondNumber = document.querySelector('#second_number');
const symbol = document.querySelector('#operation');
const button = document.querySelector('#btn');
const reply = document.querySelector('#result');
const newSpan = document.createElement("span");
let result;
button.addEventListener('click', calculate);

function calculate() {
   const newFirstNum = parseInt(firstNumber.value);
   const newSecondNum = parseInt(secondNumber.value);
   if (symbol.value === '/') {
      result = newFirstNum / newSecondNum;
   }
   else if (symbol.value === '+') {
      result = newFirstNum + newSecondNum;
   }
   else if (symbol.value === '-') {
      result = newFirstNum - newSecondNum
   }
   else if (symbol.value === '*') {
      result = newFirstNum * newSecondNum
   }
   else if (symbol.value !== '+' || symbol.value !== '-' || symbol.value !== '*' || symbol.value !== '/') {
      result = ('Enter again');
      alert('Please enter one of the "+/*-" operations');
   }
   if (isNaN(newFirstNum) || isNaN(newSecondNum)) {
      result = ('Enter again');
      alert('Please enter an integer number');
   }
   newSpan.innerHTML = ` ${result}`;
   reply.append(newSpan);
}