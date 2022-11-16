'use strict'

import { getMoveKey, startButton, dropListCores, dropListDificuldades } from './js/eventos/controls/index.js'
import { loadInicial } from "./js/loads/loadInicial/loadInicial.js"
import Configuracoes from './js/objetos/configurações.js'

//seta configurações iniciais
let configuracoesIniciais = new Configuracoes(400, 700, '#000000', 7, 4, '#FFFFFF', 100)

/**
 * função startgame chama todas as funções necessárias para iniciar o jogo: loadInicial, responsável por carregar os elementos visuais e instanciar os objetos relacionados 
 * a esses elementos, e o conjunto de funções que adicionam os event listeners que funcionam como controles para o jogo (getMoveKey, startButton, dropListCores e dropDificuldades).
 * Os as funções pauseButton e restartButton não são chamadas no carregamento do DOM pois elas recebem como entrada o timer instanciado pelo botão start, logo elas são chamadas 
 * quando o timer é instanciado
 */
function startGame(configuracoes = configuracoesIniciais) {

    document.addEventListener('DOMContentLoaded', () => {
        //instanciando objetos e carregando elementos visuais
        let {snake, fruta, placar} = loadInicial(configuracoes)
        
        //adicionando todos os event listeners necessários para os controles do jogo
        getMoveKey(snake);
        startButton('Shift', snake, fruta, placar, configuracoes);
        dropListCores(configuracoes, snake, fruta, placar);
        dropListDificuldades(snake, 0, fruta, placar, configuracoes);
    })

}

startGame();

export default startGame
