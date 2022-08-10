const userName = document.querySelector('#name')
const gameField = document.querySelector('.field');
const users = {};//1 we made an empty object;
let correctAnswer = 5;

const loadedUsers = localStorage.getItem('users');//4 we are taking our string object and named  loadedUsers

if(loadedUsers !== null) {//5  made a statment if in local storage we have some object information:
   const oldUsers = JSON.parse(loadedUsers);//  6 convert it from string to  the object:
   console.log(oldUsers);

   for (let u in oldUsers) {//7 and iterate this object and take the object key name (in our situation this is userName.value)
      myFunction(u);// and pass as an argument into the myFunction(u)
   }

} else {
   console.log('no old Users')
}


function onButtonClick () {
  const userFromInput = userName.value;

  users[userFromInput] = correctAnswer;//2 we add to our empty objest, key - userName.value and the value of the key - score - 0;

  localStorage.setItem("users", JSON.stringify(users)) ;//3 we add out object with key and value to the LocalStorage, before we make a string instead of the object data;

  myFunction(userFromInput);

}



function myFunction(userName) {

   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');

   let button = document.createElement('button');
   button.classList.add('btn-hide');
   button.innerText = userName;
   button.setAttribute('id','btn' + userName);

   let score = document.createElement('span');
   score.classList.add('score');
   score.innerText = '(0)';
   button.append(score);

   let symbol = document.createElement('span');
   symbol.classList.add('symbol');
   button.append(symbol);
   gameBlock.append(button);
   gameField.append(gameBlock);

   let dropDown = document.getElementById(userName)
   console.log(dropDown);

   let ulist = document.createElement('ul')
   ulist.setAttribute('id', 'lists');
   gameBlock.append(ulist);

   let play = document.createElement('li');
   play.setAttribute('id', 'list' + userName);
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
         doPlay(name);
      });

      reset.addEventListener('click', () => {
         score.innerHTML = ` (0)`;
      })

      remove.addEventListener('click', () => {
         gameBlock.remove();
      })


   })


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
            answerUser = prompt('Answer in two seconds:' + '\n' + exspression + ' = ?');
            if (answerUser === null) {
               console.log('break');
               break;
            } else if (parseInt(answerUser) === eval(exspression)) {
               correctAnswer += 1
               score.innerHTML = `  (${correctAnswer})`;
            }
         };
}

