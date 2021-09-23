var userInputNum = document.querySelector("#userInputNum");
var btnCheck = document.querySelector(".check");
var outputMessage = document.querySelector(".result");

var flag = 1;

btnCheck.addEventListener("click", function clickHandler() {

    console.log( typeof userInputNum.value);
    console.log(Number (userInputNum.value));

    outputMessage.innerText = outputResult(isPrimeNum(userInputNum.value));
    flag = 1;
});

function isPrimeNum(inputNum) {
    if (inputNum > 1) {
        for (var i = 2; i < inputNum; i++) {
            if (inputNum % i === 0) {
                flag = 2;
            }
        }
    } else if (inputNum === "1" || inputNum === "0") {
        flag = 3;
    } else {
        flag = 0;
    }
    return flag;
}


function outputResult(result) {
    switch (result) {
        case 1: {
            return (userInputNum.value + " is prime number");
        };
    case 2: {
        return (userInputNum.value + " is not a prime number");
    };
    case 3: {
        return (userInputNum.value + " is neither prime nor composite number");
    };
    default: {
        return ("please enter a valid input");
    }

    }
}