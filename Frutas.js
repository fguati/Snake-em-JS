'use strict'

import { drawCircle } from "./draw.js";
import { createElement } from "./elementCreate.js";
import { configuracoesIniciais } from "./loadInicial.js";

class Frutas {
    #create() {
        createElement('fruta', 'fruta')
    }
    
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.#create();
        this.$HTMLElement = document.getElementById('fruta')
        this.draw()
        this.mudaParaLocalRandom()
    }

    draw() {
        drawCircle(this.$HTMLElement, this.x, this.y, '100%');
        console.log('desenhou')
    }

    mudaParaLocalRandom(colunas = configuracoesIniciais.colunas, linhas = configuracoesIniciais.linhas) {
        const randomX = randomInt(1, colunas);
        const randomY = randomInt(1, linhas);

        this.x = randomX;
        this.y = randomY;

        this.draw()
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

export default Frutas