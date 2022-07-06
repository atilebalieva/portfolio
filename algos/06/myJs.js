const userName = document.querySelector('#name')
const gameField = document.querySelector('.field');

function myFunction() {

   //create button element
   let correctAnswer = 0;
   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');
   let button = document.createElement('button');
   button.classList.add('btn-hide');
   button.textContent = userName.value;
   button.setAttribute('id', userName.value)
   let score = document.createElement('span')
   score.classList.add('score');
   score.innerText = `  (${correctAnswer})`;
   button.append(score);
   let symbol = document.createElement('span')
   symbol.classList.add('symbol')
   button.append(symbol);
   gameBlock.append(button);
   gameField.append(gameBlock);
   let dropDown = document.getElementById(userName.value)
   console.log(dropDown);

   // create ul element
   let ulist = document.createElement('ul')
   ulist.setAttribute('id', 'lists');
   gameBlock.append(ulist);
   let play = document.createElement('li');
   play.innerText = 'Play';
   ulist.append(play);
   let reset = document.createElement('li');
   reset.innerText = 'Reset';
   ulist.append(reset);
   const remove = document.createElement('li');
   remove.innerText = 'Delete';
   ulist.append(remove);

   button.addEventListener('click', () => {
      let list = document.getElementById('lists');
      list.classList.toggle('show');


      play.addEventListener('click', () => {
         let exspression;
         let answerUser;
         for (let i = 0; i < 5; i++) {
            let firstNum = Math.floor((Math.random() * 10) + 1);
            let secondNum = Math.floor((Math.random() * 10) + 1);
            let opersArr = ['+', '-'];
            let randomOper = Math.floor(Math.random() * opersArr.length);
            exspression = firstNum + ' ' + opersArr[randomOper] + ' ' + secondNum;
            answerUser = prompt('Answer in two seconds:' + '\n' + exspression + ' = ?');
            if (answerUser === null) {
               console.log('break');
               break;
            } else if (parseInt(answerUser) === eval(exspression)) {
               correctAnswer += 1
               score.innerHTML = `  (${correctAnswer})`;
            }
         }
      });

      reset.addEventListener('click', () => {
         score.innerHTML = ` (0)`;
      })

      remove.addEventListener('click', () => {
         gameBlock.remove();
      })


   })


}
