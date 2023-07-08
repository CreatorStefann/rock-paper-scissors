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

function game()
{
    let scor = 0;
    for (let i=0; i<5;i++)
    {
        const computerSelection = getComputerChoice();
        console.log("Computer chose:", computerSelection);
        const playerSelection = prompt("Type your weapon here", "rock/paper/scissors").toLowerCase();
        if(playRound(playerSelection, computerSelection) === 'It\'s a draw!')
        {
            i--;
        }
        else if(playRound(playerSelection, computerSelection) === 'You win!')
        {
            scor++;
        }
    }
    if(scor < 3)
    {
        console.log("Computer wins...by far");
    }
    else
    {
        console.log("You win...by far");
    }
}

console.log(game());


