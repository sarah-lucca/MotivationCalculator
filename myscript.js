var numberScript = "";
var operatorOn = false;
var currentOperator = "";
var firstNumber = 0;
var secondNumber = 0;
var globalEqualCount = 0;
var finishedExpression = false;

updateScreen();

function updateScreen() {
	console.log("num screen is: " + numberScript);
	if (numberScript == "") {
		document.getElementById('screen').innerHTML = 0;
	}
	else {
		document.getElementById('screen').innerHTML = numberScript;
	}
}

//FOLLOWING FUNCTIONS ARE FOR CLICKING ON BUTTONS
function getValue(objButton) {
	
	if (!operatorOn) { 
		if (numberScript == "" && objButton.value == 0) {
			numberScript = "";
		}
		 else if (finishedExpression == true) {
		 	console.log("finishedExpression");
		 	numberScript = objButton.value;
		 	finishedExpression = false;
		 	firstNumber = objButton.value;
		 	updateScreen();
		 }
		else {
			numberScript += objButton.value;
		}

		updateScreen();
	}
	else {
		 console.log("OPERATOR IS ON!");
		 // if (finishedExpression == true) {
		 // 	console.log("expression is finished")
		 // 	numberScript = objButton.value;
		 // 	finishedExpression = false;
		 // 	firstNumber = objButton.value;
		 // 	updateScreen();
		 // }
		 // else {
		 	// continuing calculation
			numberScript += objButton.value;
			secondNumber = parseFloat(numberScript);
			updateScreen();
		// }
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

};

var buttonSub = document.getElementById("buttonSub");
buttonSub.onclick = function(objButton) {
	operatorOn = true;
	currentOperator = "sub";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
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
	finishedExpression = true;
	if(!operatorOn) {
		return;
	}
	else {
		motivationalQuotes();
		console.log("firstnumer is :" + firstNumber)
		console.log("secondNumber is :" + secondNumber)
		console.log("currentOperator is :" + currentOperator)
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
		operatorOn = false
	}
};

//FOLLOWING FUNCTIONS ARE FOR KEYSTROKES

function getValueFromKey(keyVal) {
	if (!operatorOn) { 
		if (numberScript == "" && keyVal == 0) {
			numberScript = "";
		}
		 else if (finishedExpression == true) {
		 	console.log("finishedExpression");
		 	numberScript = keyVal;
		 	finishedExpression = false;
		 	firstNumber = keyVal;
		 	updateScreen();
		 }
		else {
			numberScript += keyVal;
		}

		updateScreen();
	}
	else {
		 console.log("OPERATOR IS ON!");
		 // if (finishedExpression == true) {
		 // 	console.log("expression is finished")
		 // 	numberScript = objButton.value;
		 // 	finishedExpression = false;
		 // 	firstNumber = objButton.value;
		 // 	updateScreen();
		 // }
		 // else {
		 	// continuing calculation
			numberScript += keyVal;
			secondNumber = parseFloat(numberScript);
			updateScreen();
		// }
	}
};

function keyClear(){
	numberScript = "";
	operatorOn = false;
	currentOperator = "";
	updateScreen();
};

function keyPercentage(){
	numberScript = (parseFloat(numberScript) / 100).toString();
	updateScreen();
};

function keySign(){
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
};

function keyAdd(){
	operatorOn = true;
	currentOperator = "add";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	numberScript = "";
	updateScreen();
};

function keySub(){
	operatorOn = true;
	currentOperator = "sub";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	numberScript = "";
	updateScreen();
};

function keyMul(){
	operatorOn = true;
	currentOperator = "mul"; 
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	numberScript = "";
	updateScreen();
};

function keyDiv(){
	operatorOn = true;
	currentOperator = "div";
	if (numberScript != "") {
		firstNumber = parseFloat(numberScript);
	}
	numberScript = "";
	updateScreen();
};

function keyEqual(){
	finishedExpression = true;
	if(!operatorOn) {
		return;
	}
	else {
		motivationalQuotes();
		console.log("firstnumer is :" + firstNumber)
		console.log("secondNumber is :" + secondNumber)
		console.log("currentOperator is :" + currentOperator)
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
		operatorOn = false
	}
};

$(document).keydown(function(e) {
	console.log(e.which);
	var keyVal = "";
	//7
	if(e.which == 55 || e.which == 103 || e.which == 36) {
		keyVal = "7";
		getValueFromKey(keyVal);
	}
	//8
	if(e.which == 56 || e.which == 104 || e.which == 38) {
		keyVal = "8";
		getValueFromKey(keyVal);
	}
	//9
	if(e.which == 57 || e.which == 105 || e.which == 33) {
		keyVal = "9";
		getValueFromKey(keyVal);
	}
	//4
	if(e.which == 52 || e.which == 100 || e.which ==  37) {
		keyVal = "4";
		getValueFromKey(keyVal);
	}
	//5
	if(e.which == 53 || e.which == 101 || e.which == 12) {
		keyVal = "5";
		getValueFromKey(keyVal);
	}
	//6
	if(e.which == 54 || e.which == 102 || e.which == 39) {
		keyVal = "6";
		getValueFromKey(keyVal);
	}
	//1
	if(e.which == 49 || e.which == 97 || e.which == 35) {
		keyVal = "1";
		getValueFromKey(keyVal);
	}
	//2
	if(e.which == 50 || e.which == 98 || e.which == 40) {
		keyVal = "2";
		getValueFromKey(keyVal);
	}
	//3
	if(e.which == 51 || e.which == 99 || e.which == 34) {
		keyVal = "3";
		getValueFromKey(keyVal);
	}
	//0
	if(e.which == 48 || e.which == 96 || e.which == 45) {
		keyVal = "0";
		getValueFromKey(keyVal);
	}
	//.
	if(e.which == 190 || e.which == 110 || e.which == 46) {
		keyVal = ".";
		getValueFromKey(keyVal);
	}
	//+
	if(e.which == 107) {
		keyAdd();
	}
	//-
	if(e.which == 109) {
		keySub();
	}
	//*
	if(e.which == 106) {
		keyMul();
	}
	//÷
	if(e.which == 111) {
		keyDiv();
	}
	//=
	if(e.which == 13 || e.which == 187) {
		keyEqual();
	}
});

// $(document).keydown(function(e) {
// 	//7
// 	if(e.which == 55 || e.which == 103) {
// 		if (!operatorOn) {
// 			numberScript += "7";
// 			updateScreen();
// 	}
// 		else {

// 			numberScript += "7";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();		
// 		}
// 	}
// 	//8
// 	if(e.which == 56 || e.which == 104) {
// 		if (!operatorOn) {
// 			numberScript += "8";
// 			updateScreen();
// 	}

// 		else {
// 			numberScript += "8";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
// 		}
	
// 	}
// 	//9
// 	if(e.which == 57 || e.which == 105) {
// 		if (!operatorOn) {
// 			numberScript += "9";
// 			updateScreen();
// 	}
// 		else {

// 			numberScript += "9";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
			
// 		}
// 	}
// 	//4
// 	if(e.which == 52 || e.which == 100) {
// 		if (!operatorOn) {
// 			numberScript += "4";
// 			updateScreen();
// 	}

// 		else {
// 			numberScript += "4";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
			
// 		}
// 	}
// 	//5
// 	if(e.which == 53 || e.which == 101) {
// 		if (!operatorOn) {
// 			numberScript += "5";
// 			updateScreen();
// 		}
// 		else {

// 			numberScript += "5";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
			
// 		}
// 	}
// 	//6
// 	if(e.which == 54 || e.which == 102) {
// 		if (!operatorOn) {
// 			numberScript += "6";
// 			updateScreen();
// }

// 		else {
// 			numberScript += "6";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
// 		}
		
// 	}
// 	//1
// 	if(e.which == 49 || e.which == 97) {
// 		if (!operatorOn) {
// 			numberScript += "1";
// 			updateScreen();
// 	}
// 		else {
// 			numberScript += "1";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
// 			}
		
// 	}
// 	//2
// 	if(e.which == 50 || e.which == 98) {
// 		if (!operatorOn) {
// 			numberScript += "2";
// 			updateScreen();
// 	}

// 		else {
// 			numberScript += "2";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
// 			}
		
// 	}
// 	//3
// 	if(e.which == 51 || e.which == 99) {
// 		if (!operatorOn) {
// 			numberScript += "3";
// 			updateScreen();

// 	}
// 		else {
// 			numberScript += "3";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
// 		}
		
// 	}
// 	//0
// 	if(e.which == 48 || e.which == 96) {
// 		if (!operatorOn) {
// 			if (numberScript == "") 
// 			numberScript = "";		
		
// 	}
		
// 		else {
// 			numberScript += "0";
// 			secondNumber = parseFloat(numberScript);
// 			updateScreen();
			
// 		}
// 	}
// 	//.
// 	if(e.which == 190 || e.which == 110) {
// 		if (!operatorOn) {
// 			numberScript += ".";
// 		//	console.log(numberScript);
// 			updateScreen();
// 		}
// 		else {
// 		numberScript += ".";
// 		secondNumber = parseFloat(numberScript);
// 		updateScreen();
// 		}
// 	}
// 	//+
// 	if(e.which == 107) {
// 		operatorOn = true;
// 		currentOperator = "add";
// 		if (numberScript != "") {
// 			firstNumber = parseFloat(numberScript);
// 		}
// 		numberScript = "";
// 		updateScreen();
// 	}
// 	//-
// 	if(e.which == 109) {
// 		operatorOn = true;
// 		currentOperator = "sub";
// 		if (numberScript != "") {
// 			firstNumber = parseFloat(numberScript);
// 		}
// 		numberScript = "";
// 		updateScreen();
// 	}
// 	//*
// 	if(e.which == 106) {
// 		operatorOn = true;
// 		currentOperator = "mul";
// 		if (numberScript != "") {
// 			firstNumber = parseFloat(numberScript);
// 		}
// 		numberScript = "";
// 		updateScreen();
// 	}
// 	//÷
// 	if(e.which == 111) {
// 		operatorOn = true;
// 		currentOperator = "div";
// 		if (numberScript != "") {
// 			firstNumber = parseFloat(numberScript);
// 		}
// 		numberScript = "";
// 		updateScreen();
// 	}
// 	//=
// 	if(e.which == 13 || e.which == 187) {
// 		finishedExpression = true;
// 		if(!operatorOn) {
// 			return;
// 		}
// 		else {
// 			motivationalQuotes();
// 			if (currentOperator == "add") {
// 				var ans = firstNumber + secondNumber;
// 				firstNumber = ans;
// 				numberScript = ans.toString();
// 				updateScreen();
// 			}
// 			else if (currentOperator == "sub") {
// 				var ans = firstNumber - secondNumber;
// 				firstNumber = ans;
// 				numberScript = ans.toString();
// 				updateScreen();
// 			}
// 			else if (currentOperator == "mul") {
// 				var ans = firstNumber * secondNumber;
// 				firstNumber = ans;
// 				numberScript = ans.toString();
// 				updateScreen();
// 			}
// 			else if (currentOperator == "div") {
// 				var ans = firstNumber / secondNumber;
// 				firstNumber = ans;
// 				numberScript = ans.toString();
// 				updateScreen();
// 			}
// 			operatorOn = false
// 		}
// 	}
// });
	







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
