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
    constructor (classe, id, x, y, direcao) {
        this.x = x;
        this.y = y;
        this.classe = classe;
        this.direcao = direcao;
        this.id = id;
    }

    create () {
        createElement(this.classe, this.id)
    }

    draw () {
        const $snakePart = document.getElementById(this.id)
        drawCircle($snakePart, this.x, this.y)
    }
}

export default SnakePart

// const teste = new SnakePart('snake-part', 'snake-part1', 1, 1, 1)
// teste.create()
// teste.draw()