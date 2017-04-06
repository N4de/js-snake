// DOM ELEMENTS




// GLOBAL VARIABLES
//var start = setInterval(function() {snake.move();},1000);

// OBJECTS

var grid = {
	defaultBox: " ",
	boxCoordinates: [],
	size: 40,

	render: function() {
		for (var i = 0; i < 40; i++) {
			for (var g = 0; g < 40; g++) {
				$div = $("<div>", {id: "box-"+i+"-"+g, class: "box"});
				$(".container").append($div);
			}
		}
	},
}

var snake = {
	size: 3,
	headX: 20,
	headY: 20,
	partX: [20, 20],
	partY: [18, 19],
	direction: "right",


	render: function() {
		$("#box-20-20").addClass("snake-head");
		$("#box-20-19").addClass("snake-body");
		$("#box-20-18").addClass("snake-body");

	},

	changeDirection: function() {
		$('body').keydown(function( event ) {
			console.log("keydown called");
	      	event.preventDefault();
	      	switch(event.which) {
		        case 37:
		        	if (snake.direction != "right") {
		        		snake.direction = ("left");
		        	}
		        	console.log("left pressed");
		          	break;
		        case 38:
		        	if (snake.direction != "down") {
		          		snake.direction = ("up");
		        	}
		          	console.log("up pressed");
		          	break;
		        case 39:
		        	if (snake.direction != "left") {
		          		snake.direction = ("right");
		          	}
		          	console.log("right pressed");
		          	break;
		        case 40:
		        	if (snake.direction != "up") {
		          		snake.direction = ("down");
		          	}
		          	console.log("down pressed");
		          	break;
		        default: break; 
	    	}
	    });
	},

	move: function() {
		// move snake head one space, move the first body to head, remove last body
		$("#box-" + snake.headX + "-" + snake.headY).removeClass("snake-head");
		$("#box-" + snake.headX + "-" + snake.headY).addClass("snake-body");
		$("#box-" + snake.partX[0] + "-" + snake.partY[0]).removeClass("snake-body");
		snake.partX.shift();
		snake.partY.shift();
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
		console.log("bodyX: " + snake.partX);
		console.log("bodyY: " + snake.partY);
		console.log("headX: " + snake.headX);
		console.log("headY: " + snake.headY);
	}
}




$(document).ready(function(){
	grid.render();
	snake.render();
	//snake.changeDirection();
});





