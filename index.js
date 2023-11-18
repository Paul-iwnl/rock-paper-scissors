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

function getPlayerChoice(choice)
{
    playerChoice = choice;
    updateScreen(choice);
}

function updateScreen()
{
    var playerChoiceElement = document.getElementById("playerChoice");
    if (playerChoice == "rock") 
    {
      playerChoiceElement.textContent = "✊";
    }
    if (playerChoice == "paper") 
    {
      playerChoiceElement.textContent = "✋";
    }
    if (playerChoice == "scissor") 
    {
      playerChoiceElement.textContent = "✌️";
    }

    var computerChoiceElement = document.getElementById("computerChoice");
    computerChoice = getComputerChoice();

    if(computerChoice == "rock")
    {
        computerChoiceElement.textContent = "✊";
    }
    if(computerChoice == "paper")
    {
        computerChoiceElement.textContent = "✋";
    }
    if(computerChoice == "scissor")
    {
        computerChoiceElement.textContent = "✌️";
    }
    playRound(playerChoice,computerChoice);
}

function playRound(playerChoice, computerChoice) 
{   
    var winmsgElement = document.getElementById("win-lose-msg");
    var gameDetailElement = document.getElementById("game-detail");
    var playerScoreElement = document.getElementById("playerScore");
    var computerScoreElement = document.getElementById("computerScore");

    if (playerChoice === "rock" && computerChoice === "rock") 
    {
        winmsgElement.textContent = "It's a tie!";
        gameDetailElement.textContent = "Rock ties with rock"
    }

    if (playerChoice === "rock" && computerChoice === "paper") 
    {
        winmsgElement.textContent = "You lose !";
        gameDetailElement.textContent = "Paper beats rock"
        computerScore = computerScore + 1;
        computerScoreElement.textContent = "Computer Score : "+computerScore;
        checkGameStatus();
    }

    if (playerChoice === "rock" && computerChoice === "scissor") 
    {
        winmsgElement.textContent = "You win!";
        gameDetailElement.textContent = "Rock beats scissor";
        playerScore = playerScore + 1;
        playerScoreElement.textContent = "Player Score : "+playerScore;
        checkGameStatus();
    }

    if (playerChoice === "paper" && computerChoice === "rock") 
    {
        winmsgElement.textContent = "You win!";
        gameDetailElement.textContent = "Paper beats rock";
        playerScore = playerScore + 1;
        playerScoreElement.textContent = "Player Score : "+playerScore;
        checkGameStatus();
    }

    if (playerChoice === "paper" && computerChoice === "paper") 
    {
        winmsgElement.textContent = "It's a tie!";
        gameDetailElement.textContent = "Paper ties with paper";
    }

    if (playerChoice === "paper" && computerChoice === "scissor") 
    {
        winmsgElement.textContent = "You lose !";
        gameDetailElement.textContent = "Scissor beats paper";
        computerScore = computerScore + 1;
        computerScoreElement.textContent = "Computer Score : "+computerScore;
        checkGameStatus();
    }

    if (playerChoice === "scissor" && computerChoice === "rock") 
    {
        winmsgElement.textContent = "You lose!";
        gameDetailElement.textContent = "Rock beats scissor"
        computerScore = computerScore + 1;
        computerScoreElement.textContent = "Computer Score : "+computerScore;
        checkGameStatus();
    }

    if (playerChoice === "scissor" && computerChoice === "paper") 
    {
        winmsgElement.textContent = "You win!";
        gameDetailElement.textContent = "Scissor beats paper";
        playerScore = playerScore + 1;
        playerScoreElement.textContent = "Player Score : "+playerScore;
        checkGameStatus();
    }

    if (playerChoice === "scissor" && computerChoice === "scissor") 
    {
        winmsgElement.textContent = "It's a tie!";
        gameDetailElement.textContent = "Scissor ties with scissor";
    }
}

function checkGameStatus()
{
    if(playerScore == 5)
    {
        displayPopup('Player wins !');
    }
    else if(computerScore == 5)
    {
        displayPopup('Computer wins !');
    }
}

function displayPopup(message)
{
    const popup = document.getElementById('popup');
    const popuptext = document.getElementById('popup-text');
    const overlay = document.getElementById('overlay');
    var restartButton = document.getElementById("play-again-btn");
    popuptext.innerText = message;
    popup.classList.remove('hidden');
    overlay.classList.add('active');
    restartButton.addEventListener('click', function(){
        location.reload();
    });
}

var playerChoice;
var computerChoice;
var computerScore = 0;
var playerScore = 0;

