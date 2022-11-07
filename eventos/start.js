'use strict'

import { getMoveKey, startButton, restarButton } from '../controls.js'
import { loadInicial } from "../loads/loadInicial.js"
import Configuracoes from '../objetos/configurações.js'

const configuracoesIniciais = new Configuracoes(400, 700, '#000000', 7, 4, '#FFFFFF')

function startGame(configuracoes = configuracoesIniciais) {
    
    document.addEventListener('DOMContentLoaded', () => {
        let {snake, fruta, placar} = loadInicial(configuracoes)
        console.log(fruta)
        getMoveKey(snake, snake.cabeca);
        startButton('Shift', snake, fruta, placar, configuracoes);
        // restarButton(snake, )
    })

}

startGame();

export default startGame
