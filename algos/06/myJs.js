const userName = document.querySelector('#name')
const button = document.querySelector('#button');
const gameField = document.querySelector('.field');


button.addEventListener('click', () => {
   let correctAnswer = 0;
   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');
   let dropDown = document.createElement('button');
   dropDown.classList.add('btn_name');
   dropDown.innerHTML = userName.value;
   let score = document.createElement('span')
   score.classList.add('score');
   score.innerText = `  (${correctAnswer})`;
   dropDown.append(score);
   let symbol = document.createElement('span')
   symbol.classList.add('symbol')
   dropDown.append(symbol);
   gameBlock.append(dropDown);
   gameField.append(gameBlock);

   dropDown.addEventListener('click', () => {
      //если при нажатии кнопки юзера в блоке gameblock уже есть блок с классом  ulist то удали его
      // а если нет блока с классом ulist добавь его

      let ulist = document.createElement('ul')
      ulist.classList.add('lists')
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
      gameField.append(gameBlock);

      // if (!gameBlock.contains(ulist)) {
      //    console.log(false)
      // } else if (gameBlock.contains(ulist)) {
      //    ulist.remove();
      //    console.log(true)
      // }

      play.addEventListener('click', () => {
         let exspression;
         let gameSession;

         for (let i = 0; i < 5; i++) {
            let firstNum = Math.floor((Math.random() * 10) + 1);
            let secondNum = Math.floor((Math.random() * 10) + 1);
            let opersArr = ['+', '-'];
            let randomOper = Math.floor(Math.random() * opersArr.length);
            exspression = firstNum + ' ' + opersArr[randomOper] + ' ' + secondNum;
            gameSession = parseInt(prompt('Answer in two seconds:' + '\n' + exspression + ' = ?'));
            if (gameSession === null) {
               console.log('break')
               break;
            } else if (gameSession === eval(exspression)) {
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
});







// You are appending the new elements on click. Just check for previously appended element in same div. If it exist then simply remove it, if not then add new:
