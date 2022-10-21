'use strict'

import {criaCurvaSnake} from './elementCreate.js'

function mudaDirecaoSnake(parte, dir) {
    parte.direcao = dir;
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
        mudaDirecaoSnake(parte, dir);
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

function getMoveKey(snake, parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        console.log(teclaDir)

        checarTeclaValida (teclaDir)

        const dir = teclaDir.substring(5).toLowerCase()
        respostaDoBotao (parte, dir, snake)
    })
}

function moveSnake(parte, veloc) {
    switch (parte.direcao) {
        case 'up':
            parte.y -= veloc
            break
        case 'down':
            parte.y += veloc
            break
        case 'left':
            parte.x -= veloc
            break
        case 'right':
            parte.x += veloc
            break
    }

    return parte.draw()
}

export { getMoveKey, moveSnake }