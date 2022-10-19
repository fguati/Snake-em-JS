'use strict'

function drawCircle (element, x, y) {
    element.style.borderRadius = '20%';
    element.style.background = "#FFFFFF"
    element.style.gridColumn = x;
    element.style.gridRow = y;
    element.style.width = '100%';
}

// function defineReta (ponto1, ponto2) {
//     const deltaX = ponto1.x - ponto2.x;
//     const a = (ponto1.y - ponto2.y) / deltaX;
//     const b = ((ponto1.x * ponto2.y) - (ponto2.x * ponto1.y)) / deltaX;
// }

function drawSnakeSegment (parte, x, y, spanX, spanY) {
    parte.$HTMLElement.style.gridArea = `${y} / ${x} / span ${spanY} / span ${spanX}`;
    console.log(parte.id, `${y} / ${x} / span ${spanY} / span ${spanX}`)
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



export  {drawCircle, conectPartesSnake}