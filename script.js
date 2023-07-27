function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
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

let playerSelection
    i=0
    j=0
    winnerDeclared = false;

function updateScore() {
    const punctajCalculator = document.createElement('div');
    const punctajOm = document.createElement('div');
    punctajCalculator.textContent = 'Computer Score: ' + i;
    punctajOm.textContent = "Player Score: " + j;
    const scorul = document.querySelector('#scor');
    scorul.innerHTML = '';
    scorul.appendChild(punctajCalculator);
    scorul.appendChild(punctajOm);
}

function announceWinner() {
    if (i >= 5) {
        tabela.innerHTML = 'Computer wins the game!';
        winnerDeclared = true;
    } else if (j >= 5) {
        tabela.innerHTML = 'You win the game!';
        winnerDeclared = true;
    }

    // If the winner is declared, disable the buttons
    if (winnerDeclared) {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function startGame() {
    const container = document.querySelector('#container');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    button1.textContent = 'Rock';
    button2.textContent = 'Paper';
    button3.textContent = 'Scissors';
    const tabela = document.querySelector('#tabela');

    // Add event listeners to the buttons
    button1.addEventListener('click', () => {
        if (!winnerDeclared) {
            const computerSelection = getComputerChoice();
            const rezultat = playRound('rock', computerSelection);
            tabela.innerHTML = 'Computer chose: ' + computerSelection + '<br>' + rezultat;
            console.log('Computer chose:', computerSelection);
            console.log(playRound('rock', computerSelection));

            if (rezultat == 'Computer wins!') {
                i++;
            } else if (rezultat == 'You win!') {
                j++;
            }

            updateScore();
            announceWinner();
        }
    });
    button2.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const rezultat = playRound('paper', computerSelection);
        tabela.innerHTML = 'Computer chose: ' + computerSelection + '<br>' + rezultat;
        console.log('Computer chose:', computerSelection);
        console.log(playRound('paper', computerSelection));

        if (rezultat == 'Computer wins!') {
            i++;
        } else if (rezultat == 'You win!') {
            j++;
        }

        updateScore();
        announceWinner();
    });
    button3.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const rezultat = playRound('scissors', computerSelection);
        tabela.innerHTML = 'Computer chose: ' + computerSelection + '<br>' + rezultat;
        console.log('Computer chose:', computerSelection);
        console.log(playRound('scissors', computerSelection));

        if (rezultat == 'Computer wins!') {
            i++;
        } else if (rezultat == 'You win!') {
            j++;
        }

        updateScore();
        announceWinner();
    });
    
    container.appendChild(button1);
    container.appendChild(button2);
    container.appendChild(button3);
}

// Call startGame() after the buttons are created
startGame();