
function startGame() {
    let i = 0;
    let starter1 = document.querySelectorAll('.starter1');
    let starter2 = document.querySelectorAll('.starter2');

    starter1.forEach((tile) => {
        
        const playerOnePiece = document.createElement('div');
        playerOnePiece.id = `player1${i}`;
        playerOnePiece.className = 'player1Pieces'
        playerOnePiece.setAttribute("draggable","true");
        playerOnePiece.setAttribute("ondragstart",'drag(event)');
        tile.appendChild(playerOnePiece);
        console.log(`player1 i: ${i}`);
        i++;
        }); 
    i = 0;
    starter2.forEach((tile) => {
        const playerTwoPiece = document.createElement('div');
        playerTwoPiece.id = `player2${i}`;
        playerTwoPiece.className = 'player2Pieces';
        playerTwoPiece.setAttribute("draggable","true");
        playerTwoPiece.setAttribute("ondragstart",'drag(event)');
        tile.appendChild(playerTwoPiece);   
        console.log(`player2 i: ${i}`)
        i++;
    }); 

}

function resetGame() {
    const playerPieces = document.querySelectorAll('.player1Pieces,.player2Pieces');
    playerPieces.forEach(piece => {
        piece.remove();
        i = 0;
    });
}

function drag(event) {
    event.dataTransfer.setData("text",event.target.id);
}

function onDragOver(event){
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


