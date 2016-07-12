/*****************************************************************
 || countdown.js by Erik Boesen, https://github.com/ErikBoesen. ||
 ||  Copyright (c) 2016 Erik Boesen. Licensed under the GPLv3.  ||
 ||        Please keep this copyright information here.         ||
 *****************************************************************/

var events = [
    {
        name: 'Event 1',
        date: new Date('August 12, 2016')
    },
    {
    	name: 'Event 2',
    	date: new Date('Oct 22, 2016')
    },
    {
        name: 'Event 3',
        date: new Date('July 19, 2019')
    }

];

var cd = {
	title: document.getElementById('cd-title'),
	d: document.getElementById('cd-days'),
	h: document.getElementById('cd-hours'),
	m: document.getElementById('cd-minutes'),
	s: document.getElementById('cd-seconds'),
};

// variables for time units
var days, hours, minutes, seconds;

// Update countdown every 100ms (.1s)
setInterval(function() {
	// Find the amount of seconds between now and target
	var now = new Date().getTime();
	var secondsLeft = (events[0].date - now) / 1000;
	if (now > events[0].date) secondsLeft = 0;

	// Calculate times left
	days = parseInt(secondsLeft / 86400);
	if (days.toString().length < 2) days = '0' + days.toString();
	secondsLeft = secondsLeft % 86400;

	hours = parseInt(secondsLeft / 3600);
	if (hours.toString().length < 2) hours = '0' + hours.toString();
	secondsLeft = secondsLeft % 3600;

	minutes = parseInt(secondsLeft / 60);
	if (minutes.toString().length < 2) minutes = '0' + minutes.toString();
	seconds = parseInt(secondsLeft % 60);
	if (seconds.toString().length < 2) seconds = '0' + seconds.toString();

	// Display times left
	cd.title.innerHTML = 'Time left until ' + events[0].name + ':';
	cd.d.innerHTML = days;
	cd.h.innerHTML = hours;
	cd.m.innerHTML = minutes;
	cd.s.innerHTML = seconds;
}, 100);