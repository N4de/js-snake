// DOM ELEMENTS




// GLOBAL VARIABLES


// OBJECTS

var grid = {
	defaultBox: " ",
	boxCoordinates: [],
	size: 40,

	createGrid: function() {
		for (var i = 0; i < 40; i++) {
			for (var g = 0; g < 40; g++) {
				$div = $("<div>", {id: "box-"+i+"-"+g, class: "box"});
				$(".container").append($div);
			}
		}
	},

	createBox: function() {
		$(".container").append("<div class='box'></div>");
	},

	findBox: function([x, y]) {

	}
}

var snake = {
	size: 3,
	snakeCoordinates: [],
	direction: "right",


	createSnake: function() {
		$("#box-20-20").addClass("snake-head");
		$("#box-20-19").addClass("snake-body");
		$("#box-20-18").addClass("snake-body");

	}
}




$(document).ready(function(){
	grid.createGrid();
	snake.createSnake();
});





