const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();

const staticSquare = {
    x: 300,
    y: 100,
    size: 200
};

const square = {
    x: 120,
    y: 20,
    size: 100,
    color: "#FF0000"
};

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSquare() {
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, square.size, square.size);
}

function drawStaticSquare() {
    ctx.fillStyle = "#000000";
    ctx.fillRect(staticSquare.x, staticSquare.y, staticSquare.size, staticSquare.size);
}

function redrawAll() {
    clearCanvas();
    drawSquare();
    drawStaticSquare();
}

function isCrash() {
    function centerX(square) {return (square.x + square.size / 2)}
    function centerY(square) {return (square.y + square.size / 2)}
    let invalidX = Math.abs(centerX(square) - centerX(staticSquare)) <= (square.size + staticSquare.size) / 2;
    let invalidY = Math.abs(centerY(square) - centerY(staticSquare)) <= (square.size + staticSquare.size) / 2;
    return invalidX && invalidY;
}

redrawAll();
document.addEventListener("keydown", function (event) {
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    switch (event.keyCode) {
        case LEFT:
            square.x -= 3;
            break;
        case RIGHT:
            square.x += 3;
            break;
        case UP:
            square.y -= 3;
            break;
        case DOWN:
            square.y += 3;
            break;
    }
    if (isCrash()) {
        square.color = '#0000FF';
    } else {
        square.color = '#FF0000';
    }
    redrawAll();
});