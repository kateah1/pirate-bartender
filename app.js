'use strict'


$(document).ready(function() {


// show start page, hide questions
$(".start").show();
$(".questions").hide();
$(".drink").hide();


// show first question on click of start button
$("#begin").click(function() {
	$(".start").hide();
	$(".questions").show();
	$(".questions h1").text(questions[0]);
})

var currQuestion = 1;

$(".questions button").click(function() {
	$(".questions h1").text(questions[currQuestion]);
	currQuestion++;
	if (currQuestion === 4) {
		Drink();
	}
})


// questions to ask customer
var questions = [
	'Do ye like yer drinks strong?',
	'Do ye like it with a salty tang?',
	'Are ye a lubber who likes it bitter?',
	'Would ye like a bit of sweetness with yer poison?',
	'Are ye one for a fruity finish?'
]


// available ingredients in the pantry
var ingredients = {
	strong : ['Glug of rum', 'Slug of whisky', 'Splash of gin'],
	salty : ['Olive on a stick', 'Salt-dusted rim', 'Rasher of bacon'],
	bitter : ['Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'],
	sweet : ['Sugar cube', 'Spoonful of honey', 'Splash of cola'],
	fruity : ['Slice of orange', 'Dash of cassis', 'Cherry on top'],
}


// constructor function for a drink
var Drink = function(ingredients) {
	this.strong = ingredients.strong;
	this.salty = ingredients.salty;
	this.bitter = ingredients.bitter;
	this.sweet = ingredients.sweet;
	this.fruity = ingredients.fruity;
	showDrink();
}


// show drink div and generated drink
var showDrink = function() {
	$(".drink").show();
}


// generate random number between 0 and 2 to determine item in ingredients array to be selected
var selection = function() {
	var num = Math.floor((Math.random() * 3));
	return num;
}


// build customer's drink based on preferences
var customerDrink = new Drink ({
	strong : ingredients.strong[selection()],
	salty : ingredients.salty[selection()],
	bitter : ingredients.bitter[selection()],
	sweet : ingredients.sweet[selection()],
	fruity : ingredients.fruity[selection()]
});


});