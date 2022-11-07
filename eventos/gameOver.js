'use strict'

import Colisao from './colisao.js'
import restart from './restart.js'

function checaGameOver (snake, timer, fruta, placar, configuracoes) {
    const {screenHeight, screenWidth, pixelSize} = configuracoes

    if (Colisao.pontoCorpo (snake.cabeca, snake) || Colisao.comBordaDaTela(snake.cabeca,screenHeight, screenWidth, pixelSize)) { //telaHeight = configuracoesIniciais.screenHeight, telaWidth = configuracoesIniciais.screenWidth, pixelSize = configuracoesIniciais.pixelSize
        console.log('Colisão!')
        restart(snake, timer, fruta, placar, configuracoes);
    }
}


export default checaGameOver
