'use strict'

import { loadElements } from "../../loads/loadInicial/loadInicial.js"

/**
 * gerencia a resposta a troca de cores na lista de cores, respondendo com a troca de cores do background e dos elementos
 */
 function dropListCores(configuracoes, snake, fruta) {
    const $listaDeCores = document.getElementById('listaDeCores')
    
    $listaDeCores.addEventListener('change', (event) => {
        //recebe variáveis externas através do evento e do objeto configurações
        const {screenHeight, screenWidth, colunas, linhas} = configuracoes
        const cores = JSON.parse(event.target.value)

        //cria os atributos CSS a serem carregados nos objetos
        const backGroundColor = `var(${cores.corBackgroundVarCSS})`
        const objectColor = `var(${cores.corFonteVarCSS})`

        //atualiza as cores dos objetos configurações, cobra e fruta para que toda vez que os mesmos sejam redesenhados seja feito com as novas cores
        configuracoes.screenColor = backGroundColor;
        configuracoes.snakeColor = objectColor;
        snake.color = objectColor;
        fruta.cor = objectColor;

        //resesenha todos os elementos
        loadElements (screenHeight, screenWidth, backGroundColor, colunas, linhas, objectColor)
        snake.carregarCor();
        fruta.draw();

        //retira o foco da lista para que o uso dos botões direcionais no jogo não causem mudanças na lista
        evento.target.blur();
    })
}

export default dropListCores;