const form = document.querySelector("form");
const randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);
let remainingGuess = document.getElementById("remainingGuess");
const result = document.getElementById("result");
const submittedValue = document.querySelector("#guessNumber");
const guessSlot = document.getElementById("previous");

let prevGuesses = [];
let numOfGuesses = 1;
let playGame = true;

if(playGame){
    form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const guess = parseInt(submittedValue.value);
    validateGuess(guess);
    
})
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please give valid number");
    }
    else if(guess < 1 && guess>100){
        alert("Please give valid number between 1 and 100");
    }
    else{
        prevGuesses.push(guess);
        if(numOfGuesses == 11){
            displayGuess(guess);
            displayMessage("Game over");
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`You guessed it right `)
    }   else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    } else{
        displayMessage(`Number is too high`)
    }

}
function displayGuess(guess){
    submittedValue.value = '';
    guessSlot.innerHTML +=`${guess},`;
    numOfGuesses++;
    remainingGuess.innerHTML = `${11 - numOfGuesses}`;

}   

function displayMessage(guess){
result.innerHTML = `<h2>${guess}</h2>`
}