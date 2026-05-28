
const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS ={
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'    
}


const playHuman = (humanChoice) => {
playTheGame( humanChoice, playMachine());

}
const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    console.log(randomNumber);
    return choices[randomNumber];
}
const playTheGame = (human, machine) => {
    console.log('humano: ' + human + "Maquina: " + machine);

    if (human === machine) {
        result.innerHTML = 'Empate!';}
    else if (human === 'paper' && machine === 'rock' ||
        (human === 'rock' && machine === 'scissors') ||
         (human === 'scissors' && machine === 'paper')
        )
         {
       humanScoreNumber++;
       humanScore.innerHTML = humanScoreNumber;
       result.innerHTML = 'Você ganhou!';
    }else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu!';
    }   
}