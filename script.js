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
    } else if (answerX === '2') {
        questionXOptionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
    }
}

*/


function interview() {
    let answer1 = prompt('Q: You are currently interviewing for a job at Dunder Mifflin Paper Company. You decide that the best way to impress your potential future boss, Michael Scott, is by using what?\r\nA1: Personality mirroring, name repetition and never breaking off a handshake\r\nA2: Being nice and polite, sometimes laughing at his jokes');

    if (answer1 === '1') {
        handOverResume(); 
    } else if (answer1 === '2') {
        offeredTempJob();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        question1();
    }
}

function handOverResume() {
    let answer2 = prompt('Q: Michael is very impressed with all of that personality mirroring and name repetition. When you hand him your resume, he says "wow that is very long". To seal the deal in the interview, what do you respond to that statement?\r\nA1: Yes it is! I have worked at many places before.\r\nA2: Thats what she said!');

    if (answer2 === '1') {
        offeredTempJob();
    } else if (answer2 === '2') {
        question3Option1();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        handOverResume();
    }
}

function offeredTempJob() {
    let answer2 = prompt('Q: Michael is not impressed with your sense of humor. But he does like you enough to offer you a temp-job, which is maybe not what you hoped for... Do you still accept the job?\r\nA1: Yes, of course. This is the opportunity of a lifetime and might lead to something better eventually.\r\nA2: No, you hoped for something better and part ways with Michael.');

    if (answer2 === '1') {
        takeTheTempJob();
    } else if (answer2 === '2') {
        doNotTakeTheJob();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        offeredTempJob();
    }
}

function speakToJimOrDwight() {
    let answerX = prompt('Q: Michael immidiately bursts out laughing and hires you as a salesman. You get placed at a desk clump with two other salesmen, Jim and Dwight. Who do you speak to first?\r\nA1: Jim\r\nA2: Dwight');

    if (answerX === '1') {
        speakToJim();
    } else if (answerX === '2') {
        speakToDwight();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        speakToJimOrDwight();
    }
}

function takeTheTempJob() {
    let answerX = prompt('Q: ...\r\nA1: ...\r\nA2: ...');

    if (answerX === '1') {
        questionXOptionX();
    } else if (answerX === '2') {
        questionXOptionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        question3Option2();
    }
}

function doNotTakeTheJob() {
    let answerX = prompt('Q: ...\r\nA1: ...\r\nA2: ...');

    if (answerX === '1') {
        questionXOptionX();
    } else if (answerX === '2') {
        questionXOptionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        question3Option3();
    }
}

function question3Option4() {
    let answerX = prompt('Q: ...\r\nA1: ...\r\nA2: ...');

    if (answerX === '1') {
        questionXOptionX();
    } else if (answerX === '2') {
        questionXOptionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        question3Option4();
    }
}


function startGame() {
    const startAlert = alert('Welcome to The Office "Second Life"! You will be given a set of questions with two different answers, choose answer 1 by simply typing 1 into the text field, and type 2 for answer number 2. Press the button to start')
}

// startGame();
