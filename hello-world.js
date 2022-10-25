"use strict";
console.log("Hello");
// get time
const date = new Date();
const hour = date.getHours();
// if it's morning (am)
if (hour < 12) {
	// say good morning
	console.log("Good Morning!");
} else if (hour >= 12 && hour < 17) {
	// else if it's afternoon (noon to 5pm)
	console.log("Good Afternoon!");
} else {
	// else it's night
	console.log("Goodnight!");
}