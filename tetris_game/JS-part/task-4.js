function log(func) {
  console.log(func);
}

let playArea = document.getElementById("play-area");

function createNewDivCell() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("cellStyle");
  return playArea.appendChild(newDiv);
}

let divsArray = [];
let createRowsInDivsArr = new Array(20); //20 rows

for (let i = 0; i < createRowsInDivsArr.length; i++) {
  createRowsInDivsArr[i] = Array.from({ length: 10 }).map(function (el) {
    el = createNewDivCell();
    return el;
  });
}

divsArray.push(createRowsInDivsArr);

let mainEmptyArr = [
  ["", "G", "", "", "", "", "", "", "", ""],
  ["", "G", "", "", "", "", "", "", "", ""],
  ["", "G", "", "", "", "", "", "", "", ""],
  ["", "G", "", "", "", "", "", "", "", ""],
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
  ["", "", "Y", "", "", "G", "", "", "", ""],
  ["", "R", "Y", "", "", "G", "G", "", "", ""],
  ["R", "R", "Y", "Y", "R", "G", "Y", "Y", "P", "P"],
  ["R", "P", "P", "R", "R", "R", "Y", "R", "P", "P"],
  ["P", "P", "G", "G", "G", "G", "Y", "R", "R", "R"],
];

for (let i = 0; i < mainEmptyArr.length; i++) {
  for (let j = 0; j < mainEmptyArr[i].length; j++) {
    if (mainEmptyArr[i][j] == "") {
      createRowsInDivsArr[i][j].style.background = "rgb(25, 25, 65)";
    }
    if (mainEmptyArr[i][j] == "G") {
      createRowsInDivsArr[i][j].style.background = "green";
    }
    if (mainEmptyArr[i][j] == "R") {
      createRowsInDivsArr[i][j].style.background = "#da0000";
    }
    if (mainEmptyArr[i][j] == "P") {
      createRowsInDivsArr[i][j].style.background = "#b000ff";
    }
    if (mainEmptyArr[i][j] == "Y") {
      createRowsInDivsArr[i][j].style.background = "yellow";
    }
  }
}
