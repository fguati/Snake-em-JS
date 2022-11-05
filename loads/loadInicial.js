'use strict'

import { Snake } from '../objetos/Snake.js'
import { desenhoInicialSnake } from "../loads/draw.js"
import Frutas from '../objetos/Frutas.js'
import placar from '../objetos/placar.js'

function coordenadascIniciaisSnake (width, height, pixelSize) {
    const colunas = (width / pixelSize);
    const linhas = (height / pixelSize);
    const snakeX = Math.round(colunas / 2);
    const snakeY = Math.round(linhas / 2);

    return {'x': snakeX, 'y': snakeY}
}

function loadBackground (height, width, color, colunas, linhas){
    const $background = document.querySelector('.background');

    $background.style.width = `${width}px`;
    $background.style.height = `${height}px`;
    $background.style.backgroundColor = color;
    $background.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
    $background.style.gridTemplateRows = `repeat(${linhas}, 1fr)`;
    
}

function loadInicial (configuracoes) {    
    const {screenWidth, screenHeight, pixelSize, screenColor, snakeSize, colunas, linhas} = configuracoes
    const coordenadasIniciais = coordenadascIniciaisSnake (screenWidth, screenHeight, pixelSize)

    loadBackground(screenHeight, screenWidth, screenColor, colunas, linhas);

    const snake = new Snake(coordenadasIniciais.x, coordenadasIniciais.y, snakeSize)
    desenhoInicialSnake(snake);

    const fruta = new Frutas(10, 15, snake, configuracoes)
    return {snake, fruta, placar}
}

export { loadInicial, coordenadascIniciaisSnake }
