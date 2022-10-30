function log(func) {
  console.log(func);
}

const playArea = document.getElementById("play-area");
const defaultColor = "#fd1cb";

function createNewDivCell() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cellStyle");
  return playArea.appendChild(newDiv);
}

const divArray = new Array(20); //20 rows

for (let i = 0; i < divArray.length; i++) {
  divArray[i] = Array.from({ length: 10 }).map(function (el) {
    el = createNewDivCell();
    return el;
  });
}

const modelArray = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];

const allShapes = {
  j: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  l: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  i: [[1, 1, 1, 1]],
  o: [
    [1, 1],
    [1, 1],
  ],
  t: [
    [0, 1, 0],
    [1, 1, 1],
  ],
  s: [
    [0, 1, 1],
    [1, 1, 0],
  ],
};

const getKeysInAllShapes = Object.keys(allShapes); //['j','k'...]
const randomKeys =
  getKeysInAllShapes[Math.floor(Math.random() * getKeysInAllShapes.length)];

function copyCurrentShapeToModelArray() {
  let randomRow = Math.floor(Math.random() * 18);
  let randomColumn = Math.floor(Math.random() * 6);
  let currentShape = allShapes[randomKeys];

  for (let i = 0; i < currentShape.length; i++) {
    for (let j = 0; j < currentShape[i].length; j++) {
      modelArray[randomRow + i][randomColumn + j] = currentShape[i][j];
    }
  }
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function refreshDivArray() {
  let color = randomColor();

  for (let i = 0; i < modelArray.length; i++) {
    for (let j = 0; j < modelArray[i].length; j++) {
      if (modelArray[i][j] == "" || modelArray[i][j] == 0) {
        divArray[i][j].style.background = defaultColor;
      } else if (color == defaultColor) {
        color = "green";
        divArray[i][j].style.background = color;
      } else {
        divArray[i][j].style.background = color;
      }
    }
  }
}

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", onResetButtonClick);

function onResetButtonClick() {
  copyCurrentShapeToModelArray();
  refreshDivArray();
}
