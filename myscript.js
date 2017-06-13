
// ALL USED IMAGES ARE PUBLIC AND FREE


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
var buttonClear = document.getElementById("buttonClear");
buttonClear.onclick = function(objButton) {
	numberScript = "";
	operatorOn = false;
	currentOperator = "";
	updateScreen();
};

var buttonPercentage = document.getElementById("buttonPercentage");
buttonPercentage.onclick = function(objButton) {
	numberScript = (parseFloat(numberScript) / 100).toString();
	updateScreen(); 
}

var buttonSign = document.getElementById("buttonSign");
buttonSign.onclick = function(objButton) {
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

var buttonAdd = document.getElementById("buttonAdd");
buttonAdd.onclick = function(objButton) {
	operatorOn = true;
	currentOperator = "add";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	//console.log(firstNumber);
	numberScript = "";
	updateScreen();
};

var buttonSub = document.getElementById("buttonSub");
buttonSub.onclick = function(objButton) {
	operatorOn = true;
	currentOperator = "sub";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	//console.log(firstNumber);
	numberScript = "";
	updateScreen();
};

var buttonMul = document.getElementById("buttonMul");
buttonMul.onclick = function(objButton) {
	operatorOn = true;
	currentOperator = "mul"; 
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	//console.log(firstNumber);
	numberScript = "";
	updateScreen();
};

var buttonDiv = document.getElementById("buttonDiv");
buttonDiv.onclick = function(objButton) {
	operatorOn = true;
	currentOperator = "div";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	numberScript = "";
	updateScreen();
};

var buttonEqual = document.getElementById("buttonEqual");
buttonEqual.onclick = function(objButton) {
	if(!operatorOn) {
		return;
	}
	else {
		motivationalQuotes();
		//console.log("the current operator is: " + currentOperator);
		//console.log("the second number is: " + secondNumber);
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
};

function motivationalQuotes() {
	globalEqualCount++;
	if (globalEqualCount % 5 == 0) {
		motivationalPicture();
	}
	else {
		$("#motivation").css("width", "400px");
		$("#motivation").css("height", "100px");
		$("#motivationDog").attr("src", "");
		$("#motivationDog").remove();
		var quoteList = ["Wow you rock", "WE THE BEST -Dj Khaled", "incredible.", 
		"I love you", "don't give up!", "gold star!!", "hey ur amazing", "DANG ur cool",
		"you amaze me", "einstein loves you", "do it for your dog"];
		var rand = Math.floor(Math.random() * quoteList.length);
		var quote = quoteList[rand];
		document.getElementById("caption").innerHTML = "</br>" + quote;
	}
}

function motivationalPicture() {
	var motivationBox = document.getElementById("motivation");
	var srcList = ["https://cdn.pixabay.com/photo/2016/02/26/16/32/dog-1224267__340.jpg",
	"https://cdn.pixabay.com/photo/2016/05/02/14/13/dog-1367297__340.jpg",
	"https://cdn.pixabay.com/photo/2015/11/03/12/58/dog-1020790__340.jpg",
	"https://cdn.pixabay.com/photo/2014/02/25/11/25/papillon-274183__340.jpg",
	"https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374__340.jpg",
	"https://cdn.pixabay.com/photo/2016/04/05/21/42/dog-1310545__340.jpg"];

	var rand = Math.floor(Math.random() * srcList.length);
	$("#motivation").prepend('<img id="motivationDog" style="height:300px; width:450px;" src=""/>');
	$("#motivationDog").attr("src", srcList[rand]);
	$("#motivation").css("width", "500px");
	$("#motivation").css("height", "400px");
}
