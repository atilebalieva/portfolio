function log(func) {
  console.log(func);
}

const playArea = document.getElementById("play-area");
const defaultColor = "rgb(25, 25, 65)";
const playButton = document.getElementById("play-button");

let currentShape = null;
let currentPosition = 1;

let randomRow = Math.floor(Math.random() * 15);
let randomColumn = Math.floor(Math.random() * 5);

const divArray = new Array(20);

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
  L: {
    1: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    2: [
      [1, 1, 1],
      [1, 0, 0],
    ],
    3: [
      [1, 1],
      [0, 1],
      [0, 1],
    ],
    4: [
      [0, 0, 1],
      [1, 1, 1],
    ],
  },
  Z: {
    1: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    2: [
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  },
  I: {
    1: [[1, 1, 1, 1]],
    2: [[1], [1], [1], [1]],
  },
  O: {
    1: [
      [1, 1],
      [1, 1],
    ],
  },
  T: {
    1: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    2: [
      [1, 0],
      [1, 1],
      [1, 0],
    ],
    3: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    4: [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
  },
  S: {
    1: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    2: [
      [1, 0],
      [1, 1],
      [0, 1],
    ],
  },
};

function createNewDivCell() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cellStyle");
  return playArea.appendChild(newDiv);
}

for (let i = 0; i < divArray.length; i++) {
  divArray[i] = Array.from({ length: 10 }).map(function (el) {
    el = createNewDivCell();
    return el;
  });
}

function refreshDivArray() {
  let color = random_bg_color();

  for (let i = 0; i < modelArray.length; i++) {
    for (let j = 0; j < modelArray[i].length; j++) {
      if (modelArray[i][j] === "" || modelArray[i][j] === 0) {
        divArray[i][j].style.background = defaultColor;
      } else if (color === defaultColor) {
        color = "green";
        divArray[i][j].style.background = color;
      } else {
        divArray[i][j].style.background = color;
      }
    }
  }
}

function cleanModelArray() {
  for (let i = 0; i < modelArray.length; i++) {
    for (let j = 0; j < modelArray[i].length; j++) {
      if (modelArray[i][j] === 1) {
        modelArray[i][j] = "";
      }
    }
  }
}

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

function setCurrentShape() {
  let getKeysInAllShapes = Object.keys(allShapes);
  let randomKeys =
    getKeysInAllShapes[Math.floor(Math.random() * getKeysInAllShapes.length)];
  currentShape = allShapes[randomKeys];
}

window.addEventListener("keydown", (e) => {
  handleKeyDown(e);
});

function handleKeyDown(e) {
  if (e.code === "ArrowUp") {
    handleArrowUp();
    copyCurrentShapeToModelArray();
  }
  if (e.code === "ArrowDown") {
    log("ArrowDown");
  }
  if (e.code === "ArrowLeft") {
    log("ArrowLeft");
  }
  if (e.code === "ArrowRight") {
    log("ArrowRight");
  }
}

function handleArrowUp() {
  const positionCount = Object.keys(currentShape).length;

  currentPosition++;

  if (currentPosition > positionCount) {
    currentPosition = 1;
  }
}

function handleArrowDown() {}

function copyCurrentShapeToModelArray() {
  cleanModelArray();
  const shape = currentShape[currentPosition];

  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      modelArray[0 + i][0 + j] = shape[i][j];
    }
  }

  refreshDivArray();
}

playButton.addEventListener("click", () => {
  setCurrentShape();
  copyCurrentShapeToModelArray();
});
