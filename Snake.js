'use strict'

import drawCircle from "./draw.js";

function createElement (classe, id) {
    let $background = document.querySelector('.background');
    let element = document.createElement('div');
    element.classList.add(classe);
    element.id = id;
    $background.appendChild(element);
}

class SnakePart {
    #create () {
        createElement(this.classe, this.id)
    }
    

    constructor (classe, id, x, y, direcao) {
        this.x = x;
        this.y = y;
        this.classe = classe;
        this.direcao = direcao;
        this.id = id;
        this.#create()
        this.$HTMLElement = document.getElementById(this.id)
    }


    draw () {
        drawCircle(this.$HTMLElement, this.x, this.y)
    }
}

const snake = {
    cabeca: new SnakePart('snake-part', 'snake-head', 50, 28, 'right'),
    rabo: new SnakePart('snake-part', 'snake-tail', 47, 28, 'right'),
    curvasDoCorpo: []
}

export {snake, SnakePart}

// const cabeca = new SnakePart('snake-part', 'snake-head', 50, 28, 'up');
// const rabo = new SnakePart('snake-part', 'snake-tail', 47, 28, 'up');

// const teste = new SnakePart('snake-part', 'snake-part1', 1, 1, 1)
// teste.create()
// teste.draw()