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

    let resetArray = () =>{
        array = [ 
            ['blank','blank','blank' ],
            ['blank','blank','blank' ],
            ['blank','blank','blank' ]
        ];
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

        let isThereWinner = false;

        //checks for row winner
        for( let i = 0 ; i < 3; i++){
            if( (array[i][0] == symbolOne) && (array[i][1] == symbolOne) && ( array[i][2] == symbolOne) ){
                isThereWinner = true;
            }
            else if( (array[i][0] == symbolTwo) && (array[i][1] == symbolTwo) && ( array[i][2] == symbolTwo) ) {
                isThereWinner = true;
            }
        }

        //check for cols winner

        for ( let i = 0; i < 3; i++){
            if( (array[0][i] == symbolOne) && (array[1][i] == symbolOne) && (array[2][i] == symbolOne) ){
                isThereWinner = true;
            }

            else if( (array[0][i] == symbolTwo) && (array[1][i] == symbolTwo) && (array[2][i] == symbolTwo) ){
                isThereWinner = true;
            }
        }

        //check for diagonals 

        if( (array[0][0] = symbolOne) && (array[1][1] == symbolOne) && (array[2][2] == symbolOne)){
            isThereWinner = true;
        }
        else if( (array[0][0] = symbolTwo) && (array[1][1] == symbolTwo) && (array[2][2] == symbolTwo)){
            isThereWinner = true;
        }
        else if( (array[0][2] = symbolOne) && (array[1][1] == symbolOne) && (array[2][0] == symbolOne)){
            isThereWinner = true;
        }
        else if( (array[0][2] = symbolTwo) && (array[1][1] == symbolTwo) && (array[2][0] == symbolTwo)){
            isThereWinner = true;
        }


        return isThereWinner;

    }

    return {setPos , checkIfWinner, resetArray , displayBoard};
}
)();

const gameFlow = function(){

    let moves = 0
    let playerOne = createPlayer( 'emily', 'O');

    let playerTwo = createPlayer('didier', 'X');

    let playNextMove = (row , cols) => {
        if( (moves % 2) == 0){
            gameBoard.setPos( row, cols , playerTwo.getSymbol() );
        }
        else{
            gameBoard.setPos( row, cols , playerOne.getSymbol() );
        }
    }
    return { playNextMove };
}





