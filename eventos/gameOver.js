'use strict'

import { coordenadascIniciaisSnake } from '../loads/loadInicial.js'
import { conectCabecaRabo } from '../loads/draw.js'
import Colisao from './colisao.js'
import configuracoesIniciais from '../objetos/configuraçõesIniciais.js'

function restart(snake, timer, fruta) {
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
}

function checaGameOver (snake, timer, fruta) {
    if (Colisao.pontoCorpo (snake.cabeca, snake) || Colisao.comBordaDaTela(snake.cabeca)) {
        console.log('Colisão!')
        restart(snake, timer, fruta);
    }
}

export default checaGameOver
