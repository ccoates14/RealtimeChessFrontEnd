import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image('whiteking', 'assets/whiteking.png');
    this.load.image('whitequeen', 'assets/whitequeen.png');
    this.load.image('whitebishop', 'assets/whitebishop.png');
    this.load.image('whiteknight', 'assets/whiteknight.png');
    this.load.image('whiterook', 'assets/whiterook.png');
    this.load.image('whitepawn', 'assets/whitepawn.png');
    
    this.load.image('blackking', 'assets/blackking.png');
    this.load.image('blackqueen', 'assets/blackqueen.png');
    this.load.image('blackbishop', 'assets/blackbishop.png');
    this.load.image('blackknight', 'assets/blackknight.png');
    this.load.image('blackrook', 'assets/blackrook.png');
    this.load.image('blackpawn', 'assets/blackpawn.png');
}

function create() {
    // Draw the chessboard
    drawChessBoard(this);

    this.add.sprite(100, 100, 'whiteking');  // White King
    this.add.sprite(200, 100, 'whitequeen');  // White Queen
    this.add.sprite(300, 100, 'whitebishop');  // White Bishop
    this.add.sprite(100, 200, 'whiteknight');  // White Knight
    this.add.sprite(200, 200, 'whiterook');  // White Rook
    this.add.sprite(300, 200, 'whitepawn');  // White Pawn

    // Create the Black Pieces (lowercase names)
    this.add.sprite(100, 300, 'blackking');  // Black King
    this.add.sprite(200, 300, 'blackqueen');  // Black Queen
    this.add.sprite(300, 300, 'blackbishop');  // Black Bishop
    this.add.sprite(100, 400, 'blackknight');  // Black Knight
    this.add.sprite(200, 400, 'blackrook');  // Black Rook
    this.add.sprite(300, 400, 'blackpawn');  // Black Pawn
}

function update() {
    // Update logic (e.g., piece movement, game state, etc.)
}

function drawChessBoard(scene) {
    const boardSize = 8; // 8x8 chessboard
    const squareSize = config.width / boardSize;

    // Create a graphics object to draw on the screen
    const graphics = scene.add.graphics();

    // Loop through the rows and columns to draw the squares
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            // Alternate colors for the chessboard
            const color = (row + col) % 2 === 0 ? 0xFFFFFF : 0x000000; // White and Black squares
            graphics.fillStyle(color, 1);
            graphics.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
        }
    }

    // Optionally, add some labels for the rows and columns
    const style = { fontSize: '20px', fill: '#000' };
    for (let i = 0; i < boardSize; i++) {
        scene.add.text(i * squareSize + squareSize / 3, boardSize * squareSize + 10, String.fromCharCode(65 + i), style); // A-H
        scene.add.text(-30, i * squareSize + squareSize / 3, (boardSize - i).toString(), style); // 1-8
    }
}

function getSquareCoordinates(coord) {
    const boardSize = 8; // 8x8 chessboard
    const squareSize = config.width / boardSize;

    const col = coord.charCodeAt(0) - 65;
    const row = boardSize - parseInt(coord[1]);

    return { x: col * squareSize, y: row * squareSize };
}