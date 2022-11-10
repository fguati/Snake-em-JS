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
            continousLoad(snake, 1, fruta, placar, configuracoes)
        }
    })

    const $botaoIniciar = document.getElementById('botaoIniciar')
    $botaoIniciar.addEventListener('click', () => continousLoad(snake, 100, fruta, placar, configuracoes))
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

function dropListCores(configuracoes, snake, fruta) {
    const $listaDeCores = document.getElementById('listaDeCores')
    
    $listaDeCores.addEventListener('change', (event) => {
        const {screenHeight, screenWidth, colunas, linhas} = configuracoes
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

function dropListDificuldades(snake, timer, fruta, placar, configuracoes) {
    const $listaDificuldades = document.getElementById('listaDeDificuldades');
    const configDificuldades = {
        facil: {
            width: 700,
            height: 400,
            tickInterval: 100
        },
        medio: {
            width: 500,
            height: 500,
            tickInterval: 70
        },
        dificil: {
            width: 365,
            height: 300,
            tickInterval: 50
        },
    }
    
    $listaDificuldades.addEventListener('change', (evento) => {
        const dificuldade = evento.target.value;
        const { screenColor, snakeColor } = configuracoes;
        const width = configDificuldades[dificuldade].width;
        const height = configDificuldades[dificuldade].height;
        const tickInterval = configDificuldades[dificuldade].tickInterval;

        configuracoes.screenHeight = height;
        configuracoes.screenWidth = width;
        configuracoes.tickInterval = tickInterval;

        loadElements(height, width, screenColor, configuracoes.colunas, configuracoes.linhas, snakeColor)
        restart(snake, timer, fruta, placar, configuracoes)
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

export { pauseButton, getMoveKey, startButton, restarButton, dropListCores, dropListDificuldades }