'use strict';

//let's declare some vaaaars
var guessedAllStates = true;
var userGuessedState;
var stateGuesses = 0;
var userGuessedNumber;
var guessedNumWrong = true;
var guessRightCounter = 0;
var isRescueDiver = null;
var favoriteColor = null;
var doesOwnPets = null;
var isSuperHero = null;
var wasNavy = null;
var score;
var userName = prompt('What is your name?');
var statesIveLived = ['ca', 'nc', 'md']
// I need to design 5 yes or no question
//each question should return yes or no that is either upper or lower case
// I need a useful and diescriptive promptlog that displays my answers to the browswer
// I prob should write a functions to handle each while loops


// this is a function
function question01(){
while (isRescueDiver === null) {
  isRescueDiver = prompt('Is Brian a rescue diver?').trim().toUpperCase();
    console.log('diver: ' + isRescueDiver);
    if (isRescueDiver == 'YES') {
      alert('Correct!');
      guessRightCounter++
    } else if (isRescueDiver == 'NO') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      isRescueDiver = null;
    }
  }
}

// this is a function
function question02(){
while (favoriteColor == null) {
  favoriteColor = prompt('Is Brian\'s favorite color Green?').trim().toUpperCase();
    console.log('color: ' + favoriteColor);
    if (favoriteColor == 'YES') {
      alert('Correct!');
      guessRightCounter++
    } else if (favoriteColor == 'NO') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      favoriteColor = null
    };
  }
}
// this is a function
function question03(){
while (doesOwnPets == null) {
  doesOwnPets = prompt('Does Brian own any pets?').trim().toUpperCase();
  console.log('pets ' + doesOwnPets);
    if (doesOwnPets == 'NO') {
      alert('Correct!');
      guessRightCounter++
    } else if (doesOwnPets == 'YES') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      doesOwnPets = null;
    }
  }
}

// this is a function
function question04(){
while (isSuperHero == null) {
  isSuperHero = prompt('Is Brian a super hero?').trim().toUpperCase()
  console.log('hero ' + isSuperHero);
    if (isSuperHero == 'NO') {
      alert('Correct!');
      guessRightCounter++
    } else if (isSuperHero == 'YES') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      isSuperHero = null;
    }
  }
}

// this is a function
function question05(){
while (wasNavy == null) {
  wasNavy = prompt('Was Brian in the Navy?').trim().toUpperCase();
  console.log('military ' + wasNavy);
    if (wasNavy == 'NO') {
      alert('Correct!');
      guessRightCounter++
    } else if (wasNavy == 'YES') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      wasNavy = null;
    }
  }
}
//I need to make a guessing game that has a random number veriable
//I need to alart the user if they are getting warmer or colder

// this is a function
function question06(){
var favoriteNumber = Math.floor(Math.random() * (1 + 9)) + 1;
console.log('the number is:', favoriteNumber);

for (var numOfGuesses = 4; numOfGuesses > 0 && guessedNumWrong; numOfGuesses--) {
userGuessedNumber = prompt('My favorite number is between 1 - 10', 'Guess a number between 1 - 10');
userGuessedNumber = parseInt(userGuessedNumber);
  if (userGuessedNumber === favoriteNumber) {
    alert('You guessed it!')
    guessRightCounter++
    guessedNumWrong = false
  } else if (numOfGuesses === 1) {
    alert('Ohhh too bad, the number was ' + favoriteNumber + ', and now you\'ve ran out of guesses');
  } else if (userGuessedNumber > favoriteNumber) {
    alert('Too high');
  } else if (userGuessedNumber < favoriteNumber) {
    alert('Too low');
  }
  }
}
//I need to make a guessing game for which states i've lived in
//Lets create a array that holds each states

// this is a function
function question07(){
for (var numOfGuesses = 0; numOfGuesses < 7 && guessedAllStates; numOfGuesses++) {
userGuessedState = prompt('Guess a state i\'ve lived','Use only abbreviations like NY').toLowerCase();
console.log('user guessed', userGuessedState);
  for (var i = 0; i < statesIveLived.length; i++) {
    if (userGuessedState == statesIveLived[i]) {
      console.log('log' + statesIveLived[i]);
      alert('Correct')
      guessRightCounter += 1
      stateGuesses++
      if (stateGuesses == 3) {
        guessedAllStates = false;
      }
    }
  }
  }
}

question01();
question02();
question03();
question04();
question05();
question06();
question07();



  alert(userName + ', you\'ve gotten ' + guessRightCounter + ' correct!');
