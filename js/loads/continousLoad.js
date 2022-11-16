'use strict'

import { conectPartesSnake, conectCabecaRabo } from "./draw.js"
import Colisao from '../eventos/colisao.js'
import checaGameOver from "../eventos/gameOver.js"
import { pauseButton, restarButton } from "../eventos/controls/index.js"

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

/**
 * a função loadTick chama todas as funções que devem ser chamadas a cada tick do jogo: primeiramente move a cabeça da cobra, checa então se esse movimento levou a cabeça a colidir
 * com seu corpo ou borda do jogo (checaGameOver) ou se levou a cabeça a comer uma fruta (checaComeuFruta), depois disso move o rabo da cobra (precisa checar primeiro se comeu fruta 
 * já que isso faria o rabo mover para traz). Finaliza finalmente processando as curvas (checando se o rabo alcançou uma das curvas) e redesenhando os segmentos da cobra ligados ao
 * rabo e a cabeça (loadTickCurvas faz os redesenhos caso existam curvas e conectCabecaRabo faz caso não existam curvas). Não há um if branch checando a existencia de curvas na seção
 * de redesenho pois as funções loadTickCurvas e conectCabecaRabo já checam isso dentro delas
 */
function loadTick (snake, tamanhoPasso, timer, fruta, placar, configuracoes) {

    snake.cabeca.move(tamanhoPasso);
    checaGameOver (snake, timer, fruta, placar, configuracoes);
    snake.checaComeuFruta(fruta, placar, configuracoes);
    snake.rabo.move(tamanhoPasso);
    loadTickCurvas(snake);
    conectCabecaRabo(snake);
}

/**
 * instancia o setInterval que faz a chamada de loadTick periodicamente levando ao jogo ocorrer em tempo real. Além disso chama as funções que criam os controles que recebem o timer
 * instanciado como entrada: pauseButton e restartButton
 */
function continousLoad(snake, tamanhoPasso, fruta, placar, configuracoes) {
    //instancia o setInverval que leva às funções serem chamadas todos os ticks
    const intervaloDeChamada = configuracoes.tickInterval;
    let timer = setInterval(()=>{
        loadTick (snake, tamanhoPasso, timer, fruta, placar, configuracoes)
    } , intervaloDeChamada)    

    //adiciona os controles pausam e reiniciam o jogo, pois recebem o timer como entrada
    pauseButton('Control', timer)
    restarButton(snake, timer, fruta, placar, configuracoes)

}

export default continousLoad