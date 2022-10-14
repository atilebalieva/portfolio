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


/* Code to create and move the square figure*/

let squareAttributes = {
   class: 'figure',
   x: 2,
   y: 1   
};

let currentSquare = null;

let resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
   onResetButtonClick();
});

function onResetButtonClick() {
   createNewSquare();
   handleTimer();
   handleKeyDownEventListener();
};

function randomColor() {
   return '#' + Math.floor(Math.random()*16777215).toString(16);   
};

 function createNewSquare() {
   currentSquare = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
   setAttributes(currentSquare, squareAttributes);
   currentSquare.style.fill =randomColor();
   playArea.appendChild(currentSquare);

};//1

function handleTimer() {
   setInterval(() => {
      moveSquareDown();//3
     }, 1000);
};//2

function moveSquareDown() {
   let yCoordinateOfSquare = parseInt(currentSquare.getAttribute('y'));

      if(yCoordinateOfSquare < 676) {
         yCoordinateOfSquare += 27;
         currentSquare.setAttribute('y', yCoordinateOfSquare);
      } else {
         createNewSquare();
      }
};

function handleKeyDownEventListener() {
   let xCoordinateOfSquare = currentSquare.getAttribute('x');
   let yCoordinateOfSquare = currentSquare.getAttribute('y');

   window.addEventListener('keydown', e =>{
      switch(e.code) {
         case 'ArrowDown':
            moveSquareDown();//5
            break;
         case 'ArrowLeft':
            moveSquareLeft();//6
            break;
         case 'ArrowRight':
            moveSquareRight();//7
            break;
      }
   });

};//4


function moveSquareLeft() {
   let xCoordinateOfSquare = parseInt(currentSquare.getAttribute('x'));
   if(xCoordinateOfSquare > 2) {
      xCoordinateOfSquare -= 27;
      currentSquare.setAttribute('x', xCoordinateOfSquare);
   }

   // if(xCoordinateOfSquare == 28) {
   //    xCoordinateOfSquare = 28 - 26; //2
   //    currentSquare.setAttribute('x', xCoordinateOfSquare);
   // } else if (xCoordinateOfSquare == 2) {
   //    return;
   // }
   // else {
   //    xCoordinateOfSquare -= 27;
   //    currentSquare.setAttribute('x', xCoordinateOfSquare)
   // }
};

function moveSquareRight() {

   let xCoordinateOfSquare = parseInt(currentSquare.getAttribute('x'));
   if(xCoordinateOfSquare < 352) {
      xCoordinateOfSquare += 27;
      currentSquare.setAttribute('x', xCoordinateOfSquare);
   }

   // if(xCoordinateOfSquare == 2) {
   //    log(typeof(xCoordinateOfSquare))
   //    xCoordinateOfSquare = 2 + 26;
   //    currentSquare.setAttribute('x', xCoordinateOfSquare);
   // } else if (xCoordinateOfSquare == 352) {
   //    return;
   // }
   // else {
   //    xCoordinateOfSquare += 27;
   //    currentSquare.setAttribute('x', xCoordinateOfSquare)
   // }
}

//Summary what we did:
// Changes in the Tetris game
// 1. Make the global function currentSquare (it is our square)
// 2. Make the onResetButtonClick function. There add our new functions:
// - createNewSquare();
// - handleTimer();
// - handleKeyDownEventListener();
// 3. Inside of the handleTimer we add our setInterval( it is moving square every one sec);
// 4. HandleKeyDownEventListener is related to keydown;
// 5. To handle attributes like x and y, inside of the each function(handleKeyDownEventListener, moveSquareLeft, moveSquareRight, moveSquareDown) we add                -let xCoordinateOfSquare = currentSquare.getAttribute('x');
//       -let yCoordinateOfSquare = currentSquare.getAttribute('y');
// 6. moveSquareLeft, moveSquareRight, moveSquareDown changed the y attribute from 2 to 1 and changed condition
