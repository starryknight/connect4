jQuery(function() {

  //reset button
  $('#reset').click(function(){
      $('.red').addClass('circle');
	  $('.blue').addClass('circle');
	  $('.circle').removeClass('red');
	  $('.circle').removeClass('blue');
	  $('.circle').text().replace('');
  });


  /* Variables */
  var row = 5;
  var column = 6;
  var boardCircles = [];
  var players = [];

  

  // Player 1 start
  var currentPlayer =  $('#current-player').html("Player 1");

  // Made board spots where index i represents rows and j represents columns
  for (var i = 0; i < row; i++) {
      boardCircles[i] = [];
     for (var j = 0; j < column; j++) {
          boardCircles[i][j] = $('<div>');
          boardCircles[i][j].addClass('circle');
          // console.log('boardCircles -->', boardCircles[i][j]);
          $('.container').append(boardCircles[i][j]);
     }
  }

  var player = 1;

  //this function was created to respond to a click event
  var playGame = function() {

    /*all elements with class "circle" has a click event
     *when the player click on a particular element, it will return its index
     *I noticed that the first column of the grid (board) has indexes that are multiple of 6*/
    $('.circle').click(function() {
        console.log('hi');
        var position = $(this).index();
        console.log('position clicked', position);
        var counter = 0;
        var startPosition = 0;
        var endPosition = 0;


             /*so if the player click on a div from the first column,
              *when it is divided by 6, it will get a remainder of 0,
              which means that the player clicked on the 1st column */
            if(position % 6 === 0) {
                console.log('if statement running');
                var j = 0;
                startPosition = 25;
                endPosition = 25;
                var d = 92;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }

               /*if the player click on a div from the second column,
                *when it is divided by 6, it will get a remainder of 1,
                which means that the player clicked on the 2nd column and so on*/
              if(position % 6 === 1) {
                var j = 1;
                startPosition = 25+92;
                endPosition = 25+92;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }

              }
              if(position % 6 === 2) {
                var j = 2;
                startPosition = 25+92*2;
                endPosition = 25+92*2;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
              if(position % 6 === 3) {
                var j = 3;
                startPosition = 25+92*3;
                endPosition = 25+92*3;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
              if(position % 6 === 4) {
                var j = 4;
                startPosition = 25+92*4;
                endPosition = 25+92*4;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
              if(position % 6 === 5) {
                var j = 5;
                startPosition = 25+92*5;
                endPosition = 25+92*5;
                // console.log(left);
                if (player === 1) {
                    fillAvailableSlots(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableSlots(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }
      });


}
playGame();


    //This function creates a div and slide it down on the board
    function move(column, leftStart, leftEnd, color)  {

        //total height of container = 350
        var totalHeight = 370;
        var distanceBtwDivs = 80;
        //create a div
        var slideCircle = $('<div>');
        // slideCircle.addClass('slide-circle');
        //add it a class of color
        slideCircle.addClass(color);
        //set left position to it according to the argument given in the function
        slideCircle.css('left', leftStart);
        //append this div to the container, which represents the board
        $('.container').append(slideCircle);

        //account for number of available slots on the board
        var numOfSlots = 0;
        for (var i = 0; i < row; i++) {
            if(boardCircles[i][column].hasClass('.circle')){
              numOfSlots += 1;
            }
        }

        /*if there are 5 available slots then distance to slide piece down on the board
         *will be total height of the container
         */
        if (numOfSlots === 5) {
            slideCircle.animate({top: totalHeight, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }

        /*if there are 4 available slots then distance to slide piece down on the board
         *will be total height of the container minus 1 slot lenght
         */
        if (numOfSlots === 4) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        /*if there are 3 available slots then distance to slide piece down on the board
         *will be total height of the container minus 2 slot lenght and so on...
         */
        if (numOfSlots === 3) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 2, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfSlots === 2) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 3, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfSlots === 1) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 4, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfSlots === 0) {
            slideCircle.fadeOut(50);
        }
    }

    //this function scan each row of a particular column and return the number of available slots
    function fillAvailableSlots(column, color, numOfSlots) {
        var numOfSlots = 0;
        for (var i = 0; i < row; i++) {
          console.log('varredura');
            if(boardCircles[i][column].hasClass('circle')){
              numOfSlots += 1;
            }
        }
        console.log('number of available slots', numOfSlots);
        if (numOfSlots !== 0) {
          boardCircles[numOfSlots-1][column].removeClass('circle');
          boardCircles[numOfSlots-1][column].addClass(color);
        }

        setTimeout(fillAvailableSlots, 2000);
    }

	/* Checking for tie game
	   Scans rows and columns for Arrays
     */
    var checkTiedGame = function(array) {
        var counter = 0;
        for (var i = 0; i < row; i++) {
            for (var j = 0; j < column; j++) {
                if (array[i][j].hasClass('blue') || array[i][j].hasClass('red')) {
                    counter += 1;
                }
            }
        }

        //if counter is equals to 30, which is the total number of slots on the grid, it will send an alert
        if (counter === 30) {
          console.log('checkTiedGame---> if statement')
          setTimeout(function(){
            alert ('Tie!!!');
          }, 250);
        }
    }

    //this function check all the possible combinations to win the game
    var checkForWinner = function(circles) {
        // console.log('checkWinner');
        // console.log(circles);

        //scan rows
        for (var j = 0; j < 3; j++) {
          for (var i = 0; i < row; i++) {
            //if statement that checks if blue has a sequence in any row
            if (circles[i][j].hasClass('blue') && circles[i][j+1].hasClass('blue') && circles[i][j+2].hasClass('blue') && circles[i][j+3].hasClass('blue'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Blue Wins!');
                }, 250);
            }
            //if statement that checks if red has a sequence in any row
            if (circles[i][j].hasClass('red') && circles[i][j+1].hasClass('red') && circles[i][j+2].hasClass('red') && circles[i][j+3].hasClass('red'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Red Wins!');
                }, 250);
            }
          }
        }

        //scan columns
        for (var i = 0; i < 2; i++) {
          for (var j = 0; j < column; j++) {
            //if statement that check if blue has a sequence in any column
            if (circles[i][j].hasClass('blue') && circles[i+1][j].hasClass('blue') && circles[i+2][j].hasClass('blue') && circles[i+3][j].hasClass('blue'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Blue Wins!');
                }, 250);
            }
            //if statement that check if red has a sequence in any column
            if (circles[i][j].hasClass('red') && circles[i+1][j].hasClass('red') && circles[i+2][j].hasClass('red') && circles[i+3][j].hasClass('red'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Red Wins!');
                }, 250);
            }
          }
        }

        //scan diagonal
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                //if statement = blue completes a diagonal of 4 in a row
                if (circles[i][j].hasClass('blue') && circles[i+1][j+1].hasClass('blue') && circles[i+2][j+2].hasClass('blue') && circles[i+3][j+3].hasClass('blue') ||
                    circles[i][j+3].hasClass('blue') && circles[i+1][j+2].hasClass('blue') && circles[i+2][j+1].hasClass('blue') && circles[i+3][j].hasClass('blue'))
                {
                    console.log('checkWinner ---> if statement')
                    setTimeout(function(){
                      alert ('Blue Wins!!!');
                    }, 250);
                }
                //if statement = red completes a diagonal of 4 in a row
                if (circles[i][j].hasClass('red') && circles[i+1][j+1].hasClass('red') && circles[i+2][j+2].hasClass('red') && circles[i+3][j+3].hasClass('red')||
                    circles[i][j+3].hasClass('red') && circles[i+1][j+2].hasClass('red') && circles[i+2][j+1].hasClass('red') && circles[i+3][j].hasClass('red'))
                {
                    console.log('checkWinner ---> if statement')
                    setTimeout(function(){
                      alert ('Red Wins!');
                    }, 250);
                }
            }
        }
    }

	/* Score Variables */
var player1Score = 0;
var player2Score = 0;

});
