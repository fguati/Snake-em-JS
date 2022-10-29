'use strict'

import {drawCircle} from "./draw.js";
import {createElement} from "./elementCreate.js"
import Colisao from './colisao.js'

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

    mudaDirecao(dir) {
        this.direcao = dir;
    }

    move(veloc) {
        switch (this.direcao) {
            case 'up':
                this.y -= veloc
                break
            case 'down':
                this.y += veloc
                break
            case 'left':
                this.x -= veloc
                break
            case 'right':
                this.x += veloc
                break
        }
    
        return this.draw()
    }
}

class Snake {
    constructor (xCabeca, yCabeca, tamanho) {
        this.cabeca = new SnakePart('snake-head', 'snake-head', xCabeca, yCabeca, 'right'),
        this.rabo = new SnakePart('snake-tail', 'snake-tail', xCabeca - tamanho, yCabeca, 'right'),
        this.curvasDoCorpo = new Array(0)
    }

    eliminarCurva(curva) {
        curva.destroy();
        
        const curvas = this.curvasDoCorpo;
        const indiceCurva = curvas.indexOf(curva);
        if(indiceCurva === 0) {
            curvas.shift();
        }
    }

    checaComeuFruta (fruta) {
        if (Colisao.pontoPonto(fruta, this.cabeca)) {
            console.log('comeu')
            fruta.mudaParaLocalRandom()
            fruta.comer()
            // chama comeu fruta
        }
    }

    
}

export {Snake, SnakePart}

