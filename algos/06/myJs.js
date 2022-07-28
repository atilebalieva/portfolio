const userName = document.querySelector('#name');
const gameField = document.querySelector('.field');
function myFunction() {
   const name = userName.value;

   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');

   const button = document.createElement('button');
   button.classList.add('btn-hide');
   button.textContent = name;

   let score = document.createElement('span')
   score.classList.add('score');
   score.setAttribute('id', 'score-' + name);
   score.innerHTML = `(0)`;
   button.append(score);

   const symbol = document.createElement('span')
   symbol.classList.add('symbol')
   button.append(symbol);

   gameBlock.append(button);
   gameField.append(gameBlock);

   const ulist = document.createElement('ul')
   ulist.setAttribute('id', 'list-' + name);
   ulist.classList.add('list')
   gameBlock.append(ulist);

   const play = document.createElement('li');
   play.innerText = 'Play';
   ulist.append(play);

   const reset = document.createElement('li');
   reset.innerText = 'Reset';
   ulist.append(reset);

   const remove = document.createElement('li');
   remove.innerText = 'Delete';
   ulist.append(remove);

   button.addEventListener('click', () => {
      const list = document.getElementById('list-' + name);
      list.classList.toggle('show');
   });

   play.addEventListener('click', () => {
      doPlay(name);
   });

   reset.addEventListener('click', () => {
      score.innerHTML = ` (0)`;
   })

   remove.addEventListener('click', () => {
      gameBlock.remove();
   });

}

function doPlay(name) {
   let exspression;
   let answerUser;
   let correctAnswers = 0;

   for (let i = 0; i < 5; i++) {
      let firstNum = Math.floor((Math.random() * 10) + 1);
      let secondNum = Math.floor((Math.random() * 10) + 1);
      let opersArr = ['+', '-'];
      let randomOper = Math.floor(Math.random() * opersArr.length);

      exspression = firstNum + ' ' + opersArr[randomOper] + ' ' + secondNum;

      let date1 = new Date();
      answerUser = prompt('Answer in two seconds:' + '\n' + exspression + ' = ?');
      let date2 = new Date();

      let seconds = (date2 - date1) / 1000;

      if (answerUser === null) {
         break;
      }

      if (parseInt(answerUser) === eval(exspression) && seconds <= 5) {
         correctAnswers++;
      }
   }

   let scoreSpan = document.getElementById('score-' + name);

   let oldScore = scoreSpan.innerHTML;
   let n = oldScore.substring(1, oldScore.length - 1);

   let newScore = parseInt(n) + correctAnswers;
   scoreSpan.innerHTML = `(${newScore})`;

   store(name,newScore);

}
let localInfo = {};
function store(name,score) {

   localInfo.nameUser = name;
   localInfo.scores = score;
   // window.localStorage.setItem(name, JSON.stringify(localInfo));
}

console.log(localInfo);

