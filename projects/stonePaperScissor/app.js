let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const computerScore = document.querySelector("#computer-score");
const usersScore = document.querySelector("#user-score");
const message = document.querySelector(".msg");
const gencompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const genchoice = Math.floor(Math.random()*3);
    return options[genchoice];
}

const showWinner = (userwin)=>{
    if(userwin==true){
        console.log("you win");
        message.innerText = "You win";
        message.style.backgroundColor="green";
        userScore = userScore+1;
        usersScore.innerText = userScore;
    }
    else{
        console.log("you lose");
        message.innerText = "You lose";
        message.style.backgroundColor="red";
        compScore = compScore +1;
        computerScore.innerText = compScore;
    }
}
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    //generate computer choice 
    const compchoice = gencompChoice();
    console.log("computer choice = ",compchoice);

    if(userChoice === compchoice){
        console.log("draw");
        message.innerText = "Draw";
        message.style.backgroundColor="yellow";
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
           userwin = compchoice ==="paper" ? false : true;
        } else if (userChoice ==="paper"){
            userwin = compchoice ==="scissor" ? false : true;
        }

        else{
            userwin = compchoice ==="rock" ? false : true;

        }
        showWinner(userwin);

    }
}
choices.forEach( (choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
}
)