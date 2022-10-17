'use strict'

import { moveSnake } from "./move.js"

function continousLoad(snake, tamanhoPasso, intervaloDeChamada) {
    const timer = setInterval(()=>{
        
        const partes = [snake.cabeca, snake.rabo, ...snake.curvasDoCorpo]

        partes.forEach((parte) => {
            if(parte.classe !== 'snake-curve') {
                moveSnake(parte, tamanhoPasso)
            }

            if(snake.rabo.x === parte.x && snake.rabo.y === parte.y && parte.classe !== 'snake-tail') {
                console.log(snake.rabo.direcao);
                snake.rabo.direcao = parte.direcao;
                console.log(snake.rabo.direcao);
            }
        })


    }, intervaloDeChamada)    
}

export default continousLoad