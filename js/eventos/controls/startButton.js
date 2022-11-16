'use strict'

import continousLoad from '../../loads/continousLoad.js'

/**
 * adiciona event listener chamado pelo botão start e que chama a função que faz o jogo rodar
 */
 function startButton(button, snake, fruta, placar, configuracoes) {
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === button) {
            continousLoad(snake, 1, fruta, placar, configuracoes)
        }
    })

    const $botaoIniciar = document.getElementById('botaoIniciar')
    $botaoIniciar.addEventListener('click', () => continousLoad(snake, 1, fruta, placar, configuracoes))
}

export default startButton;