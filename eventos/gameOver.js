'use strict'

import Colisao from './colisao.js'
import restart from './restart.js'

/** a função checa game over checa se a cabeça da cobra colidiu com o corpo dela ou com a borda da tela e, caso sim, chama a função restart, que reinicia o jogo */
function checaGameOver (snake, timer, fruta, placar, configuracoes) {
    const {screenHeight, screenWidth, pixelSize} = configuracoes

    if (Colisao.pontoCorpo (snake.cabeca, snake) || Colisao.comBordaDaTela(snake.cabeca,screenHeight, screenWidth, pixelSize)) { 
        console.log('Colisão!')
        restart(snake, timer, fruta, placar, configuracoes);
    }
}


export default checaGameOver
