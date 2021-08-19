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
}
//Agree or re-select destination
let destAgree;
while (destAgree!==1){ 
let chosenDest=pickDest();
   destAgree = parseInt(prompt(chosenDest+'  Is this a good choice? Pick "1" to keep or "2" to change'));
  }

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
  } 
  //Agree or re-select restaurant
  let foodAgree;
  while (foodAgree!==1){ 
  let chosenFood=pickFood();
     foodAgree = parseInt(prompt(chosenFood+'  Is this a good choice? Pick "1" to keep or "2" to change'));
    }
 
//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
function pickTrans(){
let trans = Math.floor(Math.random() *4);
switch(trans) {
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
}  
  //Agree or re-select transportation
  let transAgree;
  while (transAgree!==1){ 
  let chosenTrans=pickTrans();
     transAgree = parseInt(prompt(chosenTrans+'  Is this a good choice? Pick "1" to keep or "2" to change'));
    }
//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
function pickEnt(){
let ent = Math.floor(Math.random() *4);
switch(ent) {
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
}  
//Agree or re-select entertainment
let entAgree;
while (entAgree!==1){ 
let chosenEnt=pickEnt();
   entAgree = parseInt(prompt(chosenEnt+'  Is this a good choice? Pick "1" to keep or "2" to change'));
  }

  

//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.


//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.

//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
