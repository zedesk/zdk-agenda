/* jshint -W097 */
/* jshint browser:true */
/* global moment */
"use strict";

function Agenda(elt, day) {
	this.elt = elt;
	this.locale = "en-gb";
	moment.locale(this.locale);
	this.day = (typeof day === "string")?moment(day):moment();

	var canvas = this.elt.querySelector("canvas");
	var hours =  this.elt.querySelector(".view .hours");
	canvas.width  = this.elt.offsetWidth;
	canvas.height = 1200;

	function drawBG() {
		var i,
			ctx = canvas.getContext("2d");

		ctx.lineWidth=1;
		ctx.strokeStyle="#eeeeee";
		for( i=0;i<24;i++) {
			ctx.beginPath();
				ctx.moveTo(0,25 + i*50);
				ctx.lineTo(canvas.width,25 + i*50);
			ctx.stroke();
		}
		ctx.strokeStyle="#999999";
		for( i=0;i<24;i++) {
			ctx.beginPath();
				ctx.moveTo(0,50 + i*50);
				ctx.lineTo(canvas.width,50 + i*50);
			ctx.stroke();
		}
	}

	function drawWeekDays(obj) {
		// moment.locale("fr");
		// get the first day of the week
		var fday = moment(obj.day).startOf("week");

		var bannerDate = document.querySelector(".banner .date");
		bannerDate.innerHTML = fday.format("DD MMM")+ " - " + moment(fday).add(6,'d').format("DD MMM");
		var weekdays = document.querySelector(".weekdays");
		[].slice.call(weekdays.querySelectorAll(".weekday")).forEach( function( weekday, i ) {
			var day = moment(fday).add(i,'d');
			if( obj.elt.offsetWidth > 900 ) {
				weekday.querySelector(".day").innerHTML = day.format("dddd");
			} else {
				weekday.querySelector(".day").innerHTML = day.format("ddd");
			}
			weekday.querySelector(".date").innerHTML = day.format("DD");
		});
	}

	function pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	function drawHours() {
		var i, div;

		for ( i = 1; i<25; i++) {
			div = document.createElement("div");
			div.innerHTML = pad(i,2);
			div.style.bottom = (1200 - i*50) + "px";
			hours.appendChild(div);
		}
	}

	this.setTime = function(hour) {
		var view = this.elt.querySelector(".view");
		view.scrollTop = hour * 50;
	};

	drawBG();
	drawHours();
	drawWeekDays(this);

	var that = this;
	window.addEventListener("resize", function() {
		drawWeekDays(that);
	},false);

	this.previous = function() {
		this.day.subtract(7,'d');
		drawWeekDays(this);
	};

	this.next = function() {
		this.day.add(7,'d');
		drawWeekDays(this);
	};

	this.today = function() {
		this.day = moment();
		drawWeekDays(this);
	};

	this.elt.querySelector("#previous").addEventListener("click", function() { that.previous(); }, false);
	this.elt.querySelector("#next").addEventListener("click", function() { that.next(); }, false);
	this.elt.querySelector("#today").addEventListener("click", function() { that.today(); }, false);
}

window.addEventListener("DOMContentLoaded", function() {
	var agenda = new Agenda(document.querySelector(".agenda"));
	agenda.setTime(8);
}, false);

function drawBG(canvas) {
	var i,
		ctx = canvas.getContext("2d");

	ctx.lineWidth=1;
	ctx.strokeStyle="#eeeeee";
	for( i=0;i<24;i++) {
		ctx.beginPath();
			ctx.moveTo(0,25 + i*50);
			ctx.lineTo(canvas.width,25 + i*50);
		ctx.stroke();
	}
	ctx.strokeStyle="#999999";
	for( i=0;i<24;i++) {
		ctx.beginPath();
			ctx.moveTo(0,50 + i*50);
			ctx.lineTo(canvas.width,50 + i*50);
		ctx.stroke();
	}
}

window.addEventListener("polymer-ready", function() {
	var canvas = document.querySelector("my-scrollarea canvas");
	drawBG(canvas);
	document.querySelector("my-scrollarea").scrollTo(400);
},false);
