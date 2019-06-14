(function() {

	var ConnectFour = function() {

		board = {};
		player1 = 'blue';
		rows = 6;
		cols = 7;
		turns = 0;
		
		_init = function() {
			
			var columns;
			
			columns = document.querySelectorAll('.column');
			
			Array.prototype.forEach.call(columns, function(col) {
				col.addEventListener('click', function() {
					markNextFree(col.getAttribute('x'));
				});
			});
			
			for(var x = 0; x <= rows; x++) {
			
				board[x] = {};
				
				for(var y = 0; y <= cols; y++) {
					board[x][y] = 'free';
				}
			}
			
		};
		
		var markNextFree = function(x) {

			var nextY;
			
			nextY = false;
			
			for(var y = 0; y < rows; y++) {
				if(board[x][y] === 'free') {
					nextY = y;
					break;
				}
			}
			
			if(nextY === false) {
				alert('No free spaces in this column. Try another.');
				return false;
			}
			
			board[x][nextY] = player1;
			
			document.querySelector('#column-'+x+' .row-'+nextY+' circle').setAttribute(
					'class', player1
			);
			
			if(isWinner(parseInt(x), nextY)) {
				alert(player1+' wins!');
				clearBoard();
				return true;
			}

			turns = turns + 1;

			if(turns >= rows * cols) {
				alert('It\'s a tie!');
				clearBoard();
				return true;				
			}

			player1 = player1 === 'blue' ? 'red' : 'blue';

		};
		
		var clearBoard = function() {
			
			Array.prototype.forEach.call(document.querySelectorAll('circle'), function(piece) {
				piece.setAttribute('class', 'free');
			});
			
			board = {};

			for(var x = 0; x <= rows; x++) {
			
				board[x] = {};
				
				for(var y = 0; y <= cols; y++) {
					board[x][y] = 'free';
				}
        
          console.log(board);
			}

			turns = 0;
			
			return board;

		};

		var isWinner = function(currentX, currentY) {
			return checkDirection(currentX, currentY, 'vertical') || 
				checkDirection(currentX, currentY, 'diagonal') || 
				checkDirection(currentX, currentY, 'horizontal');
		};
		
		var isBounds = function(x, y) {
			return (board.hasOwnProperty(x) && typeof board[x][y] !== 'undefined');
		};

		var checkDirection = function(currentX, currentY, direction) {
		
			var chainLength, directions;
			
			directions = {
				horizontal: [
					[0, -1], [0, 1]
				],
				vertical: [
					[-1, 0], [1, 0]
				],
				diagonal: [
					[-1, -1], [1, 1], [-1, 1], [1, -1]
				]
			};
			
			chainLength = 1;
			
			directions[direction].forEach(function(coords) {
				
				var i = 1;

				while( isBounds(currentX + (coords[0] * i), currentY + (coords[1] * i)) && 
					(board[currentX + (coords[0] * i)][currentY + (coords[1] * i)] === player1)
				) {
					chainLength = chainLength + 1; 
					i = i + 1; 
				};
				
			});
			
			return (chainLength >= 4);
			
		};
		
		_init();
		
	};

	ConnectFour();
  
	
})();
