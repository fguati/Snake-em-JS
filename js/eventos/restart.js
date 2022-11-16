'use strict'

import { coordenadascIniciaisSnake } from '../loads/loadInicial/loadInicial.js'
import { conectCabecaRabo } from '../loads/draw.js'

/**
 * função que reinicia o jogo, pausando o jogo, voltando a cobra à sua configuração inicial, movendo a fruta e zerando o placar
 */
function restart(snake, timer, fruta, placar, configuracoes) {
    //receber configurações iniciais
    const { snakeSize, colunas, linhas} = configuracoes

    //pausa o jogo
    clearInterval(timer);
    
    //volta cobra a configurações iniciais
    const coordenadasCabeca = coordenadascIniciaisSnake(colunas, linhas);
    const coordenadasRabo = {x: coordenadasCabeca.x - snakeSize, y: coordenadasCabeca.y}
    resetSnakePart(snake.cabeca, coordenadasCabeca)
    resetSnakePart(snake.rabo, coordenadasRabo)
    clearCurvas(snake);
    conectCabecaRabo(snake);

    //move fruta para nova posição aleatória
    fruta.mudaParaLocalRandom(colunas, linhas, snake);

    //zera placar
    placar.zerar();

}

/**
 * função que move uma parte da cobra para as coordenadas recebidas como parâmetro. Usada para retornar a cobra a sua posição inicial
 */
function resetSnakePart(parte, coordenadas) {
    parte.x = coordenadas.x;
    parte.y = coordenadas.y;
    parte.direcao = 'right';
    parte.draw()
}

/**
 * função que elimina todos os elementos HTML relativos às curvas da cobra e limpa o atributo curvasDoCorpo da cobra
 */
function clearCurvas(snake) {
    snake.curvasDoCorpo.forEach((curva) => {curva.destroy()})
    snake.curvasDoCorpo = [];
}

export default restart