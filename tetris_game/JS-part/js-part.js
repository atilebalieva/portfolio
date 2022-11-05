function log(func) {
  console.log(func);
}

const playArea = document.getElementById("play-area");
const defaultColor = "rgb(25, 25, 65)";
function createNewDivCell() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cellStyle");
  return playArea.appendChild(newDiv);
}

const divArray = new Array(20);

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
  L: {
    1: [
      //allshapes ['L'][0]
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    2: [
      //allshapes ['L'][2]
      [1, 1, 1],
      [1, 0, 0],
    ],
    3: [
      //allshapes ['L'][3]
      [1, 1],
      [0, 1],
      [0, 1],
    ],
    4: [
      //allshapes ['L'][4]
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
    4: [[0, 1][(1, 1)][(0, 1)]],
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

function currentShape() {
  let getKeysInAllShapes = Object.keys(allShapes);
  return (randomKeys =
    getKeysInAllShapes[Math.floor(Math.random() * getKeysInAllShapes.length)]);
}

function copyCurrentShapeToModelArray(shapes) {
  update();

  let currentShape = shapes[1];

  for (let i = 0; i < currentShape.length; i++) {
    for (let j = 0; j < currentShape[i].length; j++) {
      modelArray[8 + i][4 + j] = currentShape[i][j];
    }
  }

  refreshDivArray();
  nextPosition(shapes);
}

function nextPosition(shapes) {
  let currentPosition = 1;
  let keys = Object.keys(shapes);
  log(keys.lenght);

  window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowUp" && currentPosition <= 4) {
      currentPosition++;
      // copyCurrentShapeToModelArray(shapes[1 + currentPosition]);
    }
  });
}

function update() {
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
let playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
  copyCurrentShapeToModelArray(allShapes[currentShape()]);
});
