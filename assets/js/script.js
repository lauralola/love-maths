document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type')==='submit'){
                checkAnswer();
            } else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }})
    
        }

        runGame('addition');

    })

/**
 * Runs inital set up
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType==='addition'){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
};

/**
 * Checks answer
 */

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer=calculateCorrectAnswer();
    let isCorrect= userAnswer===calculatedAnswer[0];
    if (isCorrect){
        alert('Hey you got it right:D')
        incrementScore();
    } else{
        alert(`Aww..you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }
};

runGame(calculatedAnswer[1]);

function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === '+'){
        return [operand1 + operand2, 'addition'];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborted`
    }
};

/**
 * Gets current score and increments
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText= ++oldScore;
};

/**
 * Gets current and increments
 */

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText= ++oldScore;
};
function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
};
function displaySubtractQuestion(){};
function displayMultiplyQuestion(){};
function displayDivisionQuestion(){};