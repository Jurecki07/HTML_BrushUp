for (let i = 0; i < 0; i++) {

}

///////////////

for (let counter = 0; counter < 4; counter++ ){
    console.log(counter);
    // let counter = o so the loop starts counting at 0
    //the stopping condtion counter < 4, the loop will run as long as counter is less then 4
    // coounter++ iteration statment.. after each loop the value of counter will increase by 1
    // the {} is the code block that will execute until the condtion is false ( greater then or equal to 4)

}

// Here we have created a loop that will priint 5 through 10 to console

for (let counter = 5; counter < 11; counter++){
    console.log(counter);
    // 5 6 7 8 9 10
}


////////

// Counting in reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
// >= counting backwards
// -- decrease by 1
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
    // 3 2 1 0
}
////////////////////////////////////////////////////////////////////////////////////////

// Write a for loop the goes through the array and prints a message to the console
const vacationSpots = ['Bali', 'Paris', 'Tulum'];


for (let i = 0; i < vacationSpots.length; i++ ){
    console.log('I would love to visit ' + vacationSpots[i]);
}

/////////////////////////////////////////////////////

// Nested Loops

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    }
};

// Here is another example
// off using a nested loop
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];



// first loop goes through bobs followers
for (let i = 0; i < bobsFollowers.length; i++) {
    // with the length method we go through the entire array
    for (let j = 0; j < tinasFollowers.length; j++) {
        //Same for 2nd loop
        // Conditonal to check whats equal and then we push
        // from push bobs to mutal vaiable
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};
//////////////////////////////////////////////

// Using the while loop
// lets convert from for to while

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
}

// A while loop that prints 1, 2, and 3

//CounterTwo variable declared before the loop, it is global.
let counterTwo = 1;
//1st stopping condontion is countertwo is greater then 4
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}

/////////////////////////////////

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
// Empty variable
let currentCard;

// Starting loop runs the loop until currentCard is not equal to spade
while ( currentCard != 'spade') {
    // using math.random to index the cards array
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

/////////////////////////////////////////////////////////////////////////////////////////////

// USing .filter

// Words array
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

//New varaible shortWords stores the returned away from .filter

const shortWords = words.filter(word => {
    //The annon function takes word as a argument, each elemnt in the words array will be passed to this function,calling word to retrun result
    //  word.length is the condtion any word from words that has fewer then 6 characters will be added to the Shortwords array
    return word.length < 6;
});

//Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
});


//Now let's work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters.
// Save the returned array to a const variable named longFavoriteWords.
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter( words => {
    return words.length > 7;
});

////////////////////////////////////////////////////////////////////////////////////////

// Using the .findIndex() Method

// Array of nums set to jumbledNums

const jumbledNums = [123, 25, 78, 5, 9];

//lessThanTen varaible stores the returned method
//num is the single argument that stores the array elements
const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});

//Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant'
// and save the returned value to a const variable named foundAnimal.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
});

//Let's see if we can find the index of the first animal that starts with the letter 's'.
// Call .findIndex() on the animals array return the index of the first element that starts with 's'.
// Assign the returned value to a const variable named startsWithS.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' ? true : false;
});











