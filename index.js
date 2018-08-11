const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
ctx.beginPath();

let x = 20, y = 20;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawSquare() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 100, 100);
}

drawSquare();

function redrawSquare() {
    clearCanvas();
    drawSquare();
}

function moveLeft() {
    x -= 3;
    redrawSquare();
}

function moveRight() {
    x += 3;
    redrawSquare();
}

function moveUp() {
    y -= 3;
    redrawSquare();
}

function moveDown() {
    y += 3;
    redrawSquare();
}


document.addEventListener("keydown", function (event) {
    const LEFT = 37;
    const RIGHT = 39;
    const UP = 38;
    const DOWN = 40;

    switch (event.keyCode) {
        case LEFT:
            moveLeft();
            break;
        case RIGHT:
            moveRight();
            break;
        case UP:
            moveUp();
            break;
        case DOWN:
            moveDown();
            break;
    }
});