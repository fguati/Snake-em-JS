'use strict'

import { drawCircle } from "../loads/draw.js";
import { createElement } from "../loads/elementCreate.js";
import Colisao from "../eventos/colisao.js";

/**
 * classe responsável por gerenciar o comportamento das frutas a serem comidas pela cobra
 */
class Frutas {
    
    //cria elemento HTML para a fruta
    #create() {
        createElement('fruta', 'fruta')
    }

    //função que define coordenadas aleatórias dentro do background para a fruta poder aparecer nelas
    #getRandomCoordinates (colunas, linhas) {
        const randomX = randomInt(1, colunas);
        const randomY = randomInt(1, linhas);
    
        this.x = randomX;
        this.y = randomY;
    }
    
    //assim que a fruta é instanciada o elemento HTML dela é imediatamente criado e a representação gráfica é feita através do método draw
    constructor(x, y, configuracoes) {
        this.x = x;
        this.y = y;
        this.#create();
        this.$HTMLElement = document.getElementById('fruta');
        this.cor = configuracoes.snakeColor
        this.draw();
        // this.snake = snake;
    }

    //cria representação gráfica da fruta
    draw() {
        drawCircle(this.$HTMLElement, this.x, this.y, '100%', this.cor);
    }

    //método que muda a localização da fruta para uma posição aleatória que não colide com a cobra
    mudaParaLocalRandom(colunas, linhas, snake) {
        this.#getRandomCoordinates(colunas, linhas);
        while(Colisao.pontoCorpo(this, snake)){
            this.#getRandomCoordinates();
        }
        
        this.draw()
    }

}

//função auxiliar que gera um inteiro aleatório entre dois valores recebidos de entrada
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


export default Frutas