'use strict'

import { ajustaElementosBottomBar } from './auxiliares.js'

/**
 * cria a representação visual da barra no rodapé da área de jogo onde fica a UI do jogo 
 */
 function loadBottomBar(width, backgroundColor, elementColor) {
    const $bottomBar = document.querySelector('.bottomBar');
    const $placar = document.querySelector('.placar');

    $bottomBar.style.width = `${width}px`;
    $bottomBar.style.backgroundColor = backgroundColor;
    $bottomBar.style.borderTop = `1px solid ${elementColor}`
    $placar.style.color = elementColor;
    ajustaElementosBottomBar(width);
}

export default loadBottomBar