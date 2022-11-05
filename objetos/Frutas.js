'use strict'

import { drawCircle } from "../loads/draw.js";
import { createElement } from "../loads/elementCreate.js";
import Colisao from "../eventos/colisao.js";

class Frutas {
    #colunas;
    #linhas;
    
    #create() {
        createElement('fruta', 'fruta')
    }

    #getRandomCoordinates () {
        const randomX = randomInt(1, this.#colunas);
        const randomY = randomInt(1, this.#linhas);
    
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
        this.#colunas = configuracoes.colunas
        this.#linhas = configuracoes.linhas
    }

    draw() {
        drawCircle(this.$HTMLElement, this.x, this.y, '100%', this.cor);
    }

    mudaParaLocalRandom() {
        this.#getRandomCoordinates();
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