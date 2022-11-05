'use strict'

class Colisao {
    static #isColisaoPontoReta (ponto, endReta1, endReta2) {
        const distX = endReta1.x - endReta2.x
        const coordenada = Colisao.#defineCoordenada(distX)
    
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

    static #defineCoordenada (distX) {
        return (distX === 0 ? 'x' : 'y');
    }

    static pontoCorpo (ponto, snake) {
        const corpoCobra = [snake.rabo, ...snake.curvasDoCorpo, snake.cabeca];
        let resposta = false;
    
        corpoCobra.forEach((parte, indice) => {
            if(indice < corpoCobra.length - 1) {
                const proximaParte = corpoCobra[indice + 1];
                
                if (Colisao.#isColisaoPontoReta (ponto, parte, proximaParte)) {
                    resposta = true;
                    return
                }
            }
        })
    
        return resposta;
    }

    static comBordaDaTela (ponto, telaHeight, telaWidth, pixelSize) {
        const colunas = Math.round(telaWidth / pixelSize);
        const linhas = Math.round(telaHeight / pixelSize);
        return ponto.x < 0 || ponto.x > colunas || ponto.y < 0 || ponto.y > linhas
    }
    
    static pontoPonto (ponto1, ponto2) {
        return ponto1.x === ponto2.x && ponto1.y === ponto2.y
    }

    static raboCurva (snake, curva) {
        if(snake.rabo.x === curva.x && snake.rabo.y === curva.y) {
            snake.rabo.direcao = curva.direcao;
            
            snake.eliminarCurva(curva);
        }
    }
}







export default Colisao
