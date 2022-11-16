'use strict'

/**
 * adiciona o event listener para pausar o jogo usado pelo botão de pausa
 */
 function pauseButton(button, timer) {
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === button) {
            clearInterval(timer)
        }
    })

    const $botaoPausar = document.getElementById('botaoPausa')
    $botaoPausar.addEventListener('click', () => clearInterval(timer))
}

export default pauseButton;