'use strict'
import { snake, SnakePart } from './Snake.js'

function criaCurvaSnake(parte) {
    const numDeCurvas = snake.curvasDoCorpo.length
    const curvaId = 'snake-node' + numDeCurvas;
    snake.curvasDoCorpo.push(new SnakePart('snake-curve', curvaId, parte.x, parte.y, parte.direcao));
    snake.curvasDoCorpo[numDeCurvas].draw();
}

function mudaDirecaoSnake(parte, dir) {
    parte.direcao = dir;
}

function saoDirecoesOpostas (dir1, dir2) {
    console.log(dir1, dir2)
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

function getMoveKey(parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        if (teclaDir.substring(0, 5) !== 'Arrow') {
            console.log(teclaDir)
            throw new Error('Tecla não aceita')
        }

        const dir = teclaDir.substring(5).toLowerCase()

        console.log(saoDirecoesOpostas(parte.direcao, dir))
        if (!saoDirecoesOpostas(parte.direcao, dir)) {
            mudaDirecaoSnake(parte, dir);
            criaCurvaSnake(parte);
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