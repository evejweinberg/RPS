
$(document).ready(function () {
  
 var navPos = $('.onemore').offset();
  $(window).on('scroll', function () {
    if($(window).scrollTop() > parseInt(navPos.top) - 60){
      $('.onemore').css({
        'position' : 'fixed',
        'right' : '26.3%'
      });
    } else {
      $('.onemore').css({
        'position' : 'absolute',
        'right' : '2%'
      });
    }
  });

});



$(".game-icon")
        .mouseenter(function() { 
        	console.log('mouseover')
          $(this).find("span").addClass('hidden');
          $(this).find("img").removeClass('hidden');
        })
        .mouseleave(function() {
        	$(this).find("span").removeClass('hidden');
          	$(this).find("img").addClass('hidden');
        });






function play () {
	console.log("play");
	var user_input = document.getElementById("user_input");
	var user_move = user_input.value;
	console.log("user_move", user_move);

	var possible_moves = ["rock", "paper", "scissors"];
	var i = Math.floor(Math.random()*3);
	var computer_move = possible_moves[i];
	console.log("computer_move", computer_move);

	var outcome;

	var NonsenseArray = ["you typed nonsense, foo", "why are you messin'?", "homie don't play that way", "I will turn this car around in 5 seconds", "Play the game right or go home", "Use your words", "You're ruining this for everyone", "You broke it. Great"]; 
	var NonsenseRand = NonsenseArray[Math.floor(Math.random() * NonsenseArray.length)];

	var WinArray = ["you won!!! o-m-geeeeeee", "you're so skilled", "winner winner chicken dinner", "winnnnnner!", "GOOOOOOOOOOOOOOOL!!", "U WIN"]; 
	var WinRand = WinArray[Math.floor(Math.random() * WinArray.length)];

	if(computer_move === "rock"){
		if(user_move === "rock"){
			outcome = "it's a draw";
		} else if (user_move === "paper"){
			outcome = WinRand;
		} else if(user_move === "scissors"){
			outcome = "Computer wins!";
		} else {
			outcome = NonsenseRand;
		}
	


	} else if(computer_move === "paper"){
		if(user_move === "rock"){
			outcome = WinRand;
		} else if (user_move === "paper"){
			outcome = "it's a draw";
		} else if(user_move === "scissors"){
			outcome = "Computer wins!";
		} else {
			outcome = NonsenseRand;
		}

	} else if(computer_move === "scissors"){
		if(user_move === "rock"){
			outcome = WinRand;
		} else if (user_move === "paper"){
			outcome = "Computer wins :(";
		} else if(user_move === "scissors"){
			outcome = "it's a draw";
		} else {
			outcome = NonsenseRand;
		}


	} 

	console.log("the outcome of the game is:", outcome);

	var outcome_div = document.getElementById("outcome");
	outcome_div.innerHTML = outcome;

function PlayAgain() {
	if (confirm("Press a button!") == true) {
        // x = "You pressed OK!";
    } else {
        // x = "You pressed Cancel!";
    }
}

}

function keyPressed ( _context ,_key ) {
	if (_key.keyCode === 13) {
		play()
	};
	
}



// $(.document).ready(main);




