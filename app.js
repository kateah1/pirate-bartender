'use strict'

$(document).ready(function() {

	$("#submit").hide();

	// show start page, hide questions
	$(".start").show();
	$(".questions").hide();
	$(".drink").hide();


	// show first question on click of start button
	$(".flaticon-death").click(function() {
		$(".start").hide();
		$(".questions").show();
		Bartender.prototype.askQuestions();
	})

})


/* PANTRY ----------------------------------------------------------------------------- */

// ingredients in pantry by type
function Pantry() {
    this.strong = ['glug of rum', 'slug of whisky', 'splash of gin'];
    this.salty = ['olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
    this.bitter = ['shake of bitters', 'splash of tonic', 'twist of lemon peel'];
    this.sweet = ['sugar cube', 'spoonful of honey', 'splash of cola'];
    this.fruity = ['slice of orange', 'dash of cassis', 'cherry on top'];
}


/* INGREDIENTS ------------------------------------------------------------------------ */

// call pantry object for Ingredients
function Ingredients() {
    Pantry.call(this);
}

// create Ingredient prototype inheriting from Pantry
Ingredients.prototype = Object.create(Pantry.prototype);

// create Ingredient constructor prototype from Pantry object constructor
Ingredients.prototype.constructor = Ingredients;

// create empty Ingredient preferences prototype
Ingredients.prototype.preferences = {};


/* DRINK ------------------------------------------------------------------------------ */

// Drink function inherits Pantry object properties, creates empty array
function Drink() {
    Ingredients.call(this);
    this.drink = [];
}

// create drink prototype inheriting from ingredients prototype
Drink.prototype = Object.create(Ingredients.prototype);

// create drink constructor from Pantry object constructor
Drink.prototype.constructor = Drink;

// create drink prototype randomize but generating random number based on array length and pushing it to drink array
Drink.prototype.randomize = function(arr) {
    this.drink.push(arr[Math.floor(Math.random() * arr.length)]);
}

// create drink prototype createDrink 
Drink.prototype.createDrink = function(preferences) {

    // loop through preferences and randomly select item in array
    for (var type in this.preferences) {
        this.randomize(this[type])
    }

    $('#ingredients').text(this.drink);
    $(".questions").hide();
    $(".drink").show();

}


/* BARTENDER ------------------------------------------------------------------------ */

// questions asked by bartender
function Bartender() {

    this.questions = {
        strong: 'Do ye like yer drinks strong?',
        salty: 'Do ye like it with a salty tang?',
        bitter: 'Are ye a lubber who likes it bitter?',
        sweet: 'Would ye like a bit of sweetness with yer poison?',
        fruity: 'Are ye one for a fruity finish?'
    };

    // inherits Drink object
    Drink.call(this);
}

// creates bartender prototype inheriting from Drink prototype
Bartender.prototype = Object.create(Drink.prototype);

// create bartender prototype contstructor from bartender object
Bartender.prototype.constructor = Bartender;

// create bartender prototype to ask questions
Bartender.prototype.askQuestions = function() {

    for (var question in this.questions) {
        $('ul').append(this.questions[question] + '<li><input type="radio" id="pirate-happy" value="yes" name="' + question + '"/><label for="pirate-happy"><i class="flaticon-pirate-happy"></i></label> <input type="radio" id="pirate-sad" value="no" name="' + question + '"/><label for="pirate-sad"><i class="flaticon-pirate-sad"></i></label>');
    }

};

// create bartender prototype to take customer order based on user input
Bartender.prototype.takeOrder = function() {

    var self = this;

    $("form").submit(function(event) {
        event.preventDefault();
        for (var question in self.questions) {
            if ($('input[type="radio"]').val() === 'yes') {
                self.preferences[question] = true;

            }
        }

        self.createDrink(self.preferences);

    });

}

var bartender = new Bartender();
bartender.askQuestions();
bartender.takeOrder();


