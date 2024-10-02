const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorBtn = document.getElementById('scissor')
const userDisplay = document.getElementById('user-score')
const computerDisplay = document.getElementById('computer-score')
const textDisplay = document.getElementById('text-display')


// calling the playRound function with the player's choice as an argument when a button is clicked
rockBtn.addEventListener('click', () => playRound('rock'))
paperBtn.addEventListener('click', () => playRound('paper'))
scissorBtn.addEventListener('click', () => playRound('scissor'))

let userScore = 0;
let computerScore = 0

function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    if(playerChoice === computerChoice) {
        textDisplay.innerHTML = "It's a tie!"
    } else if((playerChoice === 'rock' && computerChoice === 'scissor') || 
    (playerChoice === 'scissor' && computerChoice === 'paper') || 
    (playerChoice === 'paper') && computerChoice === 'rock') {
        userScore++
        userDisplay.innerHTML = userScore
        textDisplay.innerHTML = 'You win!'
    } else {
        computerScore++
        computerDisplay.innerHTML = computerScore
        textDisplay.innerHTML = 'Computer wins!'
    }

}
