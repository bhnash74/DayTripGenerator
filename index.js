"use strict"
//Day Trip generator
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
function pickDest(){
let dest = Math.floor(Math.random() *4);
switch(dest) {
    case 0:
    return ("Your trip destination is Paris");
    break;
    case 1:
        return ("Your trip destination is London");
    break;
    case 2:
        return ("Your trip destination is Morocco");
    break;
    case 3:
        return ("Your trip destination is New York");

    break;
}
} console.log(pickDest());

//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
function pickFood(){
let food = Math.floor(Math.random() *4);
switch(food) {
    case 0:
    return ("Your restaurant is a steakhouse ");
    break;
    case 1:
        return ("Your restaurant serves Sushi");
    break;
    case 2:
        return ("Your restaurant serves Indian food");
    break;
    case 3:
        return ("Your restaurant is Vegan");

    break;
}
} console.log(pickFood());
//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
function pickTransport(){
let transport = Math.floor(Math.random() *4);
switch(transport) {
    case 0:
    return ("You will travel by airplane");
    break;
    case 1:
        return ("You will travel by bicycle");
    break;
    case 2:
        return("You will travel by train");
    break;
    case 3:
        return("You will travel by bus");
    break;
}
}console.log(pickTransport());
//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
function pickEntert(){
let entert = Math.floor(Math.random() *4);
switch(entert) {
    case 0:
    return ("You will go sightseeing tour");
    break;
    case 1:
    return ("You will go to a concert");
    break;
    case 2:
    return ("You will go shopping");
    break;
    case 3:
    return ("You will visit a museum");
    break;
}
} console.log(pickEntert());

//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.

//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
