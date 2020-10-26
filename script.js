// 10 scenarion
// Prompt används för att be användaren om kommandon
// Alert används för ge information till användaren om världen
// ?? skapa 20 scenarion, varje scen får 2 scenarion, 'positive' och 'negative'


function question1() {
    // fråga om alt 1 eller 2
    let question1 = prompt('Q: Your spanish teacher Hans asks if you are attending Spanish class later. What do you answer him?\r\nA1: hans\r\nA2: bersås');

    if (question1 === '1') {
        console.log('worked');
    } else if (question1 === '2') {
        console.log('worked again')
    } else {
        console.log('didnt work');
    }
}

// function question2() {
    
// }

/* ÖVNING 2

function mathButtonPressed() {
    //be om värden
    let number = prompt('enter a number');
    const operator = prompt('enter an operator please and good morning (+ or - or * or /)');
    let secondNumber = prompt('enter another number');
    let sum = 0;

    //konverera till nummer
    number = Number(number);
    secondNumber = Number(secondNumber);

    //gör uträkningen
    if (operator === '+') {
        sum = number + secondNumber
    } else if (operator === '-') {
        sum = number - secondNumber
    } else if (operator === '*') {
        sum = number * secondNumber
    } else if (operator === '/') {
        sum = number / secondNumber
    } else {
        alert('Not an operator, sorry man')
    }

    //presentera uträkningen
    alert('The math machine says that equals: ' + sum);
}

*/