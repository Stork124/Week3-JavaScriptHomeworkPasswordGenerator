// Assignment Code
var generateBtn = document.querySelector("#generate");
// Prompt Variables
    
    //let upperCharPrmpt = prompt("Include Upper Case Characters? (type yes / no)");
   // let lowerCharPrmpt = prompt("include lower case characters? (type yes / no)");
    //let spclCharPrmpt = prompt("Include special characters? (type yes / no)");
    //let prmptArray = [upperCharPrmpt, lowerCharPrmpt, spclCharPrmpt, numPrmpt];

function criteriaPrompt(){
     
     let upperCharPrmpt = prompt("Include Upper Case Characters? (type yes / no)");
     let lowerCharPrmpt = prompt("include lower case characters? (type yes / no)");
     let spclCharPrmpt = prompt("Include special characters? (type yes / no)");
     let numPrmpt = prompt("Include numbers (type yes / no)")
     let prmptArray = [upperCharPrmpt, lowerCharPrmpt, spclCharPrmpt, numPrmpt];
     alert(prmptArray)
  
}
let click = generateBtn.addEventListener('click', criteriaPrompt)

click



    // prompt for loop



