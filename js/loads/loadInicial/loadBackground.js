'use strict'

/**
 * loadBackground cria a representação visual do backgraund do jogo 
*/
function loadBackground (height, width, color, colunas, linhas){
    const $background = document.querySelector('.background');

    $background.style.width = `${width}px`;
    $background.style.height = `${height}px`;
    $background.style.backgroundColor = color;
    $background.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
    $background.style.gridTemplateRows = `repeat(${linhas}, 1fr)`;
    
}

export default loadBackground