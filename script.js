/**
 * Guess The Number Game
 * Done: Get user value from input and save it to variable numberGuess
 * Done: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done: Save the guess history in a variable called guess
 * Done: Display the guess history using displayHistory() function
 * Done: Use the initGame() function to restart the game
 */
 
// Variable to store the list of guesses
let guesses = [];
let guessedNumber = [];

getRandomNumber = () => {
  // *CODE GOES BELOW HERE *
  let correctNumber = Math.ceil(Math.random() * 100);
  return correctNumber;
}

// Variable for store the correct random number
var correctNumber = getRandomNumber();
 

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
  initGame = () => {
  // *CODE GOES BELOW HERE *
  guesses = [];
  correctNumber = getRandomNumber();
  document.getElementById("number-guess").value = null;
  document.getElementById("result").innerHTML = guesses;
  resetResultContent();
}

/**
 * Reset the HTML content for guess history
 */
resetResultContent = () => {
  guessedNumber = [];
  document.getElementById("history").innerHTML = guessedNumber;
}

window.onload = () => {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}
/**
 * Functionality for playing the whole game
 */
playGame = () => {
  // *CODE GOES BELOW HERE *
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess, correctNumber);
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
displayResult = (numberGuess, correctNumber) => {
  (numberGuess == correctNumber) ? showYouWon(numberGuess) : (
    (numberGuess > correctNumber) ? showNumberAbove(numberGuess) : showNumberBelow(numberGuess));
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
saveGuessHistory = (guess,numberGuess) => {
  // *CODE GOES BELOW HERE *
//  guesses.push(guess);
  guessedNumber.push("You guessed " + numberGuess);
  displayHistory();
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
displayHistory = () => {
  let list = `<ul class='list-group'>
    ${guessedNumber.map((guess) => { return "<li class='list-group-item'>" + guess + "</li>"; 
  })} </ul>`;
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
getDialog = (dialogType, text) => {
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

showYouWon = (numberGuess) => {
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  saveGuessHistory(text,numberGuess);
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

showNumberAbove = (numberGuess) => {
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  saveGuessHistory(text,numberGuess);
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

showNumberBelow = (numberGuess) => {
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  saveGuessHistory(text,numberGuess);
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
