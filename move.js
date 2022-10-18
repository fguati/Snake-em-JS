'use strict'
import { snake, SnakePart } from './Snake.js'

function criaCurvaSnake(parte) {
    const numDeCurvas = snake.curvasDoCorpo.length
    const curvaId = 'snake-node' + numDeCurvas;
    snake.curvasDoCorpo.push(new SnakePart('snake-curve', curvaId, parte.x, parte.y, parte.direcao));
    snake.curvasDoCorpo[numDeCurvas].draw();
}

function mudaDirecaoSnake(parte, teclaDir) {
    const dir = teclaDir.substring(5).toLowerCase()
        parte.direcao = dir;
}

function getMoveKey(parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        if (teclaDir.substring(0, 5) !== 'Arrow') {
            console.log(teclaDir)
            throw new Error('Tecla não aceita')
        }

        mudaDirecaoSnake(parte, teclaDir);

        criaCurvaSnake(parte);
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