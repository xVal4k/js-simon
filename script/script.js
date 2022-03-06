/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const documentRandomNumbers = document.querySelector(".numeri_random");
const documentMsgRandomNumbers = document.querySelector(".messaggio_numeri_random");
const documentResultMessage = document.querySelector(".result_message");
const documentCountDown = document.querySelector(".count_down");
const documentUserInput = document.querySelector(".user_input_numbers");
const documentStartingMsg = document.querySelector(".starting_message");
const userNumber1 = document.querySelector(".number1");
const userNumber2 = document.querySelector(".number2");
const userNumber3 = document.querySelector(".number3");
const userNumber4 = document.querySelector(".number4");
const userNumber5 = document.querySelector(".number5");
const numbersGuessed = document.querySelector(".numbers_guessed");
const btnCheck = document.getElementById("btn_check");


// Take value from user inputs and check it with the random numbers
btnCheck.addEventListener("click", function(){
    let userNumbers = [];
    const userNumberValue1 = parseInt(userNumber1.value);
    const userNumberValue2 = parseInt(userNumber2.value);
    const userNumberValue3 = parseInt(userNumber3.value);
    const userNumberValue4 = parseInt(userNumber4.value);
    const userNumberValue5 = parseInt(userNumber5.value);


    userNumbers.push(userNumberValue1, userNumberValue2, userNumberValue3, userNumberValue4, userNumberValue5);
    documentResultMessage.style.display = "flex";

    const arrNumbGuessed = userNumbers.filter(n => arrRandomNumbers.includes(n));
    
    numbersGuessed.innerHTML = arrNumbGuessed;
});

// Create random not doubled numbers
const minValue = 1;
const maxValue = 1000;
const arrRandomNumbers = [];


for (let i = 0; i < 5; i++) {
    let randomNumber = generateRandomNumber(minValue, maxValue);
    while (arrRandomNumbers.includes(randomNumber)) {
        randomNumber = generateRandomNumber(minValue, maxValue);
    }
    arrRandomNumbers.push(randomNumber);  
}

// Add random numbers to the html file
documentRandomNumbers.innerHTML = arrRandomNumbers;   
documentMsgRandomNumbers.innerHTML = arrRandomNumbers;


/* FUNCTIONS */

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


// Countdown
let secondsLeft = 31;
const countDown = setInterval(timer, 1000);   

function timer() {
    if (secondsLeft == 1) {
        clearInterval(timer);      
        documentCountDown.style.display = "none";
        documentStartingMsg.style.display = "none";
        documentUserInput.style.display = "flex";
    } else {
        secondsLeft--;
        documentCountDown.innerHTML = secondsLeft;
    }

}