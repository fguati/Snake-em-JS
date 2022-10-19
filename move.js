'use strict'
import { SnakePart } from './Snake.js'
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

function getMoveKey(snake, parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        console.log(teclaDir)

        if (teclaDir.substring(0, 5) !== 'Arrow') {
            throw new Error('Tecla não aceita')
        }

        const dir = teclaDir.substring(5).toLowerCase()

        if (!saoDirecoesOpostas(parte.direcao, dir)) {
            mudaDirecaoSnake(parte, dir);
            criaCurvaSnake(snake, parte);
        }
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