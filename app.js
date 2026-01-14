let userScore = 0;
let compScore = 0;
 
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg")//  prefer querySelector over getElementbyId

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
// rock, paper , scissors
const options=["rock","papers","scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}


const drawGame=()=>{
    console.log("Game was draw");
    message.style.backgroundColor ="#111"    
    message.innerText = "Game was draw!, Play again"
}

const showWinner = (userwin,userChoice,compChoice)=>{/// here pass as parameter
    if(userwin){
        userScore++;
        // userScorePara++;
        userScorePara.innerText = userScore;
        message.style.backgroundColor ="#009900"
        console.log("You win!");
        message.innerText = "You win!"
    }else{
        compScore++;
        // Writing innerText is mandatory and this is the correct way
        compScorePara.innerText= compScore;
        message.style.backgroundColor ="#990000"
        console.log("You lose!");
        message.innerText= "you lose!"
    }
}
const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
    // Generate Computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    
    if(userChoice==compChoice){
        drawGame();
    }
    else {
        let userwin = true;
        if(userChoice=="rock"){
            userwin = compChoice=="paper" ? false: true;
        }
        if(userChoice=="paper"){
            userwin = compChoice=="rock"? true: false;
        }
        if(userChoice=="scissors"){
            userwin= compChoice=="rock"? false: true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

}


choices.forEach( (choice) =>{
    choice.addEventListener("click",()=>{
      const userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
        
    })
})