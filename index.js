"use strict"
//Day Trip generator
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
let dest = Math.floor(Math.random() *4);
switch(dest) {
    case 0:
    console.log("Your trip destination is Paris");
    break;
    case 1:
        console.log("Your trip destination is London");
    break;
    case 2:
        console.log("Your trip destination is Morocco");
    break;
    case 3:
        console.log("Your trip destination is New York");

    break;
}


//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
let food = Math.floor(Math.random() *4);
switch(food) {
    case 0:
    console.log("Your restaurant is a steakhouse ");
    break;
    case 1:
        console.log("Your restaurant serves Sushi");
    break;
    case 2:
        console.log("Your restaurant serves Indian food");
    break;
    case 3:
        console.log("Your restaurant is Vegan");

    break;
}
//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

let transport = Math.floor(Math.random() *4);
switch(transport) {
    case 0:
    console.log("You will travel by airplane");
    break;
    case 1:
        console.log("You will travel by bicycle");
    break;
    case 2:
        console.log("You will travel by train");
    break;
    case 3:
        console.log("You will travel by bus");
    break;
}
//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
