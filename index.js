"use strict"
//Day Trip generator
//(5 points): As a user, I want a destination to be randomly selected for my day trip.
function randomPicker(arr1){
  let num1 = Math.floor(Math.random() *4);
  let choice= arr1[num1];
  return choice;
}
/* 1. multiple arrays- dest, ent, */
//Agree or re-select destination
let chosenDest;
let destAgree;
while (destAgree!==1){ 
chosenDest=randomPicker(["London","Paris","Morocco","New York"]);
   destAgree = parseInt(prompt("Your destination is: "+chosenDest+".\r\nIs this a good choice?\r\nPick '1' to keep or '2' to change"));
  }

//(5 points): As a user, I want a restaurant to be randomly selected for my day trip.

  let chosenFood;
  let foodAgree;
  while (foodAgree!==1){ 
  chosenFood=randomPicker(["n Indian", " Sushi"," Steakhouse"," Vegan"]);
     foodAgree = parseInt(prompt("You will be dining at a"+chosenFood+" restaurant.\r\nIs this a good choice?\r\nPick '1' to keep or '2' to change"));
    }
 
//(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.

    let chosenTrans;
    let transAgree;
  while (transAgree!==1){ 
  chosenTrans=randomPicker(["airplane","bus","bicycle","train"]);
     transAgree = parseInt(prompt("Your mode of transportation will be "+chosenTrans+".\r\nIs this a good choice?\r\nPick '1' to keep or '2' to change"));
    }
//(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

let entAgree;
let chosenEnt;
while (entAgree!==1){ 
chosenEnt=randomPicker(["go on a sightseeing tour","attend a concert","visit a museum","go shopping"]);
   entAgree = parseInt(prompt("During your trip, you will "+chosenEnt+".\r\nIs this a good choice?\r\nPick '1' to keep or '2' to change"));
  }
//(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
//(10 points): As a user, I want to display my completed trip in the console.
//(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!

 let conf = prompt("Your trip is as follows:\r\nYour destination is: "+chosenDest+".\r\nYou will dine at a"+chosenFood+" restaurant.\r\nYou will travel by "+chosenTrans+",\r\nand while you are there, you will "+chosenEnt+".\r\n- Pick '1' to confirm or '2' to start over");
if (parseInt(conf)===1){
    console.log("Your trip is as follows:\r\nYour destination is: "+chosenDest+".\r\nYou will dine at a"+chosenFood+" restaurant.\r\nYou will travel by "+chosenTrans+",\r\nand while you are there, you will "+chosenEnt+".");

}    else {location.reload();
}
//(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.