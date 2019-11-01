var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];


function dwarfRollCall(dwarves) {
  var output = '';
  for (var i = 0; i < dwarves.length; i++) {
    var dwarfString = `${i + 1}. ${dwarves[i]} `;
    output += dwarfString;
  }
  return output;
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

// function summonCaptainPlanet(planeteerCalls){
//   for (var i = 0; i < planeteerCalls.length; i++) {
//   planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
    
//   }
//   return planeteerCalls;
// }

// function summonCaptainPlanet(planeteerCalls){
//   var newArray = [];
//   for (var i = 0; i < planeteerCalls.length; i++) {
//   var planeteerElements = planeteerCalls[i].toUpperCase() + "!, ";
//   newArray += planeteerElements;  
//   }
//   return newArray;
// }

function summonCaptainPlanet(arr){
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
  var planeteerElements = arr[i].toUpperCase() + "!";
  newArray.push(planeteerElements);  
  }
  return newArray;
}

// function summonCaptainPlanet(arr) {
//   return arr.map(function(char) {
//     return char.toUpperCase() + "!"
//   })
// }

// function summonCaptainPlanet(arr) {
//   return arr.toUppercase() + "!";
// }

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    }else{
      return false;
    }
  }
}

var cheese = ['cheddar', 'gouda', 'camembert']; 

function findTheCheese (arr) {
  for(var i = 0; i < arr.length; i ++) {
    if(arr[i] === "cheddar" || arr[i]  === "gouda" || arr[i] === "camembert") {
      return arr[i];
    } 
  }   
    return "no cheese!";
  
}


