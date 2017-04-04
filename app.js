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
while (isRescueDiver === null) {
  isRescueDiver = prompt('Is Brian a rescue diver?').trim().toUpperCase();
    console.log('diver: ' + isRescueDiver);
    if (isRescueDiver == 'YES') {
      alert('Correct!');
    } else if (isRescueDiver == 'NO') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      isRescueDiver = null;
    }
};
while (favoriteColor == null) {
  favoriteColor = prompt('Is Brian\'s favorite color Green?').trim().toUpperCase();
    console.log('color: ' + favoriteColor);
    if (favoriteColor == 'YES') {
      alert('Correct!');
    } else if (favoriteColor == 'NO') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      favoriteColor = null
    };
};
while (doesOwnPets == null) {
  doesOwnPets = prompt('Does Brian own any pets?').trim().toUpperCase();
  console.log('pets ' + doesOwnPets);
    if (doesOwnPets == 'NO') {
      alert('Correct!');
    } else if (doesOwnPets == 'YES') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      doesOwnPets = null;
    }
};
while (isSuperHero == null) {
  isSuperHero = prompt('Is Brian a super hero?').trim().toUpperCase()
  console.log('hero ' + isSuperHero);
    if (isSuperHero == 'NO') {
      alert('Correct!');
    } else if (isSuperHero == 'YES') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      isSuperHero = null;
    }
};
while (wasNavy == null) {
  wasNavy = prompt('Was Brian in the Navy?').trim().toUpperCase();
  console.log('military ' + wasNavy);
    if (wasNavy == 'NO') {
      alert('Correct!');
    } else if (wasNavy == 'YES') {
      alert('You know nothing John Snow');
    } else {
      alert('Try again newb');
      wasNavy = null;
  }
};
