'use strict'

import { conectPartesSnake, conectCabecaRabo } from "./draw.js"
import Colisao from '../eventos/colisao.js'
import checaGameOver from "../eventos/gameOver.js"
import { pauseButton } from "../controls.js"

/*
loadTickCurvas - Função que realiza todas as ações que envolvam curvas da cobra em um "tick". Ela checa se exitem curvas e, 
se existirem checa se alguma curva tocou no rabo e a elimina e redesenha os segmentos da cobra mais próximos do rabo e da 
cabeça.
*/
function loadTickCurvas (snake) {
    const curvas = snake.curvasDoCorpo;
    const numeroDeCurvas = curvas.length;
    
    if (numeroDeCurvas > 0) {
        const curvaMaisPertoDaCabeca = curvas[numeroDeCurvas - 1];
        
        conectPartesSnake(snake.cabeca, curvaMaisPertoDaCabeca);
        
        Colisao.raboCurva(snake, curvas[0]);
        conectPartesSnake(curvas[0], snake.rabo);
    }
}

function loadTick (snake, tamanhoPasso, timer, fruta, placar) {
    console.log('tick');
    console.log(snake);

    snake.cabeca.move(tamanhoPasso);
    checaGameOver (snake, timer, fruta, placar);
    snake.checaComeuFruta(fruta, placar);
    snake.rabo.move(tamanhoPasso);
    loadTickCurvas(snake);
    conectCabecaRabo(snake);
}

function continousLoad(snake, tamanhoPasso, intervaloDeChamada, fruta, placar) {
    let timer = setInterval(()=>{
        loadTick (snake, tamanhoPasso, timer, fruta, placar)
    } , intervaloDeChamada)    

    pauseButton('Control', timer)

}

export default continousLoad