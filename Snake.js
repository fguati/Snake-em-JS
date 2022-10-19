'use strict'

import {drawCircle} from "./draw.js";
import {createElement} from "./elementCreate.js"

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

    destroy() {
        const $background = document.querySelector('.background');
        $background.removeChild(this.$HTMLElement)
    }
}

class Snake {
    constructor (xCabeca, yCabeca, tamanho) {
        this.cabeca = new SnakePart('snake-head', 'snake-head', xCabeca, yCabeca, 'right'),
        this.rabo = new SnakePart('snake-tail', 'snake-tail', xCabeca - tamanho, yCabeca, 'right'),
        this.curvasDoCorpo = new Array(0)
    }
}

// const snake = {
//     cabeca: new SnakePart('snake-head', 'snake-head', 50, 28, 'right'),
//     rabo: new SnakePart('snake-tail', 'snake-tail', 37, 28, 'right'),
//     curvasDoCorpo: new Array(0)
// }

export {Snake, SnakePart}

