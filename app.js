let randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber)
const userInput = document.getElementById("user-input");
const checkButtton = document.getElementById("checkButton");
const remarks = document.getElementById("remarks");
const restartButton = document.getElementById("restartButton");

checkButtton.onclick = () => {
    const guess = Number(userInput.value);
    if(guess === randomNumber){
        remarks.textContent = "Congratulations you guessed it right🏆"
        remarks.style.color = "green";
        checkButtton.Disabled = true;
        restartButton.style.display = "inline"
    }
    else if(guess < 1 || guess > 100){
        remarks.textContent = "please enter a number between 1 and 100"
        remarks.style.color = "red"
    }
    else if(guess < randomNumber){
       remarks.textContent = "Too low! try again."
       remarks.style.color = "orange";
    }
    else{
        remarks.textContent = "Too high! try again";
        remarks.style.color = "orange";
    }
    userInput.value = "";
    userInput.focus();
}
restartButton.onclick = () => {
    randomNumber = Math.floor(Math.random()*100)+1;
    checkButtton.Disabled = false;
    userInput.focus();
    remarks.style.display = "none";
    restartButton.style.display = "none";
}