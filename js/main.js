"use strict";


/* ---------------------------------------------------------------------------- */
/* ---------------------------------  CONST  ---------------------------------- */
/* ---------------------------------------------------------------------------- */


var container = document.getElementById("container");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");


/* ---------------------------------------------------------------------------- */
/* -------------------------------  FUNCTIONS  -------------------------------- */
/* ---------------------------------------------------------------------------- */


var switchToSection1 = function switchToSection1() {
	container.style.transform = 'translate3d(0px, 0px, 0px)';
	container.style.transition = 'all 700ms ease 0s';
};

var switchToSection2 = function switchToSection2() {
	container.style.transform = 'translate3d(0px, -100%, 0px)';
	container.style.transition = 'all 700ms ease 0s';
};

var switchToSection3 = function switchToSection3() {
	container.style.transform = 'translate3d(0px, -200%, 0px)';
	container.style.transition = 'all 700ms ease 0s';
};

function swipeFromSection1(e) {
	e.preventDefault();
	console.log("event.target", e.target);
	this.startPoint = e.targetTouches[0].clientY;
	this.endPoint;

	this.addEventListener('touchmove', function (e) {
		e.preventDefault();
		this.endPoint = e.targetTouches[0].clientY;
		if (this.startPoint > this.endPoint) switchToSection2();
	}, false);

	this.addEventListener('touchend', function() { e.preventDefault() });
	this.addEventListener('touchcancel', function() { e.preventDefault() });
}

function swipeFromSection2(e) {
	e.preventDefault();
	console.log("event.target", e.target);
	this.startPoint = e.targetTouches[0].clientY;
	this.endPoint;

	this.addEventListener('touchmove', function (e) {
		this.endPoint = e.targetTouches[0].clientY;
		if (this.startPoint > this.endPoint) switchToSection3();
		else switchToSection1();
	}, false);

	this.addEventListener('touchend', function() { e.preventDefault() });
	this.addEventListener('touchcancel', function() { e.preventDefault() });
}

function swipeFromSection3(e) {
	e.preventDefault();
	console.log("event.target", e.target);
	this.startPoint = e.targetTouches[0].clientY;
	this.endPoint;

	this.addEventListener('touchmove', function (e) {
		this.endPoint = e.targetTouches[0].clientY;
		if (this.startPoint < this.endPoint) switchToSection2();
	}, false);

	this.addEventListener('touchend', function() { e.preventDefault() });
	this.addEventListener('touchcancel', function() { e.preventDefault() });
}


/* ---------------------------------------------------------------------------- */
/* ---------------------------------  EVENTS  --------------------------------- */
/* ---------------------------------------------------------------------------- */


section1.addEventListener('touchstart', swipeFromSection1, false);
section2.addEventListener('touchstart', swipeFromSection2, false);
section3.addEventListener('touchstart', swipeFromSection3, false);

section1.addEventListener('wheel', function(e) {
	e.preventDefault();
	if (e.deltaY > 24) switchToSection2();
});

section2.addEventListener('wheel', function(e) {
	e.preventDefault();
	if (e.deltaY < -24) switchToSection1();
	else if (e.deltaY > 24) switchToSection3();
});

section3.addEventListener('wheel', function(e) {
	e.preventDefault();
	if (e.deltaY < -24) switchToSection2();
});

section1.addEventListener('scroll', function(e) {
	e.preventDefault();
	if (e.deltaY > 24) switchToSection2();
});

section2.addEventListener('scroll', function(e) {
	e.preventDefault();
	if (e.deltaY < -24) switchToSection1();
	else if (e.deltaY > 24) switchToSection3();
});

section3.addEventListener('scroll', function(e) {
	e.preventDefault();
	if (e.deltaY < -24) switchToSection2();
});


document.addEventListener("touchstart", function(e) { e.preventDefault() }, false);
document.addEventListener("touchend", function(e) { e.preventDefault() }, false);
document.addEventListener("touchcancel", function(e) { e.preventDefault() }, false);
document.addEventListener("touchmove", function(e) { e.preventDefault() }, false);