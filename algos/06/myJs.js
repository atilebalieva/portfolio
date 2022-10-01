const userName = document.querySelector('#name');
const gameField = document.querySelector('.field');
let allUsers = {};

function createUserButtonElements(user, score) {
   setUsersToLocalStorage(user, score);

   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');
   gameBlock.setAttribute('id', 'game-block' + user);
   const button = document.createElement('button');
   button.classList.add('btn-hide');
   button.innerText = user;

   let scoreSpan = document.createElement('span')
   scoreSpan.classList.add('score');
   scoreSpan.setAttribute('id', 'score-' + user);
   scoreSpan.innerText = `(${score})`;
   button.append(scoreSpan);

   const symbol = document.createElement('span');
   symbol.classList.add('symbol');
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
      update (user, 0);
   })

   remove.addEventListener('click', () => {
      deleteBlock (user);

   });

};

function doPlay(name) {
   let correctAnswers = 0;
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
   let n = oldScore.substring(1, oldScore.length - 1);

   let newScore = parseInt(n) + correctAnswers;
   scoreSpan.innerText = `(${newScore})`;
   setUsersToLocalStorage (name, newScore);

};

function update (user, score) {
   let scoreField = document.getElementById('score-' + user);  
   scoreField.innerText = `(${score})`;
   setUsersToLocalStorage (user, score);
}

function deleteBlock (user,score) {
const deleteGameBlock = document.getElementById('game-block' + user);
deleteGameBlock.remove();
setUsersToLocalStorage (user, score);
}

function setUsersToLocalStorage (user, score) {
   allUsers[user] = score;
   localStorage.setItem('users', JSON.stringify(allUsers));
};

function getUsersFromLocalStorage() {
   const loadedUsers = localStorage.getItem('users');

   if(loadedUsers !== null) {
      allUsers = JSON.parse(loadedUsers);
      for (u in allUsers) {
         createUserButtonElements(u, allUsers[u]);
      }
   };

};

function onAddButtonClick () {
   const userFromInput = userName.value;

   createUserButtonElements(userFromInput, 0);
   userName.value = '';
};

getUsersFromLocalStorage();


