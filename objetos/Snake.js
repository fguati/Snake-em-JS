'use strict'

import {drawCircle} from "../loads/draw.js";
import {createElement} from "../loads/elementCreate.js"
import Colisao from '../eventos/colisao.js'
import { conectPartesSnake } from "../loads/draw.js";

class SnakePart {
    #create () {
        createElement(this.classe, this.id)
    }

    constructor (classe, id, x, y, direcao, color) {
        this.x = x;
        this.y = y;
        this.classe = classe;
        this.direcao = direcao;
        this.id = id;
        this.color = color;
        this.#create();
        this.$HTMLElement = document.getElementById(this.id)
    }

    draw (radius = '10%', color = this.color) {
        drawCircle(this.$HTMLElement, this.x, this.y, radius, color)
    }

    carregarCor (cor = this.color) {
        this.$HTMLElement.style.background = cor;
        this.color = cor;
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
    #comerFruta (fruta, placar, colunas, linhas) {
        fruta.mudaParaLocalRandom(colunas, linhas)
        placar.pontuar()
        this.rabo.move(-1)
    }

    constructor (xCabeca, yCabeca, tamanho, color) {
        this.color = color;
        this.cabeca = new SnakePart('snake-head', 'snake-head', xCabeca, yCabeca, 'right',color),
        this.rabo = new SnakePart('snake-tail', 'snake-tail', xCabeca - tamanho, yCabeca, 'right', color),
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

    checaComeuFruta (fruta, placar, configuracoes) {
        console.log(configuracoes)
        const {linhas, colunas} = configuracoes
        if (Colisao.pontoPonto(fruta, this.cabeca)) {
            this.#comerFruta(fruta, placar, colunas, linhas)
            console.log('comeu',configuracoes)
        }
    }

    desenhoInicial () {
        this.cabeca.draw(this.color);
        this.rabo.draw(this.color);
        conectPartesSnake(this.cabeca, this.rabo);
    }

    
    carregarCor() {
        this.cabeca.carregarCor(this.color);
        this.rabo.carregarCor(this.color);

        if(this.curvasDoCorpo.length > 0) {
            this.curvasDoCorpo.forEach(curva => curva.carregarCor(this.color))
        }
    }
}

export {Snake, SnakePart}

