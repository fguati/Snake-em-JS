'use strict'

import { configuracoesIniciais } from "./loadInicial.js"

function isColisaoPontoReta (ponto, endReta1, endReta2) {
    const distX = endReta1.x - endReta2.x
    const coordenada = defineCoordenada(distX)

    let coordPonto = 0
    let coordReta1 = 0
    let coordReta2 = 0
    
    if (coordenada === 'x') {
        coordPonto = ponto.y
        coordReta1 = endReta1.y
        coordReta2 = endReta2.y
    }
    else if (coordenada === 'y') {
        coordPonto = ponto.x
        coordReta1 = endReta1.x
        coordReta2 = endReta2.x
    }

    const pontoAlinhado = (ponto[coordenada] === endReta1[coordenada])
    const retaMaior = Math.max(coordReta1, coordReta2);
    const retaMenor = Math.min(coordReta1, coordReta2);

    return (coordPonto < retaMaior && coordPonto > retaMenor && pontoAlinhado)
}

function defineCoordenada (distX) {
    return (distX === 0 ? 'x' : 'y');
}

function isColisaoPontoCorpo (ponto, snake) {
    const corpoCobra = [snake.rabo, ...snake.curvasDoCorpo, snake.cabeca];
    let resposta = false;

    corpoCobra.forEach((parte, indice) => {
        if(indice < corpoCobra.length - 1) {
            const proximaParte = corpoCobra[indice + 1];
            
            if (isColisaoPontoReta (ponto, parte, proximaParte)) {
                resposta = true;
                return
            }
        }
    })

    return resposta;
}

function isColisaoComBordaDaTela (ponto, telaHeight = configuracoesIniciais.screenHeight, telaWidth = configuracoesIniciais.screenWidth, pixelSize = configuracoesIniciais.pixelSize) {
    const colunas = Math.round(telaWidth / pixelSize);
    const linhas = Math.round(telaHeight / pixelSize);
    return ponto.x < 0 || ponto.x > colunas || ponto.y < 0 || ponto.y > linhas
}

export {isColisaoPontoCorpo, isColisaoComBordaDaTela}
