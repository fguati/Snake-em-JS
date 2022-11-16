'use strict'

import { parseDirection } from "../../eventos/controls/index.js";
import {createElement} from "../../loads/elementCreate.js";
import {drawCircle} from "../../loads/draw.js";

/**
 * classe usada para instanciar as partes da cobra, tanto o rabo e a cabeça quanto
 * as curvas do corpo
 */
class SnakePart {
    /** 
     * o atributo direcao é privado para que sempre que ele seja setado seja através
     * da função parseDirection, de forma que o formato esteja correto
    */
    #direcao
    #create () {
        createElement(this.classe, this.id)
    }

    /** 
     * ao instanciar uma parte a função parseDirection é usada para garantir que a direção
     * recebida está no formato correto. Além disso o elemento HTML também é criado
     * imediatamente pela função construtora
     */
    constructor (classe, id, x, y, direcao, color) {
        this.x = x;
        this.y = y;
        this.classe = classe;
        this.#direcao = parseDirection(direcao);
        this.id = id;
        this.color = color;
        this.#create();
        this.$HTMLElement = document.getElementById(this.id)
    }

    //função que cria a representação gráfica da parte
    draw (radius = '10%', color = this.color) {
        drawCircle(this.$HTMLElement, this.x, this.y, radius, color)
    }

    //função que atualiza a cor da parte tanto no atributo quanto no elemento HTML
    carregarCor (cor = this.color) {
        this.$HTMLElement.style.background = cor;
        this.color = cor;
    }

    //função que elimina elemento HTML da parte
    destroy() {
        const $background = document.querySelector('.background');
        $background.removeChild(this.$HTMLElement)
    }

    //função setters e getters para direção 
    set direcao(dir){
        this.#direcao = parseDirection(dir);
    }
    get direcao() {
        return this.#direcao
    }

    //função que move a parte na tela, alterando suas coordenadas e a redesenhando
    move(veloc) {
        this.x += this.direcao[0] * veloc;
        this.y += this.direcao[1] * veloc;
        return this.draw()
    }
}

export default SnakePart