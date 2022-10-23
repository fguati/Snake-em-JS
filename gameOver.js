'use strict'

import { configuracoesIniciais, coordenadascIniciaisSnake } from './loadInicial.js'
import { conectCabecaRabo } from './draw.js'

function gameOver(snake, timer, fruta) {
    clearInterval(timer);
    snake.curvasDoCorpo.forEach((curva) => {curva.destroy()})
    snake.curvasDoCorpo = [];
    
    const width = configuracoesIniciais.screenWidth;
    const height = configuracoesIniciais.screenHeight;
    const pixelSize = configuracoesIniciais.pixelSize;

    const coordenadasCabeca = coordenadascIniciaisSnake(width, height, pixelSize);

    const cabeca = snake.cabeca;
    const rabo = snake.rabo;

    cabeca.x = coordenadasCabeca.x;
    cabeca.y = coordenadasCabeca.y;
    cabeca.direcao = 'right';

    rabo.x = coordenadasCabeca.x - configuracoesIniciais.snakeSize;
    rabo.y = coordenadasCabeca.y;
    rabo.direcao = 'right';

    fruta.mudaParaLocalRandom();

    conectCabecaRabo(snake);
    // snake = loadInicial();
    console.log(snake);
}

export default gameOver
