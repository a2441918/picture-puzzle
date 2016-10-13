"use strict";
var totalScore = 0;


//time counter
var timeRem1= 30;
var myVar1;

function startTimer1()
{
	myVar1 = setInterval(countDown1,1000)
}

function countDown1()
{
	timeRem1= timeRem1-1;
	document.getElementById("timeRem1").value = timeRem1;
	if(timeRem1<1)
	{
		alert("Try Again!");
		window.location.href="picturePuzzle.html";
	}
		
}


var timeRem2= 60;
var myVar2;

function startTimer2()
{
	myVar2 = setInterval(countDown2,1000)
}

function countDown2()
{
	timeRem2= timeRem2-1;
	document.getElementById("timeRem2").value = timeRem2;
	if(timeRem2<1)
	{
		alert("Try Again!");
		window.location.href="picturePuzzle1.html";
	}
		
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag2(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	
}

function drop2(ev) {
    ev.preventDefault();
	//swap images
    var src = document.getElementById(ev.dataTransfer.getData("text"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;
    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
	//check if game is won
	if(document.getElementById("mustang1").firstElementChild.id == "imustang1"
	&& document.getElementById("mustang2").firstElementChild.id == "imustang2"
	&& document.getElementById("mustang3").firstElementChild.id == "imustang3"
	&& document.getElementById("mustang4").firstElementChild.id == "imustang4"
	&& document.getElementById("mustang5").firstElementChild.id == "imustang5"
	&& document.getElementById("mustang6").firstElementChild.id == "imustang6"
	&& document.getElementById("mustang7").firstElementChild.id == "imustang7"
	&& document.getElementById("mustang8").firstElementChild.id == "imustang8"
	&& document.getElementById("mustang9").firstElementChild.id == "imustang9"
	&& document.getElementById("mustang10").firstElementChild.id == "imustang10"
	&& document.getElementById("mustang11").firstElementChild.id == "imustang11"
	&& document.getElementById("mustang12").firstElementChild.id == "imustang12"
	&& document.getElementById("mustang13").firstElementChild.id == "imustang13"
	&& document.getElementById("mustang14").firstElementChild.id == "imustang14"
	&& document.getElementById("mustang15").firstElementChild.id == "imustang15"
	&& document.getElementById("mustang16").firstElementChild.id == "imustang16"
	)
	{ 
		//persistance storage of score for the 2 levels
		totalScore = localStorage.getItem("totalScore");
		totalScore = parseInt(totalScore) + parseInt(timeRem2);
		localStorage.setItem("totalScore", totalScore);
		alert("You Won! \n Your Score: "+timeRem2);
		window.location.href="picturePuzzleCongrats.html";
	}
}


function drag1(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	
}


function drop1(ev) {
    ev.preventDefault();
	//swap images
    var src = document.getElementById(ev.dataTransfer.getData("text"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;
    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
	//check if game is won
	if(document.getElementById("dog00").firstElementChild.id == "idog00"
	&& document.getElementById("dog01").firstElementChild.id == "idog01"
	&& document.getElementById("dog02").firstElementChild.id == "idog02"
	&& document.getElementById("dog10").firstElementChild.id == "idog10"
	&& document.getElementById("dog11").firstElementChild.id == "idog11"
	&& document.getElementById("dog12").firstElementChild.id == "idog12"
	&& document.getElementById("dog20").firstElementChild.id == "idog20"
	&& document.getElementById("dog21").firstElementChild.id == "idog21"
	&& document.getElementById("dog22").firstElementChild.id == "idog22"
	)
	{
		totalScore = 0;
		totalScore = totalScore + timeRem1;
		
		// Check browser support
		if (typeof(Storage) !== "undefined") {
			//persistance storage of score for the 2 levels
			localStorage.setItem("totalScore", totalScore);
			// Retrieve
			totalScore = localStorage.getItem("totalScore") ;
		} else {
			alert("Local storage not supported (used for scores), please use Google Chrome")
		}


		alert("You Won! \n Your Score: "+timeRem1);
		window.location.href="picturePuzzle1.html";
	}
}


//reset game
function reset2()
{
	window.location.href="picturePuzzle1.html";
}

function reset1()
{
	window.location.href="picturePuzzle.html";
}

//hint
function hint1()
{
	alert("The picture consists of a dog in a desert.")
}

function hint2()
{
	alert("The picture consists of an ape and a Mustang car.")
}

//score
function score()
{
	document.getElementById("score").innerHTML = "Your Score is "+localStorage.getItem("totalScore")+"!"
} 

//redirect to Level 1
function goToLevel1()
{
	window.location.href="picturePuzzle.html";
}

function goToLevel2()
{
	window.location.href="picturePuzzle1.html";
}