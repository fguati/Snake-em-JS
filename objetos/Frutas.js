'use strict'

import { drawCircle } from "../loads/draw.js";
import { createElement } from "../loads/elementCreate.js";
import Colisao from "../eventos/colisao.js";

class Frutas {
    
    #create() {
        createElement('fruta', 'fruta')
    }

    #getRandomCoordinates (colunas, linhas) {
        const randomX = randomInt(1, colunas);
        const randomY = randomInt(1, linhas);
    
        this.x = randomX;
        this.y = randomY;
    }
    
    constructor(x, y, snake, configuracoes) {
        this.x = x;
        this.y = y;
        this.#create();
        this.$HTMLElement = document.getElementById('fruta');
        this.cor = configuracoes.snakeColor
        this.draw();
        this.snake = snake;
    }

    draw() {
        drawCircle(this.$HTMLElement, this.x, this.y, '100%', this.cor);
    }

    mudaParaLocalRandom(colunas, linhas) {
        this.#getRandomCoordinates(colunas, linhas);
        while(Colisao.pontoCorpo(this, this.snake)){
            this.#getRandomCoordinates();
        }
        
        this.draw()
    }

}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


export default Frutas