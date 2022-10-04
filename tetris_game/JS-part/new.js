function log(func) {
   console.log(func);
}
/* Code for lines in the "Play area" */

let playArea = document.getElementById('play-rect');

function setAttributes (el, attrs) {
for (let [key, val] of Object.entries(attrs)) {
    el.setAttribute(key, val);
}
   };
   
   const verticalLine = {
      x1: 0,
      y1 : 5, 
      x2: 0,
      y2 : 695
   };

   const horizontalLine = {
      x1: 5,
      y1 : 0, 
      x2: 376,
      y2 :0
   };


   function newLine(num, lineCoordinates, coor1,coor2) {
   let counter = 0;
   
   for (let i = 0; i <= num; i++) {
      let line = document.createElementNS('http://www.w3.org/2000/svg','line');
      line.classList.add('line-style');

      lineCoordinates[coor1] +=27;
      lineCoordinates[coor2] +=27;

      setAttributes(line, lineCoordinates);

      playArea.append(line);
   }
};

newLine (12, verticalLine, 'x1','x2');
newLine (24, horizontalLine, 'y1','y2');

/* Code to move the square figure*/

let resetButton = document.getElementById('reset-button');

let squareAttributes = {
   class: 'figure',
   x: 2,
   y: 2   
};

resetButton.addEventListener('click', () => {
   createNewSquare();
});

function randomColor() {
   return '#' + Math.floor(Math.random()*16777215).toString(16);   
}

 function createNewSquare() {
   let square = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
   setAttributes(square, squareAttributes);
   square.style.fill =randomColor();
   playArea.appendChild(square);

   let xCoordinateOfSquare = square.getAttribute('x');
   let yCoordinateOfSquare = square.getAttribute('y');

   setInterval(() => {
      if(yCoordinateOfSquare == 2) {
           yCoordinateOfSquare = 2 + 26;
           square.setAttribute('y', yCoordinateOfSquare);
        } else if (yCoordinateOfSquare == 676) {
           return;
        }
        else {
           yCoordinateOfSquare += 27;
           square.setAttribute('y', yCoordinateOfSquare)
        }
        
     }, 1000);

   window.addEventListener('keydown', e =>{

      switch(e.code) {
         case 'ArrowDown':
            console.log('down');
         if(yCoordinateOfSquare == 2) {
               log(typeof(yCoordinateOfSquare))
               yCoordinateOfSquare = 2 + 26;
               square.setAttribute('y', yCoordinateOfSquare);
               log(square);
            } else if (yCoordinateOfSquare == 676) {
               return;
            }
            else {
               log(yCoordinateOfSquare)
               yCoordinateOfSquare += 27;
               log(yCoordinateOfSquare)
               square.setAttribute('y', yCoordinateOfSquare)
            }
            break;
         case 'ArrowLeft':
            console.log('left');
            if(xCoordinateOfSquare == 28) {
               log(xCoordinateOfSquare)
               xCoordinateOfSquare = 28 - 26;
               square.setAttribute('x', xCoordinateOfSquare);
               log(square);
            } else if (xCoordinateOfSquare == 2) {
               return;
            }
            else {
               log(xCoordinateOfSquare)
               xCoordinateOfSquare -= 27;
               log(xCoordinateOfSquare)
               square.setAttribute('x', xCoordinateOfSquare)
            }
   
            break;
         case 'ArrowRight':
            console.log('Right');
            if(xCoordinateOfSquare == 2) {
               log(typeof(xCoordinateOfSquare))
               xCoordinateOfSquare = 2 + 26;
               square.setAttribute('x', xCoordinateOfSquare);
               log(square);
            } else if (xCoordinateOfSquare == 352) {
               return;
            }
            else {
               log(xCoordinateOfSquare)
               xCoordinateOfSquare += 27;
               log(xCoordinateOfSquare)
               square.setAttribute('x', xCoordinateOfSquare)
            }
            break;
      }
   });

};

// function move1(coor1, arg1) {
//    if(coor1 == 2) {
//     return  coor1 = 2 + 26;
//       // square.setAttribute(arg1, coor1);//28
//    } 
//    else {
//       log(coor1);
//       log(coor1);
//       log(arg1)
//      return coor1+= 27;
//    //  return  square.setAttribute(arg1, coor1 )
//    }
// // else if (coor1 == 352) {
// //    return;
// // }

// } 

