function getComputerChoice()
{
    var x;
    let xNum = Math.floor(Math.random()*3)+1;
    if (xNum === 1)
    {
        x = "rock";
    }
    if(xNum === 2)
    {
        x = "paper"
    }
    if(xNum === 3)
    {
        x = "scissor"
    }
    return x;
}

function getPlayerChoice()
{
    let y = prompt("Enter your choice :");
    return y;
}

function playRound(playerSelection, computuerSelection) 
{
    if(playerSelection === "rock" && computuerSelection ==="rock")
    {
        console.log("It's a draw!");
    }
    if(playerSelection === "rock" && computuerSelection ==="paper")
    {
        console.log("You lose! paper beats rock");
    }
    if(playerSelection === "rock" && computuerSelection === "scissor")
    {
        console.log("You win! rock beats scissor")
    }
    if (playerSelection === "paper" && computuerSelection === "rock") 
    {
        console.log("You win! paper beats rock");
    }
    if (playerSelection === "paper" && computuerSelection === "paper") 
    {
        console.log("It's a draw");
    }
    if (playerSelection === "paper" && computuerSelection === "scissor") 
    {
        console.log("You lose! scissor beats paper");
    }
    if (playerSelection === "scissor" && computuerSelection === "rock") 
    {
        console.log("You lose! rock beats scissor");
    }
    if (playerSelection === "scissor" && computuerSelection === "paper") 
    {
        console.log("You win! scissor beats paper");
    }
    if (playerSelection === "scissor" && computuerSelection === "scissor") 
    {
        console.log("It's a draw");
    }
}


var playerSelection = getPlayerChoice();
playerSelection = playerSelection.toLowerCase();
var computuerSelection = getComputerChoice();
console.log("The player choice :"+playerSelection);
console.log("The computer choice :"+computuerSelection);
console.log(playRound(playerSelection,computuerSelection));
