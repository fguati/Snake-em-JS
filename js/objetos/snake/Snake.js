'use strict'

import Colisao from '../../eventos/colisao.js'
import {conectPartesSnake} from '../../loads/draw.js'
import SnakePart from "./SnakePart.js";

/**
 * classe que gerencia a cobra no jogo. A cobrada é formada pela cabeça, um array com todas as curvas do corpo e o rabo
 */
class Snake {
    //método que executa todos os comportamentos relacionados à cobra comer a fruta: mudar a fruta para uma nova posição, aumentar a pontuação no placar e aumentar a cobra (o que é feito movendo o rabo na direção oposta à qual ele estava indo)
    #comerFruta (fruta, placar, colunas, linhas) {
        fruta.mudaParaLocalRandom(colunas, linhas, this)
        placar.pontuar()
        this.rabo.move(-1)
    }

    //ao instanciar a cobra a função construtora imediatamente instancia a cabeça, o rabo e o array de curvas
    constructor (xCabeca, yCabeca, tamanho, color) {
        this.color = color;
        this.cabeca = new SnakePart('snake-head', 'snake-head', xCabeca, yCabeca, 'right',color),
        this.rabo = new SnakePart('snake-tail', 'snake-tail', xCabeca - tamanho, yCabeca, 'right', color),
        this.curvasDoCorpo = new Array(0)
    }

    //método que elimina curvas tanto do HTML através do método destroy do objeto curva, quanto do array curvasDoCorpo
    eliminarCurva(curva) {
        curva.destroy();
        
        const curvas = this.curvasDoCorpo;
        const indiceCurva = curvas.indexOf(curva);
        if(indiceCurva === 0) {
            curvas.shift();
        }
    }

    //método que checa se houve colisão entre a cabeça e a fruta e, se sim, chama o método comerFruta
    checaComeuFruta (fruta, placar, configuracoes) {
        const {linhas, colunas} = configuracoes
        if (Colisao.pontoPonto(fruta, this.cabeca)) {
            this.#comerFruta(fruta, placar, colunas, linhas)
        }
    }

    //método que cria a representação gráfica da cobra no início do jogo
    desenhoInicial () {
        this.cabeca.draw(this.color);
        this.rabo.draw(this.color);
        conectPartesSnake(this.cabeca, this.rabo);
    }

    //método que altera a cor de todos os elementos que compõe a cobra (tanto o HTML quanto os objetos) para o atributo color da própria cobra
    carregarCor() {
        this.cabeca.carregarCor(this.color);
        this.rabo.carregarCor(this.color);

        if(this.curvasDoCorpo.length > 0) {
            this.curvasDoCorpo.forEach(curva => curva.carregarCor(this.color))
        }
    }
}

export {Snake, SnakePart}

