function log (func) {
   console.log(func);
}
/* Code for lines in the "Play area" */

let playArea = document.getElementById('play-rect');

function setAttributes (el, attrs) {
for (let [key, val] of Object.entries(attrs)) {
    el.setAttribute(key, val);
}
   };
   
   const objVertCoord = {
      x1: 0,
      y1 : 5, 
      x2: 0,
      y2 : 695
   };

   const objHorizCoord = {
      x1: 5,
      y1 : 0, 
      x2: 376,
      y2 :0
   };


   function newLine (num, objVar, coor1,coor2) {
   let counter = 0;
   
   for (let i = 0; i <= num; i++) {
      let line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.classList.add('line-style');

      objVar[coor1] +=27;
      objVar[coor2] +=27;

      setAttributes(line, objVar);

      playArea.append(line);
   }
};

newLine (12, objVertCoord, 'x1','x2');
newLine (24, objHorizCoord, 'y1','y2');

/* Code to move the square figure*/

window.addEventListener('keydown', e =>{

   // console.log(e)
   switch(e.code) {
      case 'ArrowUp':
         console.log('up');
         break;
      case 'ArrowDown':
         console.log('down');
         break;
      case 'ArrowLeft':
         console.log('left');
         break;
      case 'ArrowRight':
         console.log('Right');
         break;
      default:
         console.log('Ignorder')
   }
});

/* Для себя:
за left и Right отвечает координаты х сначала х = 3 + 25, дальше 28 умножаем на 2, тогда фигура будет двигатся ровно по квадрату.
за up и down отвечает координаты у, сначала у+= 3 + 25, чтобы получилось 28, дальше 28 умножаем на 2,

задание Написать функцию которая будет это делать автоматом, 
напоминание: в белой тетради написала уже расчет посмотри.
*/