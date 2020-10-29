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
        interview();
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
    alert('You obviously do not like "The Office". I am so sorry, this game is not for you.\r\nGAME OVER!');
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
        alert('It turns out that there is no client, and Dwight drives out to his beet farm and abandons you in on one of his beet fields. You are lost and the night comes, where you eventually freeze to death. Dwight saw a lot of potential in you and decided you would be too much competition for him');
        gameOver();
    } else if (answerX === '2') {
        alert('Great choice! You never know what Dwight is up to, and you do not need his help anyways. You are a strong independent man and will go on to have a great career in paper selling.');
        finishGame();
    } else {
        alert('Only type 1 or 2 into the text field, try again!');
        speakToDwight();
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
    const answer = prompt('Q: You cannot just say no to an invite like that, there has to be reason for your decision. What is your reason for declining the lunch invite?\r\nA1: "I am so sorry, I do not feel like going out to lunch today"\r\nA2: "I am not feeling so well. I have got a ton of work to do here. MSG allergy. Peanut allergy. I just ate there last night"');               

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
        alert('It just so happens that those three things are Dwights favorite things in life! You end up charming him and also helping Jim with his prank. Eventually Dwights pants fall off but he never suspects that you helped Jim. You three form a strong alliance and you love life at Dunder Mifflin!');                                               
        finishGame();
    } else if (answer === '2') {
        alert('Dwight gets very angry and worries that the pact you have made with Jim is eventually going to be his demise. He hires his friend Trevor to kill you');
        gameOver();                                         
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        prankDwight();                                               
    }
}

function doNotPrankDwight() {
    const answer = prompt('Q: By not pranking Dwight you have shown Jim that you are lame, and not to be trusted. The question now is, do you disclose Jims prank to Dwight and form an alliance with him, or just continue to live your life as it is?\r\nA1: Tell Dwight about Jims prank\r\nA2: Do not say anything about the prank and pretend like nothing has happened');               

    if (answer === '1') {
        alert('Dwight very much appreciates the honesty and Jim eventually forgives you. You are now very happy at Dunder Mifflin and continue to work here for many, many years')
        finishGame();                                               
    } else if (answer === '2') {
        alert('After Dwights pants fall off, he finds out that you knew about the prank the entire time, and you did not tell him about it. He decides to take his revenge and hassles you all winter by throwing snow balls at you. It is too much to handle and you have to quit you job');
        gameOver();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        doNotPrankDwight();                                               
    }
}

function fired() {
    const answer = prompt('Q: Michael is very disappointed with you. And it turns out he needs to let one of his employees go to save the company money. You have now made the top of the list. He says that you are fired. What do you respond?\r\nA1: "Alright, I understand. I will get back on my feet. Bye!"\r\nA2: Suggest that he fires Devon instead since you are much better at your work than he is');               

    if (answer === '1') {
        gameOver();                                               
    } else if (answer === '2') {
        alert('Michael is convinced to fire Devon instead. This means you can continue to work at Dunder Mifflin for many more years!');
        finishGame();                                               
    } else {
        alert('Only type 1 or 2 into the text field, try again!');       
        fired();                                               
    }
}

function acceptApology() {
    alert('Michael accepts your reasons for not wanting to go to lunch with him. You continue to do great work at Dunder Mifflin where you end up working for many years to come!')
    finishGame();
}

function goWithMichael() {
    alert('You go with Michael and have a lovely time at Benihanas, an asian buffet restaurant. You make a great impression on Michael and can continue to work along side him at Dunder Mifflin for many years!');
    finishGame();
}

function driveYourself() {
    alert('Deciding to drive yourself was a huge mistake. You end up hitting a Bear with your car and sadly, you pass away, and so does the bear.');
    gameOver();
}







/** Finishes the game when you made the correct choices */
function finishGame() {
    const finishAlert = alert('You clearly know how to live "The Office" life, congrats! You have now completed the game and you can give yourself a pat on the back, great work!');               
}

/** Finishes the game when you made the wrong choices */
function gameOver() {
    const gameOverAlert = alert('Unfortunately the game is now over. In life, you have to make the correct decisions to live on, and you have not. GAME OVER!')
}




/** Gives the instructions of how the game is played before the game starts */
function startGame() {
    alert('Welcome to The Office "Second Life"! You will be given a set of questions with two different answers, choose answer 1 by simply typing 1 into the text field, and type 2 for answer number 2. Press the button to start')
}

startGame();
