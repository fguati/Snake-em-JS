'use strict'

import {criaCurvaSnake} from './loads/elementCreate.js'
import continousLoad from './loads/continousLoad.js'
import restart from './eventos/restart.js'
import { loadElements } from './loads/loadInicial.js'

function pauseButton(button, timer) {
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === button) {
            clearInterval(timer)
        }
    })

    const $botaoPausar = document.getElementById('botaoPausa')
    $botaoPausar.addEventListener('click', () => clearInterval(timer))
}

function restarButton(snake, timer, fruta, placar, configuracoes) {
    console.log('entrou em pause')
    const $botaoRestart = document.getElementById('botaoRestart');
    $botaoRestart.addEventListener('click', () => {
        restart(snake, timer, fruta, placar, configuracoes)
    })
}

function startButton(button, snake, fruta, placar, configuracoes) {
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === button) {
            continousLoad(snake, 1, 100, fruta, placar, configuracoes)
        }
    })

    const $botaoIniciar = document.getElementById('botaoIniciar')
    $botaoIniciar.addEventListener('click', () => continousLoad(snake, 1, 100, fruta, placar, configuracoes))
}

function getMoveKey(snake, parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        
        checarTeclaValida (teclaDir)

        const dir = teclaDir.substring(5).toLowerCase()
        respostaDoBotao (parte, dir, snake)
        console.log('botao', snake)
    })
}

function dropListCores(configuracoes, snake, fruta, placar) {
    const $listaDeCores = document.getElementById('listaDeCores')
    const {screenHeight, screenWidth, colunas, linhas} = configuracoes
    
    $listaDeCores.addEventListener('change', (event) => {
        const cores = JSON.parse(event.target.value)

        const backGroundColor = `var(${cores.corBackgroundVarCSS})`
        const objectColor = `var(${cores.corFonteVarCSS})`

        configuracoes.screenColor = backGroundColor;
        configuracoes.snakeColor = objectColor;
        snake.color = objectColor;
        fruta.cor = objectColor;

        loadElements (screenHeight, screenWidth, backGroundColor, colunas, linhas, objectColor)
        snake.carregarCor();
        fruta.draw();

        console.log(snake)
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

export { pauseButton, getMoveKey, startButton, restarButton, dropListCores }