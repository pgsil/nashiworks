/*Initialize a score var*/
	var score = 0;

	/*Function to add blocks to the page*/
	function addBlocksToView(){

		/*Choose a random number to be the weird block*/
		var weirdBlock = Math.floor(Math.random() * 8);

		/*Log our weird block number to the console*/
		console.log("Target: " + weirdBlock);

		/*Generate a random rgb() color*/
		var targetColorR = Math.floor(Math.random() * 254);
		var targetColorG = Math.floor(Math.random() * 254);
		var targetColorB = Math.floor(Math.random() * 254);
		var targetColor = "rgb(" + targetColorR + "," + targetColorG + "," + targetColorB  + ")";

		/*Generate a random number between -100 and 100 to be the offset on the targetColor*/
		var colorOffset = Math.floor(Math.random() * 200) - 100;

		/*Assemble the weird target color from our random color minus the offset*/
		var targetColorWeird = "rgb(" + (targetColorR + colorOffset) + "," + (targetColorG + colorOffset) + "," + (targetColorB + colorOffset)  + ")";	

		/*Log the target color and weird color to the console*/
		console.log("Target: " + targetColor);
		console.log("Target: " + targetColorWeird);


		/*i var for the loop and array*/
		var i  = 0;
		var arr = [1,2,3,4,5,6,7,8,9];
		var gameboard = document.getElementById("#gameboard");

		/*ForLoop to add the divs*/
		for (var i = 0; i < arr.length; i++) {		
			/*If divisible by 3, add a br after the div*/
			if((i+1) % 3 == 0)
				$("#gameboard").append("<div class='block right' id='"+i+"'>"+"</div><br/>");
			else
				$("#gameboard").append("<div class='block left' id='"+i+"'>"+"</div>");
		}

		/*Set the background colors for normal blocks and for the weird block.*/
		$('.block').removeAttr('style').css("background",targetColor);
		$('#'+ weirdBlock + '.block').removeAttr('style').css("background",targetColorWeird);
		
		$('.block').on( "click", function() {		    
		    if(this.id == weirdBlock){
		    	/*Increment score*/
		    	score = score + 1;
		    	$(".block").remove()
		    	$("#gameboard").empty();
		    	addBlocksToView();

    		}
		    else{
		    	var div = $(this);
		    	div.effect("shake");
		    	score = score - 1;
		    }
		});

		console.log('Blocks added!');
	}

	/*Ticker to check for the "score" variable changes*/
	var oldValue = 0;
	var newValue = 0;

	function checkScore(){
		newValue = score;
		if (newValue != oldValue){
			console.log('Values have changed!');
			oldValue = newValue;
			$('#score').html("Score: " + score);
		}
	}

	/*Updates the score every 500 miliseconds*/
	setInterval(function(){
		checkScore();
	},500);

	/*Runs the function to start a game when the page is loaded*/
	setTimeout(function(){
		addBlocksToView();
	},200);

	$(document).ready(function(){
	     intervalId = setInterval(countdown, 1000);
	});
	var time = 60;

	var countdown = function(){
		if(time > 0){
			time = time - 1;
			$('#time').html("Time remaining: " + time);
		}
		else{
			$("#gameboard").remove();
			$("#gameboard").empty();
			$("#score").animate({"font-size" : "50px"});

			$("#main").append("<div class='tinytext'>Share this by taking a screenshot and posting it somewhere!</div>");

			
			clearInterval(intervalId);
		}
	};