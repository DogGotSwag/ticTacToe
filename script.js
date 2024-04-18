const gameBoard = ( function(){
    let array = [ 
        ['blank','blank','blank' ],
        ['blank','blank','blank' ],
        ['blank','blank','blank' ]
    ];

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

    return {setPos , checkIfWinner, array};
}
)();

const displayController = ( function(){
})();


function createPlayer( name , symbol){

    let playerSymbol = symbol;
    let playerName = name;

    let getSymbol = () => playerSymbol;
    let getPlayerName = () => playerName;

    return { getSymbol, getPlayerName };
}

let x = createPlayer('didier', 'X');
let o = createPlayer( 'emily', 'O');

gameBoard.setPos( 0, 0, o.getSymbol());

gameBoard.setPos( 1, 1, o.getSymbol());

gameBoard.setPos( 2, 0, o.getSymbol());
gameBoard.setPos( 2, 1, x.getSymbol());

gameBoard.setPos( 1, 0, x.getSymbol());

gameBoard.setPos( 0, 2, o.getSymbol())

console.log( gameBoard.array[0]);
console.log( gameBoard.array[1]);
console.log( gameBoard.array[2]);

console.log("\n");

console.log( gameBoard.checkIfWinner( o.getSymbol(), x.getSymbol()));


