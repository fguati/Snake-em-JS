'use strict'


/**
 * drawCircle simplesmente transforma um elemento HTML em um pixel visível na area de jogo. O parâmetro element indica qual elemento será desenhado, x e y determinam a posição na
 * área de jogo do pixel, radius é usado para determinar o quão redondo o pixel será e color determina a cor do pixel 
 */
function drawCircle (element, x, y, radius, color) {
    element.style.borderRadius = radius;
    element.style.background = color;
    element.style.gridColumn = x;
    element.style.gridRow = y;
    element.style.width = '100%';
}

/**drawSnakeSegment recebe uma das partes da cobra e a alonga através do atributo CSS span com o objetivo de transformar um ponto da cobra em um segmento*/
function drawSnakeSegment (parte, x, y, spanX, spanY) {
    parte.$HTMLElement.style.gridArea = `${y} / ${x} / span ${spanY} / span ${spanX}`;
}

/**
 * a função conectarPartesNoEixo recebe duas partes e um eixo (x ou y) e conecta visualmente as duas partes caso elas estejam alinhadas no eixo recebido 
 */
function conectarPartesNoEixo (parteAnterior, partePosterior, eixo) {
    const eixoPerpendicular = (eixo === 'x' ? 'y' : 'x');
    const distancias = {
        'x': (parteAnterior.x - partePosterior.x),
        'y': (parteAnterior.y - partePosterior.y)
    }

    if(distancias[eixo] === 0) {
        if(distancias[eixoPerpendicular] > 0) {
            drawSnakeSegment(parteAnterior, partePosterior.x, partePosterior.y, Math.abs(distancias.x) + 1, Math.abs(distancias.y) + 1);
        } else if (distancias[eixoPerpendicular] < 0) {
            drawSnakeSegment(parteAnterior, parteAnterior.x, parteAnterior.y, Math.abs(distancias.x) + 1, Math.abs(distancias.y) + 1);
        }
    }
} 

/**
 * conectPartesSnake recebe como argumentos duas partes da cobra e então realiza a conexão visual entre as duas partes, transformando a parte anterior recebida em um segmento da cobra
 */
function conectPartesSnake (parteAnterior, partePosterior) {
    conectarPartesNoEixo(parteAnterior, partePosterior, 'x');
    conectarPartesNoEixo(parteAnterior, partePosterior, 'y');

}

/** conectCabecaRabo realiza a conexão entre o rabo e a cabeça da cobra caso não haja curvas no corpo da cobra, transormando a cabeça em um segmento */
function conectCabecaRabo (snake) {
    if(snake.curvasDoCorpo.length === 0) {
        conectPartesSnake(snake.cabeca, snake.rabo)
    }
}

/**
 * conectaCurvaNova é uma função que deve ser chamada sempre que uma nova curva é
 * criada para conectar visualmente essa nova curva a algum outro ponto da cobra 
 * e manter a integridade do corpo. A parte conectada deve ser a penúltima curva
 * ou o rabo caso não haja outras curvas além da nova
 */
function conectaCurvaNova (snake, novaCurva) {
    const numDeCurvas = snake.curvasDoCorpo.length
    const parteConectadaNaCurvaNova = (numDeCurvas > 1 ? snake.curvasDoCorpo[numDeCurvas - 2] : snake.rabo)
    
    conectPartesSnake(novaCurva, parteConectadaNaCurvaNova)
    console.log(novaCurva, parteConectadaNaCurvaNova)
}

export  {drawCircle, conectPartesSnake, conectCabecaRabo, conectaCurvaNova }