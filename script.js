// 10 scenarion
// Prompt används för att be användaren om kommandon
// Alert används för ge information till användaren om världen
// ?? skapa 20 scenarion, varje scen får 2 scenarion, 'positive' och 'negative'

/*

Basic Game Structure:

function nameOfQuestionX() {
    const answer = prompt('Q: ...\r\nA1: ...\r\nA2: ...');               // Q = question, A1 = answer 1, A2 = answer 2, \r\n = break row

    if (answer === '1') {
        nameOfQuestionY();                                               // if the user chose answer number 1, it sends them to another question based on their answer
    } else if (answer === '2') {
        nameOfQuestionZ();                                               // if the user chose answer number 2, it sends them to another question based on their answer
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       // if the user didn't type anything or an invalid character/number, display this message
        nameOfQuestionX();                                               // sends user back to the question
    }
}

*/


function interview() {
    const answer = prompt('Q: You are currently interviewing for a job at Dunder Mifflin Paper Company. You decide that the best way to impress your potential future boss, Michael Scott, is by using what?\r\nA1: Personality mirroring, name repetition and never breaking off a handshake\r\nA2: Being nice and polite, sometimes laughing at his jokes');

    if (answer === '1') {
        handOverResume(); 
    } else if (answer === '2') {
        offeredTempJob();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        question1();
    }
}

function handOverResume() {
    const answer = prompt('Q: Michael is very impressed with all of that personality mirroring and name repetition. When you hand him your resume, he says "wow that is very long". To seal the deal in the interview, what do you respond to that statement?\r\nA1: Yes it is! I have worked at many places before.\r\nA2: Thats what she said!');

    if (answer === '1') {
        offeredTempJob();
    } else if (answer === '2') {
        speakToJimOrDwight();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        handOverResume();
    }
}

function offeredTempJob() {
    const answer = prompt('Q: Michael is not impressed with your sense of humor. But he does like you enough to offer you a temp-job, which is maybe not what you hoped for... Do you still accept the job?\r\nA1: Yes, of course\r\nA2: No, you hoped for something better and part ways with Michael.');

    if (answer === '1') {
        takeTheTempJob();
    } else if (answer === '2') {
        doNotTakeTheTempJob();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        offeredTempJob();
    }
}

function speakToJimOrDwight() {
    const answer = prompt('Q: Michael immediately bursts out laughing and hires you as a salesman. You get placed at a desk clump with two other salesmen, Jim and Dwight. Who do you speak to first?\r\nA1: Jim\r\nA2: Dwight');

    if (answer === '1') {
        speakToJim();
    } else if (answer === '2') {
        speakToDwight();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        speakToJimOrDwight();
    }
}

function takeTheTempJob() {
    const answerX = prompt('Q: It turns out that you have made quite a good impression on Michael after all! He invites you along with 4 other salesmen to come with him to an asian buffet restaurant for lunch. Do you accept the invitation?\r\nA1: Yes\r\nA2: No');

    if (answerX === '1') {
        goToLunch();
    } else if (answerX === '2') {
        declineLunchInvitation();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        takeTheTempJob();
    }
}

function doNotTakeTheTempJob() {
    const answerX = alert('You obviously do not like "The Office". I am so sorry, this game is not for you.\r\nGAME OVER!');
}

function speakToJim() {
    const answerX = prompt('Q: Jim welcomes you to the desk clump and asks you if you want to pull a prank on Dwight, what is your response?\r\nA1: Yes\r\nA2: No');

    if (answerX === '1') {
        prankDwight();
    } else if (answerX === '2') {
        doNotPrankDwight();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        speakToJim();
    }
}

function speakToDwight() {
    const answerX = prompt('Q: Dwight offers to take you on a sales-call, so you can get your foot in the door with a client, do you go with him?\r\nA1: Yes\r\nA2: No');

    if (answerX === '1') {
        questionXOptionX();
    } else if (answerX === '2') {
        questionXOptionY();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        question3Option4();
    }
}

function goToLunch() {
    const answer = prompt('Q: Michael is delighted that you are all coming with him to lunch. Michael offers to drive you there, he has actually saved money by putting diesel in the tank this time. Do you go with him?\r\nA1: Yes, spend as much time as possible with the boss!\r\nA2: No, you drive yourself');               

    if (answer === '1') {
        goWithMichael();                                               
    } else if (answer === '2') {
        driveYourself();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        goToLunch();                                               
    }
}

function declineLunchInvitation() {
    const answer = prompt('Q: You cannot just say no to an invite like that, there has to be reason for your decision. What is your reason for declining the lunch invite?\r\nA1: "I am so sorry, I do not feel like going out to lunch today"\r\nA2: I am not feeling so well. I have got a ton of work to do here. MSG allergy. Peanut allergy. I just ate there last night.');               

    if (answer === '1') {
        fired();                                               
    } else if (answer === '2') {
        acceptApology();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        declineLunchInvitation();                                               
    }
}

function prankDwight() {
    const answer = prompt('Q: Jim is currently working a prank, to put a couple of keys on Dwights giant keyring every day until it is so heavy that his pants fall off. You have to distract Dwight so Jim can put the keys on. What do you start talking about to distract him?\r\nA1: Bears, beets and battlestar galactica\r\nA2: Ask for a list of his leads so you can get some clients');               

    if (answer === '1') {
        nameOfQuestionY();                                               
    } else if (answer === '2') {
        nameOfQuestionZ();     //hire trevor to murder you                                          
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        nameOfQuestionX();                                               
    }
}

function nameOfQuestionX() {
    const answer = prompt('Q: ...\r\nA1: ...\r\nA2: ...');               

    if (answer === '1') {
        nameOfQuestionY();                                               
    } else if (answer === '2') {
        nameOfQuestionZ();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        nameOfQuestionX();                                               
    }
}

function nameOfQuestionX() {
    const answer = prompt('Q: ...\r\nA1: ...\r\nA2: ...');               

    if (answer === '1') {
        nameOfQuestionY();                                               
    } else if (answer === '2') {
        nameOfQuestionZ();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        nameOfQuestionX();                                               
    }
}

function nameOfQuestionX() {
    const answer = prompt('Q: ...\r\nA1: ...\r\nA2: ...');               

    if (answer === '1') {
        nameOfQuestionY();                                               
    } else if (answer === '2') {
        nameOfQuestionZ();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        nameOfQuestionX();                                               
    }
}

function nameOfQuestionX() {
    const answer = prompt('Q: ...\r\nA1: ...\r\nA2: ...');               

    if (answer === '1') {
        nameOfQuestionY();                                               
    } else if (answer === '2') {
        nameOfQuestionZ();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        nameOfQuestionX();                                               
    }
}

function nameOfQuestionX() {
    const answer = prompt('Q: ...\r\nA1: ...\r\nA2: ...');               

    if (answer === '1') {
        nameOfQuestionY();                                               
    } else if (answer === '2') {
        nameOfQuestionZ();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        nameOfQuestionX();                                               
    }
}






function finishGame() {
    const finishAlert = alert('You clearly know how to live "The Office" life, congrats! You have now completed the game and you can give yourself a pat on the back, great work!');               
}

function gameOver() {
    const gameOverAlert = alert('')
}





function startGame() {
    const startAlert = alert('Welcome to The Office "Second Life"! You will be given a set of questions with two different answers, choose answer 1 by simply typing 1 into the text field, and type 2 for answer number 2. Press the button to start')
}

// startGame();
