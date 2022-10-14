function log (text) {
  console.log(text);
};

/* close/open button code */

let closeOpenBtn = document.querySelector('.close-btn');
let asidePart = document.querySelector('aside');
let mainContent = document.querySelector('#main-content');

closeOpenBtn.addEventListener('click', () => {

if(closeOpenBtn.innerText === 'Close') {
  asidePart.classList.add('hide');
  closeOpenBtn.innerText = 'Open';
  closeOpenBtn.style.cssText = 'left: 0%; border-radius: 0 14px 14px 0'
  mainContent.style.width = '100%';
}
else if(closeOpenBtn.innerText === 'Open') {
  asidePart.classList.remove('hide');
  closeOpenBtn.innerText = 'Close';
  closeOpenBtn.style.cssText = 'left: 23%; border-radius: 12px'
  mainContent.style.width = '75%';
};
  
});

/* transform header info*/

let text = document.querySelectorAll('.header-info');//    <h2 class="header-info self_rep">Web developer</h2>
let strText= text.textContent; //Web developer
let splitText = strText.split(''); //['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
text.innerText = "";

for(let i = 0; i  < splitText.length; i++) {
  if(splitText[i] === ' '){
    // text.innerHTML += '<br/>'
    text.innerHTML += '<span class = "each-header-letter">' + '&nbsp' + '</span>' 
  } else {
    text.innerHTML += '<span class = "each-header-letter">' + splitText[i] + '</span>'
  }
} 

let char = 0;

let timer = setInterval(onTick,80);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  log(char)
  if(char === splitText.length){
    complete();
    return;
  }
};

function complete() {
  clearInterval(timer);
  timer = null;
};