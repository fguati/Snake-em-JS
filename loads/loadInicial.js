'use strict'

import { Snake } from '../objetos/Snake.js'
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

function loadBottomBar(width, backgroundColor, elementColor) {
    const $bottomBar = document.querySelector('.bottomBar');
    const $placar = document.querySelector('.placar');

    $bottomBar.style.width = `${width}px`;
    $bottomBar.style.backgroundColor = backgroundColor;
    $bottomBar.style.borderTop = `1px solid ${elementColor}`
    $placar.style.color = elementColor;
}

function loadInicial (configuracoes) {    
    const {screenWidth, screenHeight, pixelSize, screenColor, snakeSize, snakeColor, colunas, linhas} = configuracoes
    const coordenadasIniciais = coordenadascIniciaisSnake (screenWidth, screenHeight, pixelSize)

    const snake = new Snake(coordenadasIniciais.x, coordenadasIniciais.y, snakeSize, snakeColor)
    const fruta = new Frutas(10, 15, snake, configuracoes)

    loadElements (screenHeight, screenWidth, screenColor, colunas, linhas, snakeColor)
    snake.desenhoInicial();

    return {snake, fruta, placar}
}

function loadElements (screenHeight, screenWidth, screenColor, colunas, linhas, snakeColor) {
    loadBackground(screenHeight, screenWidth, screenColor, colunas, linhas);
    loadBottomBar(screenWidth, screenColor, snakeColor);
}

export { loadInicial, coordenadascIniciaisSnake, loadElements }
