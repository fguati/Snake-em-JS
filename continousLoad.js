'use strict'

import { moveSnake } from "./move.js"

function continousLoad(snake, tamanhoPasso, intervaloDeChamada) {
    const timer = setInterval(()=>{
        
        const partes = [snake.cabeca, snake.rabo, ...snake.curvasDoCorpo]

        partes.forEach((parte) => {
            if(parte.classe !== 'snake-curve') {
                moveSnake(parte, tamanhoPasso)
            }

            if(parte.classe === 'snake-curve') {
                mudaDirecaoDoRabo(snake, parte)
            }
        })
        
        
    }, intervaloDeChamada)    
}

function mudaDirecaoDoRabo (snake, curva) {
    if(snake.rabo.x === curva.x && snake.rabo.y === curva.y) {
        snake.rabo.direcao = curva.direcao;
        curva.destroy();
    }
}



export default continousLoad