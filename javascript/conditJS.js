



if (true) {
    console.log('This message will print!'); 
  } 
  // Prints "This message will print!"

// ----------------------------------------------------------
  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }
  // Prints "But the code in this block will!"

  // -----------------------------------------------------------

  let hungerLevel = 7;

if (hungerLevel > 7){
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}
  // -----------------------------------------------------------

  // When we use the && operator, we are checking that two things are true:

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

  // -----------------------------------------------------------


// If we only care about either condition being true, we can use the || operator:

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}


  // -----------------------------------------------------------


// The ! not operator reverses, or negates, the value of a boolean:
let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// --------------------------------------------

let myVariable = 'I Exist!';
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}


// ------------------------------------------------

let numberOfApples = 0;

if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

// Prints 'No apples left!'

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

// ------------------------------------------------


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// ------------------------------------------------


// Truthy and Falsy Assignment

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

let defaultName = username || 'Stranger';

// When running default name checks the left hand condtion first if its true then username prints to the console. Otherwise Stranger (false)
// is printed.
