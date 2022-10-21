'use strict'

import { moveSnake } from "./move.js"
import { conectPartesSnake, conectCabecaRabo } from "./draw.js"
import { isColisaoPontoCorpo, isColisaoComBordaDaTela } from './colisao.js'
import gameOver from "./gameOver.js"

function eliminarCurva(snake, curva) {
    curva.destroy();
    
    const primeiraCurva = snake.curvasDoCorpo[0];
    if(primeiraCurva.id === curva.id) {
        snake.curvasDoCorpo.shift();
    }

}

function colisaoRaboCurva (snake, curva) {
    if(snake.rabo.x === curva.x && snake.rabo.y === curva.y) {
        snake.rabo.direcao = curva.direcao;
        
        eliminarCurva(snake, curva)
    }
}

function processarCurvas (snake) {
    const curvas = snake.curvasDoCorpo;
    const numeroDeCurvas = curvas.length;
    
    if (numeroDeCurvas > 0) {
        const primeiraCurva = curvas[numeroDeCurvas - 1];
        
        conectPartesSnake(snake.cabeca, primeiraCurva);
        
        colisaoRaboCurva(snake, curvas[0]);
        conectPartesSnake(curvas[0], snake.rabo);
    }
}

function checaGameOver (snake, timer) {
    if (isColisaoPontoCorpo (snake.cabeca, snake) || isColisaoComBordaDaTela(snake.cabeca)) {
        console.log('Colisão!')
        gameOver(snake, timer);
    }
}

function loadTick (snake, tamanhoPasso, timer) {
    console.log('tick');
    console.log(snake);

    moveSnake(snake.cabeca, tamanhoPasso);
    checaGameOver (snake, timer);
    moveSnake(snake.rabo, tamanhoPasso);
    processarCurvas(snake);
    conectCabecaRabo(snake);
}

function continousLoad(snake, tamanhoPasso, intervaloDeChamada) {
    let timer = setInterval(()=>{
        loadTick (snake, tamanhoPasso, timer)
    } , intervaloDeChamada)    

    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === 'Control') {
            clearInterval(timer)
        }
    })
}

export default continousLoad