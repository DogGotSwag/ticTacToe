function createPlayer( name , symbol){

    let playerSymbol = symbol;
    let playerName = name;

    let getSymbol = () => playerSymbol;
    let getPlayerName = () => playerName;

    return { getSymbol, getPlayerName };
}


const gameBoard = ( function(){
    let array = [ 
        ['blank','blank','blank' ],
        ['blank','blank','blank' ],
        ['blank','blank','blank' ]
    ];

    let resetTheBoard = () =>{
        array = [ 
            ['blank','blank','blank' ],
            ['blank','blank','blank' ],
            ['blank','blank','blank' ]
        ];    
    }

    let getArray = () =>{
        let copy = array;
        return copy;
    }

    let displayBoard = () => {
        console.log(array[0]);
        console.log(array[1]);
        console.log(array[2]);

    }

    let setPos = ( row, col , symbol) => {
        if( array[row][col] == 'blank' ){
            array[row][col] = symbol;
        }
    }

    let checkIfWinner = (symbolOne, symbolTwo) => {

        let winner = '';

        //checks for row winner
        for( let i = 0 ; i < 3; i++){
            if( (array[i][0] == symbolOne) && (array[i][1] == symbolOne) && ( array[i][2] == symbolOne) ){
                winner = symbolOne;
            }
            else if( (array[i][0] == symbolTwo) && (array[i][1] == symbolTwo) && ( array[i][2] == symbolTwo) ) {
                winner = symbolTwo;
            }
        }

        //check for cols winner

        for ( let i = 0; i < 3; i++){
            if( (array[0][i] == symbolOne) && (array[1][i] == symbolOne) && (array[2][i] == symbolOne) ){
                winner = symbolOne;
            }

            else if( (array[0][i] == symbolTwo) && (array[1][i] == symbolTwo) && (array[2][i] == symbolTwo) ){
                winner = symbolTwo;
            }
        }

        //check for diagonals 

        if( (array[0][0] == symbolOne) && (array[1][1] == symbolOne) && (array[2][2] == symbolOne)){
            winner = symbolOne;
        }
        else if( (array[0][0] == symbolTwo) && (array[1][1] == symbolTwo) && (array[2][2] == symbolTwo)){
            winner = symbolTwo;
        }
        else if( (array[0][2] == symbolOne) && (array[1][1] == symbolOne) && (array[2][0] == symbolOne)){
            winner = symbolOne;
        }
        else if( (array[0][2] == symbolTwo) && (array[1][1] == symbolTwo) && (array[2][0] == symbolTwo)){
            winner = symbolOne;
        }


        return winner;

    }

    return {setPos , checkIfWinner, getArray , displayBoard, resetTheBoard};
}
)();

const gameFlow = function( oName, xName){

    let moves = 0
    let playerOne = createPlayer( oName, 'O');

    let playerTwo = createPlayer( xName, 'X');

    let isThereWinner = false;

    let displayBoard = () => {
        let currentStateOfGame = gameBoard.getArray();
        console.clear();
        console.log( currentStateOfGame[0] );
        console.log( currentStateOfGame[1] );
        console.log( currentStateOfGame[2] );

    }

    let playNextMove = (row , cols) => {
        if( !isThereWinner ){
            ++moves;
            if( (moves % 2) == 0){
                gameBoard.setPos( row, cols , playerTwo.getSymbol() );
            }
            else{
                gameBoard.setPos( row, cols , playerOne.getSymbol() );
            }
    
            displayBoard();

            if( gameBoard.checkIfWinner( playerOne.getSymbol(), playerTwo.getSymbol() ) != '' ){
                isThereWinner = true;
            }
            
        }
        if( isThereWinner){
            if( (moves % 2) == 0){
                displayController.updateResults( playerTwo.getPlayerName());
            }
            else{
                displayController.updateResults(playerOne.getPlayerName());
            }
        }
        else if( moves == 9){
            displayController.updateResults('');
        }



    }
    return { playNextMove };
}



let displayController = ( function(){
    let symbolBoxes = Array.from(document.querySelectorAll('.symbol-area'));
    let currentBoard = gameBoard.getArray();

    let symbolIndex = 0;
    let changeDomToCurrentBoard = () => {
        alert('used');

        for( let i = 0; i < 3; i++){

            for( j = 0; j < 3; j++){
                if(currentBoard[i][j] != 'blank'){
                    symbolBoxes[symbolIndex].innerText = currentBoard[i][j];
                }
                symbolIndex++;
            }
        }

        symbolIndex = 0;
    }


    let startButton = document.querySelector('.start');
    let body = document.querySelector('body');

    let inputSec = document.querySelector('.inputSec');
    let oInput = document.querySelector('#o');
    let xInput = document.querySelector('#x');

    let gameSec = document.querySelector('.game-area');
    let resultsBox = document.querySelector('.resultsBox');
    let restartButton = document.querySelector('.restartButton');

    let game = Object;


    startButton.addEventListener( 'click', () =>{
        if( (oInput.value !== '') && (xInput.value !== '') ){
            body.removeChild(startButton);
            inputSec.style.cssText = 'position: absolute; visibility: hidden';
            gameSec.style.cssText = 'position: static; visibility:visible';
            resultsBox.style.cssText = 'position: static; visibility:visible';
            restartButton.style.cssText = 'position: static; visibility:visible';

            game = gameFlow( oInput.value, xInput.value);

        }
        else{
            alert('stop your tomfoolery and input your names');
        }
        

    });

    let boxes = document.querySelectorAll('.symbol-area');

    boxes.forEach( key => {
        key.addEventListener( 'click', ( event ) =>{
            let squareClicked = event.target;
            let row = squareClicked.classList[1];
            let col = squareClicked.classList[2];
            if(squareClicked.classList[1] == 'zero') row = 0;

            else if( squareClicked.classList[1] == 'one') row = 1;
            else row = 2; 

            game.playNextMove(row, col );
            displayController.changeDomToCurrentBoard();

        });
    });

    let resultsText = document.querySelector('.theResults');

    let updateResults = (winner) => {
        if( winner == ''){
            resultsText.innerText = 'It\'s a tie';
        }
        else{
            resultsText.innerText = `The winner is ${winner}`;
        }
    }

    restartButton.addEventListener('click', () =>{
        alert('pressed');
    });

    return{ changeDomToCurrentBoard , updateResults };
})(document);


