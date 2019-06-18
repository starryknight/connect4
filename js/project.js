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
  // var player1Score = 0;
  // var player2Score = 0;
  

  // Player 1 start
  var currentPlayer =  $('#current-player').html("Player 1");

  // Made board spots where index i means rows and j means columns
  for (var i = 0; i < row; i++) {
      boardCircles[i] = [];
     for (var j = 0; j < column; j++) {
          boardCircles[i][j] = $('<div>');
          boardCircles[i][j].addClass('circle');
          $('.container').append(boardCircles[i][j]);
     }
  }

  var player = 1;

  //click event for circles
  var playGame = function() {

    /*
     *when player clicks on a element, it returns its index*/
    // multiples of 6
    $('.circle').click(function() {
        var position = $(this).index();
        console.log('position clicked', position);
        var counter = 0;
        var startPosition = 0;
        var endPosition = 0;


             /* if player clicks spot from 1st column its divided by 6 
             it will equal 0 which means its on the 1st column */
            if(position % 6 === 0) {
                console.log('if statement running');
                var j = 0;
                startPosition = 25;
                endPosition = 25;
                var d = 92;
                
                if (player === 1) {
                    fillAvailableMoves(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableMoves(j, "red");
                    move(j, startPosition, endPosition, "slide-red");
                    player = 1;
                    currentPlayer = $('#current-player').text("Player 1");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                }
              }

               /* if player click spot from 2nd column its divided by 6 and will = 1,
                player clicked 2nd column ect.*/
              if(position % 6 === 1) {
                var j = 1;
                startPosition = 25+92;
                endPosition = 25+92;
                
                if (player === 1) {
                    fillAvailableMoves(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableMoves(j, "red");
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

                if (player === 1) {
                    fillAvailableMoves(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableMoves(j, "red");
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

                if (player === 1) {
                    fillAvailableMoves(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableMoves(j, "red");
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

                if (player === 1) {
                    fillAvailableMoves(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableMoves(j, "red");
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

                if (player === 1) {
                    fillAvailableMoves(j, "blue");
                    move(j, startPosition, endPosition, "slide-blue");
                    player += 1;
                    currentPlayer = $('#current-player').text("Player 2");
                    checkForWinner(boardCircles);
                    checkTiedGame(boardCircles);
                } else {
                    fillAvailableMoves(j, "red");
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


    //function for slide down
    function move(column, leftStart, leftEnd, color)  {

        //height of container = 350
        var totalHeight = 370;
        var distanceBtwDivs = 80;

        //jquery to make a div
        var slideCircle = $('<div>');
       
        //add a class of color
        slideCircle.addClass(color);

        //set left to function
        slideCircle.css('left', leftStart);

        //append div container, represents the board
        $('.container').append(slideCircle);

        //account for number of available moves on the board
        var numOfMoves = 0;
        for (var i = 0; i < row; i++) {
            if(boardCircles[i][column].hasClass('.circle')){
              numOfMoves += 1;
            }
        }

        /*if there are 5 available moves
        total height
         */
        if (numOfMoves === 5) {
            slideCircle.animate({top: totalHeight, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }

        /*if there are 4 available moves
         total height minus 1 slot length ect.
         */
        if (numOfMoves === 4) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        
        if (numOfMoves === 3) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 2, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfMoves === 2) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 3, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfMoves === 1) {
            slideCircle.animate({top: totalHeight - distanceBtwDivs * 4, left: leftEnd}, 200);
            slideCircle.fadeOut(50);
        }
        if (numOfMoves === 0) {
            slideCircle.fadeOut(50);
        }
    }

    // function to check rows of column and return number of available moves
    function fillAvailableMoves(column, color, numOfMoves) {
        var numOfMoves = 0;
        for (var i = 0; i < row; i++) {
          
            if(boardCircles[i][column].hasClass('circle')){
              numOfMoves += 1;
            }
        }
        console.log('number of available moves', numOfMoves);
        if (numOfMoves !== 0) {
          boardCircles[numOfMoves-1][column].removeClass('circle');
          boardCircles[numOfMoves-1][column].addClass(color);
        }

        setTimeout(fillAvailableMoves, 2000);
    }

	/* Checking for tie game
	   checks rows and columns for Arrays
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

        //if counter is equals to 30, which is the total number of moves on the grid, it will send an alert
        if (counter === 30) {
          console.log('checkTiedGame---> if statement')
          setTimeout(function(){
            alert ('Tie!!!');
          }, 250);
        }
    }

    //checks all possible combinations for win 
    var checkForWinner = function(circles) {


        //check rows
        for (var j = 0; j < 3; j++) {
          for (var i = 0; i < row; i++) {
            //checks if blue has a sequence in rows
            if (circles[i][j].hasClass('blue') && circles[i][j+1].hasClass('blue') && circles[i][j+2].hasClass('blue') && circles[i][j+3].hasClass('blue'))
            {
                
              // // var player1Score ++
              //   player1Score ++
              //    $('#player1 .score').val() = player1Score
              //    console.log(player1Score)
              //    console.log($('#player1 .score'))


              console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Blue Wins!');
                });

                
            }
            // if red sequence in any row
            if (circles[i][j].hasClass('red') && circles[i][j+1].hasClass('red') && circles[i][j+2].hasClass('red') && circles[i][j+3].hasClass('red'))
            {
                console.log('checkWinner ---> if statement')
                setTimeout(function(){
                  alert ('Red Wins!');
                });
            }
          }
        }

        //check columns
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


});
