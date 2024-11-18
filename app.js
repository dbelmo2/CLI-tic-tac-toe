/**
 * KNOWN BUGS:
 *  1. Players can overwrite another players move. 
 *  2. No win condition currently
 *  3. No end of game overall (max number of moves condition for the while loop is not working)
 */


const readLineModule = require('readline');





readline = readLineModule.createInterface({
   input: process.stdin,
   output: process.stdout
});

/** My Name is Antonio
    * Empty position: ' '
    * X position: 'x'
    * Y position: 'y'
 */







/**
 * Asks the user a question and calls the answerFunction after
 * @param {string} question - The question to ask the user.
 * @param {function} answerFunction - the function that is called when the user answers the question. It has a single argument/parameter which is the answer the user gave.
 */
const question = async (question) => {
   let isValidMove = false;
   let answer;
   while(isValidMove === false) {
      answer = await new Promise((resolve) => readline.question(question, resolve));
      answer = answer.replaceAll(" ", "").toUpperCase();
      const knownValidMoves = ['1A', '2A', '3A', '1B', '2B', '3B', '1C', '2C', '3C'];
      /** 
       * The includes function takes a value/parameter, and it checks if the array contains that value. If it does contain the value, 
       * the function returns true, otherwise it returns false.
       */
      isValidMove = knownValidMoves.includes(answer);

      if (isValidMove === false) {
         console.log('Invalid move, please try again!');
      }
   }
   return answer;
   
};


const getBoard = (boardArray) => {
    const board = `
    \n\n\n\n\n\n\n\n\n
    \n\n\n\n\n\n\n\n\n\n\n\n\n\n
    \n\n\n\n\n\n\n\n

      1     2     3
 A  ${boardArray[0]}    | ${boardArray[1]}   | ${boardArray[2]}
    _____|_____|_____
 B  ${boardArray[3]}    | ${boardArray[4]}   | ${boardArray[5]}   
    _____|_____|_____
 C  ${boardArray[6]}    | ${boardArray[7]}   | ${boardArray[8]}
         |     |
    `
    return board;
};

/**
 * The function starts the game by printing a message informing player one that it is their turn, and prompts them to enter their coordinates (ex: A 1).
 * After player one inputs their coordinates, the game should update the boardArray array with players move. After doing this, the newly updated board should be printed
 * to the console, and the game should prompt player two to make their move. This should continute until the board is full (meaning the maximum number of moves have been made).
 * @param {string[]} boardArray - An array of strings where each string is a position on the board. 
 * @param {string} playerOne - A string containing the value 'x' or 'o'
 * @param {string} playerTwo - A string containing the value 'x' or 'o'
 */
const startGame = async (boardArray, playerOne, playerTwo) => {

   /**
   let boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

    */

   /** your code goes here -----------------------------------*/ 

 // possible move combinations: 1 A, 2 A, 3 A, 1 B, 2 B, 3 B, 1 C, 2 C, 3 C
   let numOfMoves = 0

   const initialBoard = getBoard(boardArray);
   console.log(initialBoard);





   while(numOfMoves < 9) {
      const playerOneMove = await question('Player 1, enter your move: ');
      console.log('playerOneMove is ', playerOneMove);

      if ('1A' === playerOneMove) {
         boardArray[0] = playerOne;
      }
      else if ('2A' === playerOneMove) {
         boardArray[1] = playerOne;
      }
      else if ('3A' === playerOneMove) {
         boardArray[2] = playerOne;
      }
      else if ('1B' === playerOneMove) {
         boardArray[3] = playerOne;
      }
      else if ('2B' === playerOneMove) {
         boardArray[4] = playerOne;
      }
      else if ('3B' === playerOneMove) {
         boardArray[5] = playerOne;
      }
      else if ('1C' === playerOneMove) {
         boardArray[6] = playerOne;
      }
      else if ('2C' === playerOneMove) {
         boardArray[7] = playerOne;
      }
      else if ('3C' === playerOneMove) {
         boardArray[8] = playerOne;
      } else {

      } 
   
      console.log(getBoard(boardArray));
   
   
      const playerTwoMove = await question('Player 2, can you beat that?: ');

      if ('1A' === playerTwoMove ) {
         boardArray[0] = playerTwo;
      }
      else if ('2A' === playerTwoMove) {
         boardArray[1] = playerTwo;
      }
      else if ('3A' === playerTwoMove ) {
         boardArray[2] = playerTwo;
      }
      else if ('1B' === playerTwoMove) {
         boardArray[3] = playerTwo;
      }
      else if ('2B' === playerTwoMove) {
         boardArray[4] = playerTwo;
      }
      else if ('3B' === playerTwoMove) {
         boardArray[5] = playerTwo;
      }
      else if ('1C' === playerTwoMove) {
         boardArray[6] = playerTwo;
      }
      else if ('2C' === playerTwoMove) {
         boardArray[7] = playerTwo;
      }
      else if ('3b2C' === playerTwoMove) {
         boardArray[8] = playerTwo;
      }
    
      
      
      numOfMoves = numOfMoves + 1 
      console.log(getBoard(boardArray))
   }








   readline.close();
      /** ------------------------------------------------------*/ 
}


function randomIntFromInterval(min, max) { // min and max included 
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const main = async () => {

 

   const greetingMessage = 'Greetings! Welcome to CLI-tac-tac-toe. This is a CLI game that requires two players.'
   const boardMessage = `As you can see below, the board\'s x-axis is labeled 1-3 corresponding with it\'s 3 columns. 
      Similarly, the y-axis is labeled A-C corresponding with it's 3 rows. A player can indicate where they would like to make their move by 
      entering an x and y coordinate, seperated by a space. e.g 1 A. The game continues until a player wins or the maximum number of moves has been reached.`
   
   
   let boardArray = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
   



   const playerOne = 'x';
   const playerTwo = 'o';
   await startGame(boardArray, playerOne, playerTwo);


}

main();

