"use strict";

var container = document.getElementById("container");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");

section1.innerHTML = Math.round(Math.random() * 10000);

// var circle1 = document.getElementById("circle1");
// var circle2 = document.getElementById("circle2");
// var circle3 = document.getElementById("circle3");
// var circle4 = document.getElementById("circle4");

// circle = [circle1, circle2, circle3, circle4];


// var step = 0;
// var reverse = false;
// var stopId;
// var starttime;
// var progress;
// var duration = 60000;
// var dist = field.offsetWidth;
// var rotate = 540;
// var scale = 100;
// var r = 200;
// var g = 200;
// var b = 200;

// circle.forEach(element => { element.style.left = step + "px" });


// function loop(timestamp) {

// 	var runtime = timestamp - starttime;
// 	var progress = runtime / duration;
// 	progress = Math.min(progress, 1);

// 	// console.log(`stopId, runtime`, stopId, Math.round(runtime));
// 	// console.log(`progress`, progress);

// 	if (!reverse) {
// 		// console.log(`step`, step);

// 		// circle.forEach(element => { element.style.left = `${(dist * progress).toFixed(2)}px` });
// 		// circle.forEach(element => { element.style.transform = `rotate(${(rotate * progress).toFixed(2)}deg)` });

// 		circle1.style.transform = `rotate(${(540 * progress).toFixed(2)}deg)`;
// 		circle2.style.transform = `rotate(${(720 * progress).toFixed(2)}deg)`;
// 		circle3.style.transform = `rotate(${(360 * progress).toFixed(2)}deg)`;
// 		circle4.style.transform = `rotate(${(180 * progress).toFixed(2)}deg)`;


// 		// circle.forEach(element => { element.style.borderColor = `rgb(100, ${(g * progress).toFixed(2)}, 100)` });

// 		// circle.style.left = `${(dist * progress).toFixed(2)}px`;
// 		// circle.style.transform = `rotate(${(rotate * progress).toFixed(2)}deg)`;
// 		// circle.style.backgroundColor = `rgb(100, ${(g * progress).toFixed(2)}, 100)`;

// 		// console.log(`circle.style.left`, circle.style.left);
// 		// console.log(`circle.style.transform`, circle.style.transform );

// 		// 'rotate(180deg)'

// 		// step += (dist * progress);
// 		// console.log(`step`, step);
// 		// circle.style.left = `${step}px`;
// 	}
// 	if (reverse) {
// 		step -= 100;
// 		circle.forEach(element => { element.style.left = `${step}px` });
// 		// circle.style.left = `${step}px`;
// 	}

// 	if (step > 1050) reverse = true;
// 	if (step < -150) reverse = false;

// 	if (runtime >= duration) {
// 		runtime = duration; // возможно не нужно
// 		// console.log(`circle.style.left`, circle.style.left);
// 		start();
// 	}
// 	else {
// 		stopId = window.requestAnimationFrame(loop);
// 		// console.log(`loop - time`, time);
// 		// console.log(`time - animationStartTime`, Math.round(time - animationStartTime));
// 		// console.log(`loop - time - animationStartTime`, stopId, time, animationStartTime, time - animationStartTime);
// 		// console.log(`loop, time - animationStartTime`, stopId, time - animationStartTime);
// 	}
// };


// function start() {
// 	// console.log(`circle.style.left`, circle.style.left);
// 	starttime = window.performance.now();
// 	stopId = window.requestAnimationFrame(loop);
// 	// console.log(`>>> start`, stopId);
// }

// function stop() {
// 	window.cancelAnimationFrame(stopId);
// 	// console.log(`<<< stop`, stopId);
// 	stopId = 0;
// 	// console.log(`<<< stop =`, stopId);
// }

// function startStop() {
//   if (stopId) stop();
// 	else start();
// }

// field.addEventListener("click", startStop);
// field.addEventListener("touchstart", startStop);


// document.addEventListener("touchmove", function(e) { e.preventDefault() });
// window.addEventListener('touchmove', function(e) { e.preventDefault() });
// window.addEventListener("load", function() { window. scrollTo(0, 0) });


// document.addEventListener("DOMContentLoaded", ready, false);


document.addEventListener("touchstart", function(e) { e.preventDefault() }, false);
document.addEventListener("touchend", function(e) { e.preventDefault() }, false);
document.addEventListener("touchcancel", function(e) { e.preventDefault() }, false);
document.addEventListener("touchmove", function(e) { e.preventDefault() }, false);


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

section1.addEventListener('touchstart', swipeFromSection1, false);
section2.addEventListener('touchstart', swipeFromSection2, false);
section3.addEventListener('touchstart', swipeFromSection3, false);

// section1.addEventListener('wheel', function(e) {
// 	if (e.deltaY > 10) switchToSection2();
// });

// section2.addEventListener('wheel', function(e) {
// 	if (e.deltaY < -10) switchToSection1();
// 	else if (e.deltaY > 10) switchToSection3();
// });

// section3.addEventListener('wheel', function(e) {
// 	if (e.deltaY < -10) switchToSection2();
// });

// section1.addEventListener('scroll', function(e) {
// 	if (e.deltaY > 10) switchToSection2();
// });

// section2.addEventListener('scroll', function(e) {
// 	if (e.deltaY < -10) switchToSection1();
// 	else if (e.deltaY > 10) switchToSection3();
// });

// section3.addEventListener('scroll', function(e) {
// 	if (e.deltaY < -10) switchToSection2();
// });



// window.addEventListener("click", function (e) {
// 	console.log("window.click", e.target, e.currentTarget, this.dataset);
// 	// e.stopPropagation(); // прекращение всплытия или погружения события
// 	// e.preventDefault(); // отмена стандартного поведения
// }, false);

// document.addEventListener("click", function (e) {
// 	console.log("document.click", e.target, e.currentTarget, this.dataset);
// 	// e.stopPropagation(); // прекращение всплытия или погружения события
// 	// e.preventDefault(); // отмена стандартного поведения
// }, false);

// container.addEventListener("click", function (e) {
// 	console.log("container.click", e.target, e.currentTarget, this.dataset);
// 	// e.stopPropagation(); // прекращение всплытия или погружения события
// 	// e.preventDefault(); // отмена стандартного поведения
// }, false);

// section1.addEventListener("click", function (e) {
// 	console.log("section1.click", e.target, e.currentTarget, this.dataset);
// 	// e.stopPropagation(); // прекращение всплытия или погружения события
// 	// e.preventDefault(); // отмена стандартного поведения
// }, false);





