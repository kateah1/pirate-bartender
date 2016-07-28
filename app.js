'use strict'


$(document).ready(function() {


// show start page, hide questions
$(".start").show();
$(".questions").hide();
$(".drink").hide();


// show first question on click of start button
$(".flaticon-death").click(function() {
	$(".start").hide();
	$(".questions").show();
})


// show questions, when finished show drink
var currQuestion = 0;

$("i").click(function() {
	if (currQuestion === 5) {
		showDrink();
	}
	else {
	$(".questions h1").text(questions[currQuestion]);
	currQuestion++;
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
	strong : ['glug of rum', 'slug of whisky', 'splash of gin'],
	salty : ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
	bitter : ['shake of bitters', 'splash of tonic', 'twist of lemon peel'],
	sweet : ['sugar cube', 'spoonful of honey', 'splash of cola'],
	fruity : ['slice of orange', 'dash of cassis', 'cherry on top'],
}


// constructor function for a drink
var Drink = function(ingredients) {
	this.strong = ingredients.strong;
	this.salty = ingredients.salty;
	this.bitter = ingredients.bitter;
	this.sweet = ingredients.sweet;
	this.fruity = ingredients.fruity;
};


// generate random number between 0 and 2 to determine item in ingredients array to be selected
var selection = function() {
	var num = Math.floor((Math.random() * 3));
	return num;
};


// build customer's drink based on preferences
var customerDrink = new Drink ({
	strong : ingredients.strong[selection()],
	salty : ingredients.salty[selection()],
	bitter : ingredients.bitter[selection()],
	sweet : ingredients.sweet[selection()],
	fruity : ingredients.fruity[selection()]
});


// show drink div and generated drink
var showDrink = function() {
	$(".questions").hide();
	$(".drink").show();
	$("#ingredients").append(customerDrink);
	console.log(customerDrink);
};


});