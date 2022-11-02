'use strict'

import { drawCircle } from "../loads/draw.js";
import { createElement } from "../loads/elementCreate.js";
import configuracoesIniciais from "./configuraçõesIniciais.js";
import Colisao from "../eventos/colisao.js";

class Frutas {
    #create() {
        createElement('fruta', 'fruta')
    }

    #getRandomCoordinates (colunas = configuracoesIniciais.colunas, linhas = configuracoesIniciais.linhas) {
        const randomX = randomInt(1, colunas);
        const randomY = randomInt(1, linhas);
    
        this.x = randomX;
        this.y = randomY;
    }
    
    constructor(x, y, snake) {
        this.x = x;
        this.y = y;
        this.#create();
        this.$HTMLElement = document.getElementById('fruta');
        this.draw();
        this.snake = snake;
    }

    draw() {
        drawCircle(this.$HTMLElement, this.x, this.y, '100%');
    }

    mudaParaLocalRandom() {
        this.#getRandomCoordinates();
        while(Colisao.pontoCorpo(this, this.snake)){
            this.#getRandomCoordinates();
        }
        
        this.draw()
    }

    comer() {
        moveSnake(snake.rabo, -1)
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


export default Frutas