function getComputerChoice () 
{
    const choices = ['rock', "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection)
{
    let result;
    if(playerSelection === 'rock')
    {
        if(computerSelection === 'rock')
        {
             result = 'It\'s a draw!';
        }
        if(computerSelection === 'paper')
        {
             result = 'Computer wins!';
        }
        if(computerSelection === 'scissors')
        {
             result = 'You win!';
        }
    }
    else if(playerSelection === 'paper')
    {
        if(computerSelection === 'rock')
        {
             result = 'You win!';
        }
        if(computerSelection === 'paper')
        {
             result = 'It\'s a draw!';
        }
        if(computerSelection === 'scissors')
        {
             result = 'Computer wins!';
        }
    }
    else if(playerSelection === 'scissors')
    {
        if(computerSelection === 'rock')
        {
             result = 'Computer wins!';
        }
        if(computerSelection === 'paper')
        {
             result = 'You win!';
        }
        if(computerSelection === 'scissors')
        {
             result = 'It\'s a draw!';
        }
    }
    return result;
}

const computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);
const playerSelection = prompt("Type your weapon here", "rock/paper/scissors").toLowerCase();

console.log(playRound(playerSelection, computerSelection));


