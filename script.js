const gameBoard = ( function(){
    let array = [ 
        ['blank','blank','blank' ],
        ['blank','blank','blank' ],
        ['blank','blank','blank' ]
    ];

    return {array};
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
