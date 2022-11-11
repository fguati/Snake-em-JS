'use strict'

import { conectPartesSnake, conectCabecaRabo } from "./draw.js"
import Colisao from '../eventos/colisao.js'
import checaGameOver from "../eventos/gameOver.js"
import { pauseButton, restarButton } from "../controls.js"

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

function loadTick (snake, tamanhoPasso, timer, fruta, placar, configuracoes) {

    snake.cabeca.move(tamanhoPasso);
    checaGameOver (snake, timer, fruta, placar, configuracoes);
    snake.checaComeuFruta(fruta, placar, configuracoes);
    snake.rabo.move(tamanhoPasso);
    loadTickCurvas(snake);
    conectCabecaRabo(snake);
}

function continousLoad(snake, tamanhoPasso, fruta, placar, configuracoes) {
    const intervaloDeChamada = configuracoes.tickInterval;
    let timer = setInterval(()=>{
        loadTick (snake, tamanhoPasso, timer, fruta, placar, configuracoes)
    } , intervaloDeChamada)    

    pauseButton('Control', timer)
    restarButton(snake, timer, fruta, placar, configuracoes)

}

export default continousLoad