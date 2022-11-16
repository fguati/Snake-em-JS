'use strict'

// a classe colisão reune todos os métodos que verificam se dois elementos do jogo tocaram um no outro.
class Colisao {
    /** 
     * o método #isColisaoPontoReta retorna um boolenao true caso detecte uma colisão entre um ponto e uma reta. Ele recebe como entrada os parâmentros ponto, que representa o 
     * ponto em si, e os parâmetros extremidade1 e 2 que representam as duas extremidades da reta. Todos os pontos recebidos como argumentos devem ter coordenadas x e y
    */ 
    static #isColisaoPontoReta (ponto, extremidade1, extremidade2) {
        const comprimentoDaRetaNoEixoX = extremidade1.x - extremidade2.x
        const coordenadaOrtogonal = Colisao.#defineCoordenadaOrtogonal(comprimentoDaRetaNoEixoX);
        const coordenadaReta = Colisao.#defineCoordenadaPrincipal(comprimentoDaRetaNoEixoX);

        const coordenadaOrtogonalPonto = ponto[coordenadaOrtogonal]
        const coordenadaOrtogonalExtremidade1 = extremidade1[coordenadaOrtogonal]
        const coordenadaOrtogonalExtremidade2 = extremidade2[coordenadaOrtogonal]
        
        const pontoAlinhadoComReta = (ponto[coordenadaReta] === extremidade1[coordenadaReta])
        const fimDaReta = Math.max(coordenadaOrtogonalExtremidade1, coordenadaOrtogonalExtremidade2);
        const inicioDaReta = Math.min(coordenadaOrtogonalExtremidade1, coordenadaOrtogonalExtremidade2);
    
        return (coordenadaOrtogonalPonto < fimDaReta && coordenadaOrtogonalPonto > inicioDaReta && pontoAlinhadoComReta)
    }

    static #defineCoordenadaOrtogonal (distX) {
        return (distX === 0 ? 'y' : 'x');
    }

    static #defineCoordenadaPrincipal (distX) {
        return (distX === 0 ? 'x' : 'y');
    }

    /**
     * o método pontoCorpo verifica se um ponto colidiu com o corpo da cobra. Ele passa por todos as partes que compõe o corpo da cobra (cabeça, rabo e curvas) e verifica
     * se houve colisão entre a reta formada por duas partes adjacentes e o ponto em questão, retornando um booleano true caso haja colisão
     */
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

    /** o método comBordaDaTela verifica se um ponto colidiu com a borda da tela */
    static comBordaDaTela (ponto, telaHeight, telaWidth, pixelSize) {
        const colunas = Math.round(telaWidth / pixelSize);
        const linhas = Math.round(telaHeight / pixelSize);
        return ponto.x <= 0 || ponto.x > colunas || ponto.y <= 0 || ponto.y > linhas
    }
    
    /** o método pontoPonto verifica verifica se houve colisão entre 2 pontos */
    static pontoPonto (ponto1, ponto2) {
        return ponto1.x === ponto2.x && ponto1.y === ponto2.y
    }

    /** o metodo raboCurva verifica se o rabo da cobra alcançou alguma curva. Caso sim, o método já muda a direção de movimento do rabo para a direção da curva em questão e elimina 
     * a curva
     */
    static raboCurva (snake, curva) {
        if(Colisao.pontoPonto(snake.rabo, curva)) {
            snake.rabo.direcao = curva.direcao;
            
            snake.eliminarCurva(curva);
        }
    }

    /** o método pontoComAlgumaCurva percorre todas as curvas do corpo da cobra e verifica se o ponto recebido como parametro colide com algum deles, retornando um booleano true
     * em caso de colisão.
     */
    static pontoComAlgumaCurva(snake, ponto) {
        let colisao = false;
        snake.curvasDoCorpo.forEach(curva => {
            if (Colisao.pontoPonto(ponto, curva)) {
                colisao = true;
            }
        })
        return colisao;
    }
}

export default Colisao
