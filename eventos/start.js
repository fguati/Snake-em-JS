'use strict'

import { getMoveKey, startButton, dropListCores, dropListDificuldades } from '../controls.js'
import { loadInicial } from "../loads/loadInicial.js"
import Configuracoes from '../objetos/configurações.js'

let configuracoesIniciais = new Configuracoes(400, 700, '#000000', 7, 4, '#FFFFFF', 100)

function startGame(configuracoes = configuracoesIniciais) {


    document.addEventListener('DOMContentLoaded', () => {
        let {snake, fruta, placar} = loadInicial(configuracoes)
        getMoveKey(snake, snake.cabeca);
        startButton('Shift', snake, fruta, placar, configuracoes);
        dropListCores(configuracoes, snake, fruta, placar);
        dropListDificuldades(snake, 0, fruta, placar, configuracoes);
    })

}

startGame();

export default startGame
