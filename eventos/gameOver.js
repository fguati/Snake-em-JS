'use strict'

import { coordenadascIniciaisSnake } from '../loads/loadInicial.js'
import { conectCabecaRabo } from '../loads/draw.js'
import Colisao from './colisao.js'

function restart(snake, timer, fruta, placar, configuracoes) {
    console.log(configuracoes)
    const {screenHeight, screenWidth, pixelSize, snakeSize} = configuracoes

    clearInterval(timer);
    snake.curvasDoCorpo.forEach((curva) => {curva.destroy()})
    snake.curvasDoCorpo = [];
    
    const coordenadasCabeca = coordenadascIniciaisSnake(screenWidth, screenHeight, pixelSize);
    const coordenadasRabo = {x: coordenadasCabeca.x -snakeSize, y: coordenadasCabeca.y}

    resetSnakePart(snake.cabeca, coordenadasCabeca)
    resetSnakePart(snake.rabo, coordenadasRabo)

    fruta.mudaParaLocalRandom();
    placar.zerar();

    conectCabecaRabo(snake);
}

function checaGameOver (snake, timer, fruta, placar, configuracoes) {
    const {screenHeight, screenWidth, pixelSize} = configuracoes

    if (Colisao.pontoCorpo (snake.cabeca, snake) || Colisao.comBordaDaTela(snake.cabeca,screenHeight, screenWidth, pixelSize)) { //telaHeight = configuracoesIniciais.screenHeight, telaWidth = configuracoesIniciais.screenWidth, pixelSize = configuracoesIniciais.pixelSize
        console.log('Colisão!')
        restart(snake, timer, fruta, placar, configuracoes);
    }
}

function resetSnakePart(parte, coordenadas) {
    parte.x = coordenadas.x;
    parte.y = coordenadas.y;
    parte.direcao = 'right';
}

export default checaGameOver
