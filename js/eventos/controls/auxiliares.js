'use strict'

//faz a conversão da string de direção criada a partir da resposta das teclas de setas, transformando-a numa array no formato [sentido x, sentido y], onde o sentido é 1 se for o sentido crescente da direção ou -1 se for descrescente
function parseDirection(dir) {
    if (typeof dir === 'string') {
        switch(dir) {
            case 'up':
                dir = [0, -1];
                break
            case 'down':
                dir = [0, 1];
                break
            case 'left':
                dir = [-1, 0];
                break
            case 'right':
                dir = [1, 0];
                break
        }
    }
    return dir;
}

export { parseDirection }