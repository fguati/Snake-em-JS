'use strict'

import { coordenadascIniciaisSnake } from '../loads/loadInicial.js'
import { conectCabecaRabo } from '../loads/draw.js'

function restart(snake, timer, fruta, placar, configuracoes) {
    console.log(snake)
    const {screenHeight, screenWidth, pixelSize, snakeSize} = configuracoes

    clearInterval(timer);
    snake.curvasDoCorpo.forEach((curva) => {curva.destroy()})
    snake.curvasDoCorpo = [];
    
    const coordenadasCabeca = coordenadascIniciaisSnake(screenWidth, screenHeight, pixelSize);
    const coordenadasRabo = {x: coordenadasCabeca.x - snakeSize, y: coordenadasCabeca.y}

    resetSnakePart(snake.cabeca, coordenadasCabeca)
    resetSnakePart(snake.rabo, coordenadasRabo)

    fruta.mudaParaLocalRandom();
    placar.zerar();

    conectCabecaRabo(snake);
    console.log(snake)
}

function resetSnakePart(parte, coordenadas) {
    parte.x = coordenadas.x;
    parte.y = coordenadas.y;
    parte.direcao = 'right';
    parte.draw()
}

export default restart