let userName = document.querySelector('#name');
const gameField = document.querySelector('.field');

const users = {};//1 we made an empty object;
let correctAnswers = 0;

function getItem() {
   const loadedUsers = localStorage.getItem('users');//4 we are taking our string object and named  loadedUsers

   if(loadedUsers !== null) {//5  made a statment if in local storage we have some object information:
      
      const oldUsers = JSON.parse(loadedUsers);//  6 convert it from string to  the object:
   
      for (let u in oldUsers) {//7 and iterate this object and take the object key name (in our situation this is userName.value)
         
         myFunction(u);// and pass as an argument into the myFunction(u)
      }
   
      // `${oldUsers[u]}`
   } else {
      console.log('no old Users')
   }
}

getItem();
 
function onButtonClick () {
   const userFromInput = userName.value;
   myFunction(userFromInput);

}

function myFunction(user) {

   users[userName] = correctAnswers;
   localStorage.setItem("users", JSON.stringify(users)) ;//3 we add out object with key and value to the LocalStorage, before we make a string instead of the object data;

   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');

   const button = document.createElement('button');
   button.classList.add('btn-hide');
   button.innerText = user;

   let score = document.createElement('span')
   score.classList.add('score');
   score.setAttribute('id', 'score-' + user);
   score.innerText = ` (0)`;
   button.append(score);

   const symbol = document.createElement('span')
   symbol.classList.add('symbol')
   button.append(symbol);

   gameBlock.append(button);
   gameField.append(gameBlock);

   const ulist = document.createElement('ul')
   ulist.setAttribute('id', 'list-' + user);
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
      const list = document.getElementById('list-' + user);
      list.classList.toggle('show');
   });

   play.addEventListener('click', () => {
      doPlay(user);
   });

   reset.addEventListener('click', () => {
      score.innerText = ` (0)`;
   })

   remove.addEventListener('click', () => {
      gameBlock.remove();
   });

}

function doPlay(name) {
   let exspression;
   let answerUser;

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

   let oldScore = scoreSpan.innerText;
   let n = oldScore.substring(2, oldScore.length - 1);
   newScore = parseInt(n) + correctAnswers;
   scoreSpan.innerText = `(${newScore})`;

}


