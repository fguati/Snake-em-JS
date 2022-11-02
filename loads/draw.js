'use strict'

function drawCircle (element, x, y, radius = '10%', color = "#FFFFFF") {
    element.style.borderRadius = radius;
    element.style.background = color;
    element.style.gridColumn = x;
    element.style.gridRow = y;
    element.style.width = '100%';
}

function drawSnakeSegment (parte, x, y, spanX, spanY) {
    parte.$HTMLElement.style.gridArea = `${y} / ${x} / span ${spanY} / span ${spanX}`;
}

function conectPartesSnake (parteAnterior, partePosterior) {
    drawCircle(parteAnterior.$HTMLElement, parteAnterior.x, parteAnterior.y);
    const distX = (parteAnterior.x - partePosterior.x);
    const distY = (parteAnterior.y - partePosterior.y);

    if (distX === 0) {
        if (distY > 0) {
            drawSnakeSegment(parteAnterior, parteAnterior.x, partePosterior.y, 1, distY + 1)
        } else if (distY < 0) {
            drawSnakeSegment(parteAnterior, parteAnterior.x, parteAnterior.y, 1, Math.abs(distY) + 1)
        } else {
            drawSnakeSegment(parteAnterior, parteAnterior.x, parteAnterior.y, 1, 1)
        }
    } else if (distY === 0) {
        if (distX > 0) {
            drawSnakeSegment(parteAnterior, partePosterior.x, parteAnterior.y, distX + 1, 1)
        } else if (distX < 0) {
            drawSnakeSegment(parteAnterior, parteAnterior.x, parteAnterior.y, Math.abs(distX) + 1, 1)
        } else {
            drawSnakeSegment(parteAnterior, parteAnterior.x, parteAnterior.y, 1, 1)
        }
    }

}

function conectCabecaRabo (snake) {
    if(snake.curvasDoCorpo.length === 0) {
        conectPartesSnake(snake.cabeca, snake.rabo)
    }
}

function desenhoInicialSnake (snake) {
    snake.cabeca.draw();
    snake.rabo.draw();
    conectPartesSnake(snake.cabeca, snake.rabo);
}



export  {drawCircle, conectPartesSnake, conectCabecaRabo, desenhoInicialSnake}