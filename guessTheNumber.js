let randomVal = Math.ceil(Math.random() * 100 + 1)
// let randomVal=76
const box = document.querySelector('.box')

const inputBoxValue = document.querySelector('#input')
const submitBtn = document.querySelector('#sbt')
const guessSlot = document.querySelector('.guessSlot')
const prevGuessCount = document.querySelector('#prevGuess')
const remainMove = document.querySelector('#remainMove')
const lowOrHi = document.querySelector('#lowOrHi')

let prevGuess = []
let playGame = true;
let newGuess = remainMove.innerHTML = 10
const p = document.createElement('p')

if (playGame) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(inputBoxValue.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Plaese enter a valid number')
        inputBoxValue.value = ' '
        return
    }
    else if (guess < 1) {
        alert('Plaese enter a number more then 1')
        inputBoxValue.value = ' '
        return
    }
    else if (guess > 100) {
        alert('Plaese enter a number less then 100')
        inputBoxValue.value = ' '
        return
    }
    else {
        prevGuess.push(guess)
        prevGuessCount.innerHTML = `<span>${prevGuess}, </span>`
        inputBoxValue.value = ' '
        newGuess--
        remainMove.innerHTML = newGuess
        if (newGuess < 1) {
            if (guess == randomVal) {
                submitBtn.disabled = true
                inputBoxValue.disabled = true
                const btnForRestart = document.createElement('button')
                btnForRestart.setAttribute('id', 'btnForRestart')
                btnForRestart.textContent = 'Start new games'
                // btnForRestart.inner = `<img>"${restart.jpg}"</img>`
                box.appendChild(btnForRestart)
                displayMsg(`Congrate! You Guessed Right`)
                // endGame()
            }
            submitBtn.disabled = true
            inputBoxValue.disabled = true
            displayMsg(`Game Over`)
            // endGame()
        }
        else if (guess < randomVal) {
            displayMsg(`Guess is tooo low`) 
        }
        else if (guess > randomVal) {
            displayMsg(`Guess is tooo high`)
        }
        else if (newGuess < 1 || !randomVal) {
            displayMsg(`Game Over 2`)
        }
        else if (guess == randomVal) {
            submitBtn.disabled = true
            inputBoxValue.disabled = true
            const btnForRestart = document.createElement('button')
            btnForRestart.setAttribute('id', 'btnForRestart')
            btnForRestart.textContent = 'Start new games'
            // btnForRestart.innerHTML ="<img src='restart.jpg'></img>"
            displayMsg(`Congrate! You Guessed Right`)
            box.appendChild(btnForRestart)
            // endGame()
        }
    }

}
function displayMsg(msg) {
    lowOrHi.innerHTML = `<h5>${msg}</h5>`
}

function endGame(){

}