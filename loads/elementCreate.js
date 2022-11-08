'use strict'

import {conectPartesSnake} from './draw.js'
import {SnakePart} from '../objetos/Snake.js'



function createElement (classe, id) {
    let $background = document.querySelector('.background');
    let element = document.createElement('div');
    element.classList.add(classe);
    element.id = id;
    $background.appendChild(element);
}

function criaCurvaSnake(snake, parte) {
    console.log(snake.color, snake.cabeca.color, snake.rabo.color, snake.curvasDoCorpo)
    const numDeCurvas = snake.curvasDoCorpo.length
    let numId = '1';
    if (numDeCurvas > 0) {
        const lastCurvaId = snake.curvasDoCorpo[numDeCurvas - 1].id;
        numId = parseInt(lastCurvaId.substring(10)) + 1;
    }
    const curvaId = 'snake-node' + numId;
    snake.curvasDoCorpo.push(new SnakePart('snake-curve', curvaId, parte.x, parte.y, parte.direcao, snake.color));
    snake.curvasDoCorpo[numDeCurvas].draw();

    const parteConectadaNaCurvaNova = (numDeCurvas > 0 ? snake.curvasDoCorpo[numDeCurvas - 1] : snake.rabo)

    conectPartesSnake(snake.curvasDoCorpo[numDeCurvas], parteConectadaNaCurvaNova)
    console.log(snake.color, snake.cabeca.color, snake.rabo.color, snake.curvasDoCorpo)
}

export {createElement, criaCurvaSnake}