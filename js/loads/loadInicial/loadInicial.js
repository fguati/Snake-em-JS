'use strict'

import { Snake } from '../../objetos/snake/Snake.js'
import Frutas from '../../objetos/Frutas.js'
import placar from '../../objetos/placar.js'
import adicionarListaDeCores from './loadListaCores.js';
import { coordenadascIniciaisSnake } from './auxiliares.js'
import loadBackground from './loadBackground.js';
import loadBottomBar from './loadBottomBar.js';



/**
 * cria as representações visuais de todos os elementos que não são objetos do jogo chamando as funções loadBackground para carregar o background, loadBottomBar para carregar a UI,
 * e adicionarListaDeCores para criar a lista de cores
 */
function loadElements (screenHeight, screenWidth, screenColor, colunas, linhas, snakeColor) {
    loadBackground(screenHeight, screenWidth, screenColor, colunas, linhas);
    loadBottomBar(screenWidth, screenColor, snakeColor);
}

/**
 * recebe as configurações iniciais do jogo e, a partir delas cria todos os elementos necessários para iniciar o jogo, incluindo seus elementos HTML, os objetos instanciados a partir
 * das classes e as representações visuais de todos esses elementos
 */
function loadInicial (configuracoes) {    
    //inicializalção das varipaveis necessárias
    const {screenWidth, screenHeight, screenColor, snakeSize, snakeColor, colunas, linhas} = configuracoes
    const coordenadasIniciais = coordenadascIniciaisSnake (colunas, linhas)
    
    //instanciação dos objetos do jogo, o que já inclui a criação dos elementos HTML
    const snake = new Snake(coordenadasIniciais.x, coordenadasIniciais.y, snakeSize, snakeColor)
    const fruta = new Frutas(10, 15, configuracoes)
    
    //criação das representações gráficas de todos os elementos do jogo
    loadElements (screenHeight, screenWidth, screenColor, colunas, linhas, snakeColor)
    snake.desenhoInicial();
    adicionarListaDeCores();

    return {snake, fruta, placar}
}

export { loadInicial, coordenadascIniciaisSnake, loadElements }
