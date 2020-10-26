// 10 scenarion
// Prompt används för att be användaren om kommandon
// Alert används för ge information till användaren om världen
// ?? skapa 20 scenarion, varje scen får 2 scenarion, 'positive' och 'negative'

/*

exempelfråga med svar:

function questionX() {
    let answerX = prompt('Q: ...\r\nA1: ...\r\nA2: ...');

    if (answerX === '1') {
        questionXOptionX();
    } else if (answerX === '2'); {
        questionXOptionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
    }
}

*/


function question1() {
    // fråga om alt 1 eller 2
    let answer1 = prompt('Q: You are currently interviewing for a job at Dunder Mifflin Paper Company. You decide that the best way to impress your potential future boss, Michael Scott, is by using what?\r\nA1: Personality mirroring, name repetition and never breaking off a handshake\r\nA2: Being nice and polite, sometimes laughing at his jokes');

    if (answer1 === '1') {
        question2Option1(); 
    } else if (answer1 === '2') {
        question2Option2();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
    }
}

function question2Option1() {
    let answer2 = prompt('Q: Michael is very impressed with all of that personality mirroring and name repetition. When you hand him your resume, he says "wow that is very long". To seal the deal in the interview, what do you respond to that statement?\r\nA1: Yes it is! I have worked at many places before.\r\nA2: Thats what she said!');

    if (answer2 === '1') {
        questionX();
    } else if (answer2 === '2') {
        questionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
    }
}

function question2Option2() {
    let answer2 = prompt('Q: Michael is not impressed with your sense of humor. But he does like you enough to offer you a temp-job, which is maybe not what you hoped for... Do you still accept the job?\r\nA1: Yes, of course. This is the opportunity of a lifetime and might lead to something better eventually.\r\nA2: No, you hoped for something better and part ways with Michael.');

    if (answer2 === '1') {
        questionX();
    } else if (answer2 === '2') {
        questionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
    }
}

function startGame() {
    const startAlert = alert('Welcome to The Office "Second Life"! You will be given a set of questions with two different answers, choose answer 1 by simply typing 1 into the text field, and type 2 for answer number 2. Press the button to start')
}

// startGame();
