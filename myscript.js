var globalCurrentValue = 0;
var numberScript = "";
var operatorOn = false;
var currentOperator = "";
var firstNumber = 0;
var secondNumber = 0;
var globalEqualCount = 0;

updateScreen();

function updateScreen() {
	if (numberScript == "") {
		document.getElementById('screen').innerHTML = 0;
	}
	else {
		document.getElementById('screen').innerHTML = numberScript;
	}
}

function getValue(objButton) {
	
	if (!operatorOn){
		if (numberScript == "" && objButton.value == 0) {
			numberScript = "";
		}
		else {
			numberScript += objButton.value;
		}

	updateScreen();
	}
	else {

		numberScript += objButton.value;
		secondNumber = parseFloat(numberScript);
		updateScreen();
	}
}

function clearScript(objButton) {
	numberScript = "";
	operatorOn = false;
	currentOperator = "";
	updateScreen();
}

function percentage(objButton) {
	numberScript = (parseFloat(numberScript) / 100).toString();
	updateScreen(); 
}

function changeSign(objButton) {
	if (numberScript == "") {
		return;
	}
	//check to see if current value is pos or neg
	else {
		testNum = parseFloat(numberScript);
		if (testNum < 0) {
			numberScript = numberScript.substring(1);
			updateScreen();
		}
		else if(testNum > 0) {
			numberScript = "-" + numberScript;
			updateScreen();
		}
	}
}

function add(objButton) {
	if (currentOperator == "add") {
		updateScreen();
		return;
	}
	operatorOn = true;
	currentOperator = "add";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	console.log(firstNumber);
	numberScript = "";
	updateScreen();
}

function sub(objButton) {
	if (currentOperator == "sub") {
		updateScreen();
		return;
	}
	operatorOn = true;
	currentOperator = "sub";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	console.log(firstNumber);
	numberScript = "";
	updateScreen();
}

function mul(objButton) {
	if (currentOperator == "mul") {
		updateScreen();
		return;
	}
	operatorOn = true;
	currentOperator = "mul"; 
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	console.log(firstNumber);
	numberScript = "";
	updateScreen();
}

function div(objButton) {
	if (currentOperator == "div") {
		updateScreen();
		return;
	}
	operatorOn = true;
	currentOperator = "div";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	numberScript = "";
	updateScreen();
}

function finishExpression(objButton) {
	if(!operatorOn) {
		return;
	}
	else {
		motivationalQuotes();
		console.log("the current operator is: " + currentOperator);
		console.log("the second number is: " + secondNumber);
		if (currentOperator == "add") {
			var ans = firstNumber + secondNumber;
			firstNumber = ans;
			numberScript = ans.toString();
			updateScreen();
		}
		else if (currentOperator == "sub") {
			var ans = firstNumber - secondNumber;
			firstNumber = ans;
			numberScript = ans.toString();
			updateScreen();
		}
		else if (currentOperator == "mul") {
			var ans = firstNumber * secondNumber;
			console.log(firstNumber * secondNumber);
			firstNumber = ans;
			numberScript = ans.toString();
			updateScreen();
		}
		else if (currentOperator == "div") {
			var ans = firstNumber / secondNumber;
			firstNumber = ans;
			numberScript = ans.toString();
			updateScreen();
		}
	}
}

function motivationalQuotes() {
	globalEqualCount++;
	if (globalEqualCount % 5 == 0) {
		motivationalPicture();
	}
	else {
		var quoteList = ["Wow you rock", "WE THE BEST -Dj Khaled", "incredible.", 
		"I love you", "don't give up!", "gold star!!", "hey ur amazing", "DANG ur cool"];
		var rand = Math.floor(Math.random() * quoteList.length);
		var quote = quoteList[rand];
		document.getElementById("motivation").innerHTML = quote;
	}
}