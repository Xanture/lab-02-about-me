'use strict';

//let's declare some vaaaars
var isRescueDiver = null;
var favoriteColor = null;
var doesOwnPets = null;
var isSuperHero = null;
var wasNavy = null;
var score;
// I need to design 5 yes or no question
//each question should return yes or no that is either upper or lower case
// I need a useful and diescriptive promptlog that displays my answers to the browswer
// I prob should write a functions to handle each while loops
// while (isRescueDiver === null) {
//   isRescueDiver = prompt('Is Brian a rescue diver?').trim().toUpperCase();
//     console.log('diver: ' + isRescueDiver);
//     if (isRescueDiver == 'YES') {
//       alert('Correct!');
//     } else if (isRescueDiver == 'NO') {
//       alert('You know nothing John Snow');
//     } else {
//       alert('Try again newb');
//       isRescueDiver = null;
//     }
// };
// while (favoriteColor == null) {
//   favoriteColor = prompt('Is Brian\'s favorite color Green?').trim().toUpperCase();
//     console.log('color: ' + favoriteColor);
//     if (favoriteColor == 'YES') {
//       alert('Correct!');
//     } else if (favoriteColor == 'NO') {
//       alert('You know nothing John Snow');
//     } else {
//       alert('Try again newb');
//       favoriteColor = null
//     };
// };
// while (doesOwnPets == null) {
//   doesOwnPets = prompt('Does Brian own any pets?').trim().toUpperCase();
//   console.log('pets ' + doesOwnPets);
//     if (doesOwnPets == 'NO') {
//       alert('Correct!');
//     } else if (doesOwnPets == 'YES') {
//       alert('You know nothing John Snow');
//     } else {
//       alert('Try again newb');
//       doesOwnPets = null;
//     }
// };
// while (isSuperHero == null) {
//   isSuperHero = prompt('Is Brian a super hero?').trim().toUpperCase()
//   console.log('hero ' + isSuperHero);
//     if (isSuperHero == 'NO') {
//       alert('Correct!');
//     } else if (isSuperHero == 'YES') {
//       alert('You know nothing John Snow');
//     } else {
//       alert('Try again newb');
//       isSuperHero = null;
//     }
// };
// while (wasNavy == null) {
//   wasNavy = prompt('Was Brian in the Navy?').trim().toUpperCase();
//   console.log('military ' + wasNavy);
//     if (wasNavy == 'NO') {
//       alert('Correct!');
//     } else if (wasNavy == 'YES') {
//       alert('You know nothing John Snow');
//     } else {
//       alert('Try again newb');
//       wasNavy = null;
//   }
// };

//I need to make a guessing game that has a random number veriable
//I need to alart the user if they are getting warmer or colder
var favoriteNumber = Math.floor(Math.random() * (1 + 9)) + 1;
console.log('the number is:', favoriteNumber);

var userGuessedNumber;
var guessedNumWrong = true;


console.log('user imputed', userGuessedNumber);
for (var numOfGuesses = 4; numOfGuesses > 0 && guessedNumWrong; numOfGuesses--) {
userGuessedNumber = prompt('My favorite number is between 1 - 10', 'Guess a number between 1 - 10');
userGuessedNumber = parseInt(userGuessedNumber);
console.log(numOfGuesses);
  if (userGuessedNumber === favoriteNumber) {
    alert('You guessed it!')
    guessedNumWrong = false
  } else if (numOfGuesses === 1) {
    alert('Wrong again, and now you\'ve ran out of guesses');
  } else if (userGuessedNumber > favoriteNumber) {
    alert('Too high');
  } else if (userGuessedNumber < favoriteNumber) {
    alert('Too low');
  }
};

//I need to make a guessing game for which states i've lived in
//Lets create a array that holds each states

var stateIveLived = ['wa', 'washington', 'ca', 'california', 'nc', 'north carolina', 'md', 'maryland']
console.log('states i\'ve lived:', stateIveLived);
var gussedStateWrong = true
