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


    return {setPos , array};
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

gameBoard.setPos( 0, 0, x.getSymbol());
gameBoard.setPos( 1, 0, o.getSymbol());

console.log( gameBoard.array[0]);
console.log( gameBoard.array[1]);
console.log( gameBoard.array[2]);
