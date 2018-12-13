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
	container.style.transition = 'all 600ms ease 0s';
};

var switchToSection2 = function switchToSection2() {
	container.style.transform = 'translate3d(0px, -100%, 0px)';
	container.style.transition = 'all 600ms ease 0s';
	container.addEventListener("transitionend", function() {
		section2.addEventListener('wheel', switch2, false);
	}, false);
};

var switchToSection3 = function switchToSection3() {
	container.style.transform = 'translate3d(0px, -200%, 0px)';
	container.style.transition = 'all 600ms ease 0s';
};


var switch1 = function switch1(e) {
	e.preventDefault();
	if (e.deltaY > 24) {
		section2.removeEventListener('wheel', switch2, false);
		switchToSection2();
	}
};

var switch2 = function switch2(e) {
	e.preventDefault();
	if (e.deltaY < -24) {
		switchToSection1();
	}
	else if (e.deltaY > 24) {
		switchToSection3();
	}
};

var switch3 = function switch3(e) {
	e.preventDefault();
	if (e.deltaY < -24) {
		section2.removeEventListener('wheel', switch2, false);
		switchToSection2();
	}
};


function swipeFromSection1(e) {
	e.preventDefault();
	this.startPoint = e.targetTouches[0].clientY;
	this.endPoint;
	this.addEventListener('touchend', function() { e.preventDefault() });
	this.addEventListener('touchcancel', function() { e.preventDefault() });
	this.addEventListener('touchmove', function (e) {
		e.preventDefault();
		this.endPoint = e.targetTouches[0].clientY;
		if (this.startPoint > this.endPoint) switchToSection2();
	}, false);
}

function swipeFromSection2(e) {
	e.preventDefault();
	this.startPoint = e.targetTouches[0].clientY;
	this.endPoint;
	this.addEventListener('touchend', function() { e.preventDefault() });
	this.addEventListener('touchcancel', function() { e.preventDefault() });
	this.addEventListener('touchmove', function (e) {
		this.endPoint = e.targetTouches[0].clientY;
		if (this.startPoint > this.endPoint) switchToSection3();
		else switchToSection1();
	}, false);
}

function swipeFromSection3(e) {
	e.preventDefault();
	this.startPoint = e.targetTouches[0].clientY;
	this.endPoint;
	this.addEventListener('touchend', function() { e.preventDefault() });
	this.addEventListener('touchcancel', function() { e.preventDefault() });
	this.addEventListener('touchmove', function (e) {
		this.endPoint = e.targetTouches[0].clientY;
		if (this.startPoint < this.endPoint) switchToSection2();
	}, false);
}


/* ---------------------------------------------------------------------------- */
/* ---------------------------------  EVENTS  --------------------------------- */
/* ---------------------------------------------------------------------------- */


section1.addEventListener('wheel', switch1, false);
// section2.addEventListener('wheel', switch2, false);
section3.addEventListener('wheel', switch3, false);

section1.addEventListener('touchstart', swipeFromSection1, false);
section2.addEventListener('touchstart', swipeFromSection2, false);
section3.addEventListener('touchstart', swipeFromSection3, false);