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

