# Find Your Hat Game

This is a simple terminal game written in JavaScript. The goal of the game is to navigate a field and find your hat without falling into a hole.

## Installation

1. Clone this repository: ` git clone https://github.com/laariane/find-your-hat-game`
2. Navigate to the project directory: `cd yourrepository`
3. Install the necessary dependencies: `npm install`

## Usage

Run the game with the command: `node main.js`

## Game Rules

- The game field is represented as a grid. Each cell can be one of the following:
  - `*` represents the player's current position.
  - `^` represents the hat. The goal is to reach this cell.
  - `O` represents a hole. If the player moves into a hole, they lose.
  - `░` represents open field. The player can safely move into these cells.

- The player starts at the top-left corner of the field and can move one cell at a time in any of the four directions (up, down, left, or right).

- The game ends when the player either finds the hat (and wins) or falls into a hole (and loses).
## License

[MIT](https://choosealicense.com/licenses/mit/)
