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
    // You can preload assets here (e.g., chess piece images, etc.)
}

function create() {
    // Draw the chessboard
    drawChessBoard(this);
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