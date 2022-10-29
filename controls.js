'use strict'

import {criaCurvaSnake} from './elementCreate.js'
import continousLoad from './continousLoad.js'

function pauseButton(button, timer) {
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === button) {
            clearInterval(timer)
        }
    })
}

function startButton(button, snake, fruta) {
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === button) {
            continousLoad(snake, 1, 100, fruta)
        }
    }) 
}

function getMoveKey(snake, parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        
        checarTeclaValida (teclaDir)

        const dir = teclaDir.substring(5).toLowerCase()
        respostaDoBotao (parte, dir, snake)
        console.log('botao')
    })
}

function removeMoveKey(snake, parte) {
    document.removeEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        
        checarTeclaValida (teclaDir)

        const dir = teclaDir.substring(5).toLowerCase()
        respostaDoBotao (parte, dir, snake)
    })
}

function saoDirecoesOpostas (dir1, dir2) {
    switch (dir1) {
        case 'up':
            return dir2 === 'down' ? true : false;
        case 'down':
            return dir2 === 'up' ? true : false;
        case 'left':
            return dir2 === 'right' ? true : false;
        case 'right':
            return dir2 === 'left' ? true : false;
    }
}

function respostaDoBotao (parte, dir, snake) {
    if (!saoDirecoesOpostas(parte.direcao, dir)) {
        parte.mudaDirecao(dir);
        criaCurvaSnake(snake, parte);
    }

}

function isArrowKey (teclaString) {
    return teclaString.substring(0, 5) === 'Arrow'
}

function checarTeclaValida (teclaString) {
    if (!isArrowKey (teclaString)) {
        throw new Error('Tecla não aceita')
    }
}

export { pauseButton, getMoveKey, startButton, removeMoveKey }