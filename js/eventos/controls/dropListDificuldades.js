'use strict'

import { loadElements } from "../../loads/loadInicial/loadInicial.js";
import restart from "../restart.js";

//lista de objetos de configurações de dificuldade, em que cada um tem como atributos as dimensões da tela nessa dificuldade e o intervalo de tempo entre ticks (o que por sua vez determina a velocidade da cobra)
const configDificuldades = {
    facil: {
        width: 700,
        height: 400,
        tickInterval: 100
    },
    medio: {
        width: 500,
        height: 500,
        tickInterval: 80
    },
    dificil: {
        width: 365,
        height: 300,
        tickInterval: 60
    },
}

/**
 * gerencia a resposta a mudanças na droplist de dificuldades, que altera o tamanho da tela e velocidade da cobra
 */
 function dropListDificuldades(snake, timer, fruta, placar, configuracoes) {
    const $listaDificuldades = document.getElementById('listaDeDificuldades');
    
    $listaDificuldades.addEventListener('change', (evento) => {
        //recebe variáveis externas do objeto configurações e do array global configDificuldades
        const dificuldade = evento.target.value;
        const { screenColor, snakeColor } = configuracoes;
        const width = configDificuldades[dificuldade].width;
        const height = configDificuldades[dificuldade].height;
        const tickInterval = configDificuldades[dificuldade].tickInterval;

        //altera o objeto configurações com os novos valores obtidos do array configDificuldades
        configuracoes.screenHeight = height;
        configuracoes.screenWidth = width;
        configuracoes.tickInterval = tickInterval;

        //redesenha a área do jogo com novas configurações e reinicia o jogo para reposicionar a cobra e a fruta em posições que caibam dentro da nova área
        loadElements(height, width, screenColor, configuracoes.colunas, configuracoes.linhas, snakeColor)
        restart(snake, timer, fruta, placar, configuracoes)
        
        //retira o foco da lista para que o uso dos botões direcionais no jogo não causem mudanças na lista
        evento.target.blur();
    })
}

export default dropListDificuldades;