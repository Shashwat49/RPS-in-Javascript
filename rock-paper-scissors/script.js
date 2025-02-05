let userScore = 0;
let compScore = 0;

const user = document.getElementById('y');
const computer = document.getElementById('c');
const scoreboard = document.getElementById('score');
const stopBtn = document.getElementById('stop');
const restart = document.getElementById('restart');

const options = document.querySelectorAll(".option");
// console.log(options);

let userChoice;
let compChoice;
options.forEach((option) => {
    option.addEventListener('click', () => {
        userChoice = option.getAttribute('id');
        let n = Math.round(Math.random()) + Math.round(Math.random());

        if (n == 0) {
            compChoice = 'r';
        }

        else if (n == 1) {
            compChoice = 'p';
        }

        else {
            compChoice = 's';
        }
        // console.log(userChoice, compChoice);
        // console.log(optionName);
        // userChoice = optionName;

        if (userChoice == compChoice) {
            document.getElementById('showResult').innerText = "It's a draw! No one scored.";
        }
        else if (userChoice == 'r' && compChoice == 'p') {
            document.getElementById('showResult').innerText = "You chose 'Rock' and Computer chose 'Paper'\nComputer Scored!";
            compScore++;
            computer.innerText = compScore;
            user.innerText = userScore;
        }
        else if (userChoice == 'r' && compChoice == 's') {
            document.getElementById('showResult').innerText = "You chose 'Rock' and Computer chose 'Scissors'\nYou Scored!";
            userScore++;
            computer.innerText = compScore;
            user.innerText = userScore;
        }
        else if (userChoice == 'p' && compChoice == 's') {
            document.getElementById('showResult').innerText = "You chose 'Paper' and Computer chose 'Scissors'\nComputer Scored!";
            compScore++;
            computer.innerText = compScore;
            user.innerText = userScore;
        }
        else if (userChoice == 's' && compChoice == 'p') {
            document.getElementById('showResult').innerText = "You chose 'Scissors' and Computer chose 'Paper'\nComputer Scored!";
            userScore++;
            computer.innerText = compScore;
            user.innerText = userScore;
        }

        stopBtn.addEventListener('click', () => {
            scoreboard.classList.add('disable');
            if (userScore>compScore) {
                document.getElementById('showResult').innerText = `GAME TERMINATED!\n You scored ${userScore} and Computer scored ${compScore}.\n YOU WON!`;
            }
            else if (compScore>userScore) {
                document.getElementById('showResult').innerText = `GAME TERMINATED!\n You scored ${userScore} and Computer scored ${compScore}.\n COMPUTER WON!`;
            }
            else if (compScore==userScore) {
                document.getElementById('showResult').innerText = `GAME TERMINATED!\n You scored ${userScore} and Computer scored ${compScore}.\n IT'S A DRAW!`;
            }
        })
        restart.addEventListener('click', () => {
            window.location.reload();
        })
    });
});



// console.log(compChoice);

