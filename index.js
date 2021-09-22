var userInputYear = document.querySelector("#userInputYear");
var btnCheck = document.querySelector(".check");
var outputMessage = document.querySelector(".result");

var isPrime = true;

function isPrimeNum(inputNum)
{
	if(inputNum > 1)
	{
		for(var i = 2; i < inputNum; i++)
		{
			if(inputNum % i == 0)
			{
				isPrime = false;
				break;
			}
		}

		outputResult(isPrime);
	}
	else if(inputNum == 1 || inputNum == 0)
	{
		console.log("neither prime nor composite");
	}
	else {
		console.log("enter a valid input");
	}
}