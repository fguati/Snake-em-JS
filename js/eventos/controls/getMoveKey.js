'use strict'

import Colisao from "../colisao.js";
import { criaCurvaSnake } from "../../loads/elementCreate.js";
import { conectaCurvaNova } from "../../loads/draw.js";
import { parseDirection } from "./auxiliares.js";

/**
 * adiciona os controles de direção do jogo.
 */
 function getMoveKey(snake) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        
        //trata a saída do botão pressionado no teclado
        checarTeclaValida (teclaDir);
        let dir = teclaDir.substring(5).toLowerCase();
        dir = parseDirection(dir);

        //chama resposta do botão
        respostaDoBotao (dir, snake)
    })
}

//checa se tecla pressionada é válida e, caso não seja lança erro
function checarTeclaValida (teclaString) {
    if (!isArrowKey (teclaString)) {
        throw new Error('Tecla não aceita')
    }
}

//checa se botão apertado é uma arrow key
function isArrowKey (teclaString) {
    return teclaString.substring(0, 5) === 'Arrow'
}

//determina se duas direções são opostas
function saoDirecoesOpostas (dir1, dir2) {
    if (dir1[0] === dir2[0]) {
        return dir1[1] === -dir2[1];
    }

    if (dir1[1] === dir2[1]) {
        return dir1[0] === -dir2[0];
    }
    
}

//função que dá a resposta a pressionar teclas direcionais no teclado: mudar direção que a cabeça move para a direção pressionada, criar uma nova curva que altera a direção do rabo para a direção pressionada e fazer a conexão da nova curva
function respostaDoBotao (dir, snake) {
    //primeiramente checa se a direção pressionada é oposta a direção da parte, para garantir que não haja resposta caso seja. (Se houvesse resposta causaria um game over automatico com a cabeça imediatamente colidindo com o corpo)
    if (!saoDirecoesOpostas(snake.cabeca.direcao, dir)) {
        //checa se a a cabeça está colidindo com alguma das curvas, para garantir que não sejam criadas duas curvas que ocupem o mesmo espaço, o que causava bugs
        if(!Colisao.pontoComAlgumaCurva(snake, snake.cabeca)){
            //resposta do botão
            snake.cabeca.direcao = dir;
            const novaCurva = criaCurvaSnake(snake);
            conectaCurvaNova(snake, novaCurva);
        }
    }

}

export default getMoveKey;