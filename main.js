const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(TowDArray = [[]]) {
    this.field = TowDArray;
  }
  print() {
    this.field.forEach((line) => {
      console.log(line.join(""));
    });
  }

  static generateField(height, width) {
    const field = [];
    let hatPlaced = false; // Track if hat has been placed
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        if (i === 0 && j === 0) {
          row.push(pathCharacter);
        } else {
          const random = Math.random();
          if (random < 0.1 && !hatPlaced) {
            // Place hat only if it hasn't been placed yet
            row.push(hat);
            hatPlaced = true;
          } else if (random < 0.4) {
            row.push(hole);
          } else {
            row.push(fieldCharacter);
          }
        }
      }
      field.push(row);
    }
    return new Field(field);
  }
}

const field = Field.generateField(5, 6);
let pathCharacterPosition = { Y: 0, X: 0 };
let gameInProgress = true;

while (gameInProgress) {
  field.print();
  const move = prompt(
    "which way to go choose r for Right |l for Left |D for Down U |for UP : "
  );

  let newY = pathCharacterPosition.Y;
  let newX = pathCharacterPosition.X;

  if (move === "r") {
    newX++;
  } else if (move === "d") {
    newY++;
  } else if (move === "u") {
    newY--;
  } else if (move === "l") {
    newX--;
  }

  if (
    field.field[newY] === undefined ||
    field.field[newY][newX] === undefined
  ) {
    console.log("out of bounds");
    gameInProgress = false;
  } else if (field.field[newY][newX] === hole) {
    console.log("you fell into the hole");
    gameInProgress = false;
  } else if (field.field[newY][newX] === hat) {
    console.log("you won !!");
    gameInProgress = false;
  } else if (field.field[newY][newX] === fieldCharacter) {
    field.field[newY][newX] = pathCharacter;
    pathCharacterPosition.Y = newY;
    pathCharacterPosition.X = newX;
  }
}
