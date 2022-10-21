'use strict'

import { Snake } from './Snake.js'
import { desenhoInicialSnake } from "./draw.js"

const configuracoesIniciais = {
    screenHeight: 400,
    screenWidth: 700,
    screenColor: '#000000',
    pixelSize: 7,
    snakeSize: 15
}

function coordenadascIniciaisSnake (width, height, pixelSize) {
    const colunas = (width / pixelSize);
    const linhas = (height / pixelSize);
    const snakeX = Math.round(colunas / 2);
    const snakeY = Math.round(linhas / 2);

    return {'x': snakeX, 'y': snakeY}
}

function loadBackground (height, width, color, pixelSize){
    const $background = document.querySelector('.background');
    const colunas = Math.round(width / pixelSize);
    const linhas = Math.round(height / pixelSize);

    $background.style.width = `${width}px`;
    $background.style.height = `${height}px`;
    $background.style.backgroundColor = color;
    $background.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
    $background.style.gridTemplateRows = `repeat(${linhas}, 1fr)`;
    
}

function loadInicial (width = configuracoesIniciais.screenWidth, height = configuracoesIniciais.screenHeight, pixelSize = configuracoesIniciais.pixelSize, color = configuracoesIniciais.screenColor, snakeSize = configuracoesIniciais.snakeSize) {    
    const coordenadasIniciais = coordenadascIniciaisSnake (width, height, pixelSize)

    loadBackground(height, width, color, pixelSize);

    const snake = new Snake(coordenadasIniciais.x, coordenadasIniciais.y, snakeSize)
    desenhoInicialSnake(snake);

    return snake
}

export { loadInicial, coordenadascIniciaisSnake, configuracoesIniciais }
