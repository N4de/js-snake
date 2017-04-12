// DOM ELEMENTS

$(document).ready(function(){
	grid.render();
	snake.render();
	snake.changeDirection();
});



// GLOBAL VARIABLES
var start = setInterval(function() {snake.move();},500);


gameOver = function() {
	$('p').removeClass('hidden');
	clearInterval(start);
};

// OBJECTS

var grid = {
	defaultBox: " ",
	boxCoordinates: [],
	size: 40,
	isFood: false,
	foodCoords: [],

	render: function() {
		for (var i = 0; i < 40; i++) {
			for (var g = 0; g < 40; g++) {
				$div = $("<div>", {id: "box-"+i+"-"+g, class: "box"});
				$(".container").append($div);
			}
		}
	},

	spawnFood: function() {
		if (grid.isFood === false) {
			var x = Math.floor((Math.random() * 39));
			var y = Math.floor((Math.random() * 39));
			$("#box-" + x + "-" + y).addClass("food");
			grid.isFood = true;
			grid.foodCoords.push(x);
			grid.foodCoords.push(y);
		}
	},

	removeFood: function() {
		$("#box-" + grid.foodCoords[0] + "-" + grid.foodCoords[1]).removeClass("food");
		grid.isFood = false;
		grid.foodCoords = [];
	}
}

var snake = {
	size: 3,
	headX: 20,
	headY: 20,
	partX: [20, 20],
	partY: [18, 19],
	direction: "right",
	foodEaten: false,


	render: function() {
		$("#box-20-20").addClass("snake-head");
		$("#box-20-19").addClass("snake-body");
		$("#box-20-18").addClass("snake-body");

	},

	changeDirection: function() {
		$('body').keydown(function( event ) {
	      	event.preventDefault();
	      	switch(event.which) {
		        case 37:
		        	if (snake.direction != "right") {
		        		snake.direction = ("left");
		        	}
		          	break;
		        case 38:
		        	if (snake.direction != "down") {
		          		snake.direction = ("up");
		        	}
		          	break;
		        case 39:
		        	if (snake.direction != "left") {
		          		snake.direction = ("right");
		          	}
		          	break;
		        case 40:
		        	if (snake.direction != "up") {
		          		snake.direction = ("down");
		          	}
		          	break;
		        default: break; 
	    	}
	    });
	},

	move: function() {
		// move snake head one space, move the first body to head, remove last body
		$("#box-" + snake.headX + "-" + snake.headY).removeClass("snake-head");
		$("#box-" + snake.headX + "-" + snake.headY).addClass("snake-body");
		if (snake.foodEaten === false) {
			$("#box-" + snake.partX[0] + "-" + snake.partY[0]).removeClass("snake-body");
			snake.partX.shift();
			snake.partY.shift();
		}
		snake.foodEaten = false;

		snake.partX.push(snake.headX);
		snake.partY.push(snake.headY);

		switch(snake.direction) {
			case "right":
				snake.headY++;
				break;
			case "left":
				snake.headY--;
				break;
			case "up":
				snake.headX--;
				break;
			case "down":
				snake.headX++;
				break;
			default:
				break;
		}
		$("#box-" + snake.headX + "-" + snake.headY).addClass("snake-head");

		snake.lose();

		grid.spawnFood();

		if (grid.foodCoords[0] === snake.headX && grid.foodCoords[1] === snake.headY) {
			snake.foodEaten = true;
			grid.removeFood();
		}
	},

	lose: function() {
		if (snake.headX === 40 || snake.headY === 40 || snake.headX === -1 || snake.headY === -1) {
			gameOver();
		}

		for (var i = 0; i < snake.partX.length; i++) {
			if (snake.headX === snake.partX[i] && snake.headY === snake.partY[i]) {
				gameOver();
			}
		}
	}
}










