'use strict'

import SnakePart from '../objetos/snake/SnakePart.js'

/**
 * a função createElement cria elementos HTML no background do jogo, sendo usada principalmente para a criação dinâmica de elementos, como as curvas do corpo da cobra
 */
function createElement (classe, id) {
    let $background = document.querySelector('.background');
    let element = document.createElement('div');
    element.classList.add(classe);
    element.id = id;
    $background.appendChild(element);
}

/**
 * criaCurvaSnake cria uma nova curva da cobra, adicionando-a ao corpo da mesma
 * e criando a representação visual da mesma
 */
function criaCurvaSnake(snake) {
    const numDeCurvas = snake.curvasDoCorpo.length
    
    //criação do Id da nova curva
    let numId = '1';
    if (numDeCurvas > 0) {
        const lastCurvaId = snake.curvasDoCorpo[numDeCurvas - 1].id;
        numId = parseInt(lastCurvaId.substring(10)) + 1;
    }
    const curvaId = 'snake-node' + numId;

    //criação da nova curva
    const cabeca = snake.cabeca;
    const novaCurva = new SnakePart('snake-curve', curvaId, cabeca.x, cabeca.y, cabeca.direcao, snake.color);
    
    //inclusão da curva nova no corpo da cobra
    snake.curvasDoCorpo.push(novaCurva);

    //criação da representação visual da curva
    novaCurva.draw();

    return novaCurva;
}

export {createElement, criaCurvaSnake}