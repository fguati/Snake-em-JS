'use strict'

import { moveSnake } from "./move.js"
import { conectPartesSnake } from "./draw.js"


function continousLoad(snake, tamanhoPasso, intervaloDeChamada) {
    const timer = setInterval(()=>{
        loadTick (snake, tamanhoPasso)
    } , intervaloDeChamada)    

    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === 'Control') {
            clearInterval(timer)
        }
    })
}

function mudaDirecaoDoRabo (snake, curva) {
    if(snake.rabo.x === curva.x && snake.rabo.y === curva.y) {
        snake.rabo.direcao = curva.direcao;
        
        curva.destroy();
        
        // const indexCurva = snake.curvasDoCorpo.indexOf(curva)
        // snake.curvasDoCorpo.splice(indexCurva, 1)
        
        const primeiraCurva = snake.curvasDoCorpo[0];
        if(primeiraCurva.id === curva.id) {
            snake.curvasDoCorpo.shift();
        }
        
    }
}

function loadTick (snake, tamanhoPasso) {
    // const partes = [snake.cabeca, ...snake.curvasDoCorpo, snake.rabo]

    const curvas = snake.curvasDoCorpo

    const numeroDeCurvas = curvas.length;

    moveSnake(snake.cabeca, tamanhoPasso);
    moveSnake(snake.rabo, tamanhoPasso);

    if (numeroDeCurvas > 0) {
        const ultimaCurva = curvas[0];
        const primeiraCurva = curvas[numeroDeCurvas - 1];
        
        conectPartesSnake(snake.cabeca, primeiraCurva);
    
        mudaDirecaoDoRabo(snake, ultimaCurva);
        conectPartesSnake(ultimaCurva, snake.rabo);
    } else {
        console.log(snake.cabeca.x, snake.rabo.x)
        conectPartesSnake(snake.cabeca, snake.rabo)
    }


    // partes.forEach((parte, indice) => {
    //     if(parte.classe === 'snake-curve') {
    //         mudaDirecaoDoRabo(snake, parte);
    //         conectPartesSnake(parte, partes[indice + 1]);
    //     }

    //     if(parte.classe !== 'snake-curve') {
    //         moveSnake(parte, tamanhoPasso);
            
    //         if(parte.classe !== 'snake-tail') {
    //             conectPartesSnake(parte, partes[indice + 1]);
    //         }
    //     }
    // })
}



export default continousLoad