'use strict';

//let's declare some vaaaars
var isRescueDiver = null;
var favoriteColor = null;
var doesOwnPets = null;
var isSuperHero = null;
var wasNavy = null;
// I need to design 5 yes or no question
// I prob should write a functions to handle each while loops
while (isRescueDiver === null) {
isRescueDiver = prompt('Is Brian a rescue diver?').trim().toUpperCase()
  console.log('diver: ' + isRescueDiver)
  if (isRescueDiver == 'YES') {
    alert('Correct!');
  } else if (isRescueDiver == 'NO') {
    alert('You know nothing John Snow');
  } else {
    alert('Try again newb');
    isRescueDiver = null
  }
};
// while (favoriteColor === null) {
// favoriteColor = prompt('Is Brian\'s favorite color red?').trim().toUpperCase()
// console.log('color: ' + favoriteColor)
//
// doesOwnPets = prompt('Does Brian own any pets?').trim().toUpperCase()
// console.log('pets ' + doesOwnPets);
// isSuperHero = prompt('Is Brian a super hero?').trim().toUpperCase()
// console.log('hero ' + isSuperHero);
// wasNavy = prompt('Was Brian in the Navy?').trim().toUpperCase()
// console.log('military ' + wasNavy);
// each question should return yes or no that is either upper or lower case

// I need a useful and diescriptive promptlog that displays my answers to the browswer
