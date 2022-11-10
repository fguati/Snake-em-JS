'use strict'

import { coordenadascIniciaisSnake } from '../loads/loadInicial.js'
import { conectCabecaRabo } from '../loads/draw.js'

function restart(snake, timer, fruta, placar, configuracoes) {
    const {screenHeight, screenWidth, pixelSize, snakeSize, colunas, linhas} = configuracoes

    clearInterval(timer);
    snake.curvasDoCorpo.forEach((curva) => {curva.destroy()})
    snake.curvasDoCorpo = [];
    
    const coordenadasCabeca = coordenadascIniciaisSnake(screenWidth, screenHeight, pixelSize);
    const coordenadasRabo = {x: coordenadasCabeca.x - snakeSize, y: coordenadasCabeca.y}

    resetSnakePart(snake.cabeca, coordenadasCabeca)
    resetSnakePart(snake.rabo, coordenadasRabo)

    fruta.mudaParaLocalRandom(colunas, linhas);
    placar.zerar();

    conectCabecaRabo(snake);
}

function resetSnakePart(parte, coordenadas) {
    parte.x = coordenadas.x;
    parte.y = coordenadas.y;
    parte.direcao = 'right';
    parte.draw()
}

export default restart