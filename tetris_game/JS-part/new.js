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
let square = document.getElementById('square');
let x = square.getAttribute('x');
let y = square.getAttribute('y');


window.addEventListener('keydown', e =>{

   switch(e.code) {
      case 'ArrowUp':
         console.log('up');
         if(y == 28) {
            log(y)
            y = 28 - 26;
            square.setAttribute('y', y);
            log(square);
         } else if (y == 2) {
            return;
         }
         else {
            log(y)
            y -= 27;
            log(y)
            square.setAttribute('y', y)
         }
         break;
      case 'ArrowDown':
         console.log('down');
      if(y == 2) {
            log(typeof(y))
            y = 2 + 26;
            square.setAttribute('y', y);
            log(square);
         } else if (y == 676) {
            return;
         }
         else {
            log(y)
            y += 27;
            log(y)
            square.setAttribute('y', y)
         }
         break;
      case 'ArrowLeft':
         console.log('left');
         if(x == 28) {
            log(x)
            x = 28 - 26;
            square.setAttribute('x', x);
            log(square);
         } else if (x == 2) {
            return;
         }
         else {
            log(x)
            x -= 27;
            log(x)
            square.setAttribute('x', x)
         }

         break;
      case 'ArrowRight':
         console.log('Right');
         move1(x);

         break;
      default:
         console.log('Ignorder')
   }
});
//`'${coor1}'`
function move1 (coor1, arg1, arg2) {
   log(typeof(coor1))//string
   if(coor1 == 2) {
      coor1 = 2 + 26;
      log(typeof(coor1))//number
      log(`'${coor1}'`)
      square.setAttribute('coor1', coor1);
      log(square);
   } 
   else {
      log(coor1);
      coor1 += 27;
      log(coor1);
      square.setAttribute('coor1', 'coor1')
   }
}
// else if (coor1 == 352) {
//    return;
// }

function move2 (coor2) {
   if(x == 28) {
      log(x)
      x = 28 - 26;
      square.setAttribute('x', x);
      log(square);
   } else if (x == 2) {
      return;
   }
   else {
      log(x)
      x -= 27;
      log(x)
      square.setAttribute('x', x)
   }   
}

