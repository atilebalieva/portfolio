function log (text) {
  console.log(text);
};

/* close/open button code */

let closeOpenBtn = document.getElementById('close-btn');
let asidePart = document.getElementById('aside-part');
let mainContent = document.querySelector('#main-content');

closeOpenBtn.addEventListener('click', () => {

if(closeOpenBtn.innerText === 'Close') {
  asidePart.classList.add('hide');
  closeOpenBtn.innerText = 'Open';
  // closeOpenBtn.classList.toggle('open-btn');
  mainContent.style.width = '90%';

}
else if(closeOpenBtn.innerText === 'Open') {
  asidePart.classList.remove('hide');
  closeOpenBtn.innerText = 'Close';
  // closeOpenBtn.classList.remove('open-btn');
  mainContent.style.width = '75%';
};
  
});

/* transform header info*/

let header = document.querySelectorAll('.header-info');
log(header)





