'use strict'

import restart from "../restart.js";

/**
 * adiciona o event listener que chama a função que reseta o jogo. Usado pelo botão restart do jogo
 */
 function restarButton(snake, timer, fruta, placar, configuracoes) {
    const $botaoRestart = document.getElementById('botaoRestart');
    $botaoRestart.addEventListener('click', () => {
        restart(snake, timer, fruta, placar, configuracoes)
    })
}

export default restarButton;