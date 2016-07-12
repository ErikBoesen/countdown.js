/***********************************************
 ||    countdown.js (c) 2016 Erik Boesen      ||
 ||   github.com/ErikBoesen/countdown.js.     ||
 || Licensed under MIT License (See LICENSE). ||
 ||          Please keep this here.           ||
 ***********************************************/

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

// Variables for time units
var d, h, m, s;

// Update countdown every 100ms (.1s)
setInterval(function() {
	// Find the amount of seconds between now and target
	var now = new Date().getTime();
    // Calculate number of total Seconds REMaining until event..
    // As larger units are calculated, this will be decreased.
	var srem = (events[0].date - now) / 1000;
    // If the event has passed, zero everything out.
	if (now > events[0].date) srem = 0;

	// Calculate times left
	d = parseInt(srem / 86400);
    // Remove those days from the remaining time.
	srem = srem % 86400;

	h = parseInt(srem / 3600);
    // Remove hours from the remaining time.
	srem = srem % 3600;

	m = parseInt(srem / 60);
    // Remove the minutes, this will result in the final 0-60s count.
	s = parseInt(srem % 60);

    // Add leading zeroes
	if (d.toString().length < 2) d = '0' + d.toString();
	if (h.toString().length < 2) h = '0' + h.toString();
	if (m.toString().length < 2) m = '0' + m.toString();
	if (s.toString().length < 2) s = '0' + s.toString();

	// Display times left
	cd.title.innerHTML = 'Time left until ' + events[0].name + ':';
	cd.d.innerHTML = d;
	cd.h.innerHTML = h;
	cd.m.innerHTML = m;
	cd.s.innerHTML = s;
}, 100);