const name = document.querySelector('#name')
const button = document.querySelector('#button');
const gameField = document.querySelector('.field');


button.addEventListener('click', () => {
   const gameBlock = document.createElement('div');
   gameBlock.classList.add('game_block');
   let dropDown = document.createElement('button');
   dropDown.classList.add('btn_name');
   dropDown.innerHTML = name.value;
   let score = document.createElement('span')
   score.classList.add('score');
   score.innerHTML = ' (0)'
   dropDown.append(score);
   let symbol = document.createElement('span')
   symbol.classList.add('symbol')
   dropDown.append(symbol);
   gameBlock.append(dropDown);
   gameField.append(gameBlock);

   dropDown.addEventListener('click', () => {
      // if (dropDown have ulist) {
      //    ulist.remove();
      // }
      let ulist = document.createElement('ul')
      ulist.classList.add('lists')
      let play = document.createElement('li');
      play.innerText = 'Play';
      ulist.append(play);
      let reset = document.createElement('li');
      reset.innerText = 'Reset';
      ulist.append(reset);
      const remove = document.createElement('li');
      remove.innerText = 'Delete';
      ulist.append(remove);
      gameBlock.append(ulist);

      play.addEventListener('click', () => {

      });

      reset.addEventListener('click', () => {
         score.innerHTML = ' (1)';
      })

      remove.addEventListener('click', () => {
         gameBlock.remove();
      })

   })

});







// You are appending the new elements on click. Just check for previously appended element in same div. If it exist then simply remove it, if not then add new:
