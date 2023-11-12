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
    //let y = prompt("Enter your choice :");
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
        computerScore = computerScore + 1;
    }
    if(playerSelection === "rock" && computuerSelection === "scissor")
    {
        playerScore = playerScore + 1;
        console.log("You win! rock beats scissor")
    }
    if (playerSelection === "paper" && computuerSelection === "rock") 
    {
        playerScore = playerScore + 1;
        console.log("You win! paper beats rock");
    }
    if (playerSelection === "paper" && computuerSelection === "paper") 
    {
        console.log("It's a draw");
    }
    if (playerSelection === "paper" && computuerSelection === "scissor") 
    {
        computerScore = computerScore + 1;
        console.log("You lose! scissor beats paper");
    }
    if (playerSelection === "scissor" && computuerSelection === "rock") 
    {
        computerScore = computerScore + 1;
        console.log("You lose! rock beats scissor");
    }
    if (playerSelection === "scissor" && computuerSelection === "paper") 
    {
        playerScore = playerScore + 1;
        console.log("You win! scissor beats paper");
    }
    if (playerSelection === "scissor" && computuerSelection === "scissor") 
    {
        console.log("It's a draw");
    }
}

function game()
{
     while (computerScore != 5 || playerScore != 5)
     {
        var playerSelection = getPlayerChoice();
        playerSelection = playerSelection.toLowerCase();
        var computuerSelection = getComputerChoice();
        console.log("The player choice :" + playerSelection);
        console.log("The computer choice :" + computuerSelection);
        console.log(playRound(playerSelection, computuerSelection));
        console.log("Player score :"+playerScore);
        console.log("Computer score :"+computerScore);

        if(computerScore == 5 || playerScore == 5)
        {
            break;
        }
     }
}
var computerScore = 0;
var playerScore = 0;
game();
