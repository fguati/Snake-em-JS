'use strict'

/**
 * coordenadascIniciaisSnake determina a posição onde a cabeça da cobra deve iniciar o jogo baseado no tamanho da tela. Sempre posiciona a cobra exatamente no meio da tela
 */
 function coordenadascIniciaisSnake (colunas, linhas) {
    const snakeX = Math.round(colunas / 2);
    const snakeY = Math.round(linhas / 2);

    return {'x': snakeX, 'y': snakeY}
}

/**
 * função que ajusta os tamanhos dos elementos que fazem parte da bottom bar de acordo com o tamanho da mesma, chamada quando é feita a modificação de tamanho da tela
 */
 function ajustaElementosBottomBar (bottomBarWidth) {
    const $bottomBar = document.querySelector('.bottomBar');
    
    //ajuste para maior tamanho da área de jogo (dificuldade fácil)
    acessaTodosNodes($bottomBar, elemento => {
        ajustaCSS(elemento, '16px', '0.8em')
    })
    
    //ajuste para tamanho intermediário da área de jogo (dificuldade média)
    ajustaBottomBarAbaixoDe(bottomBarWidth, 520, $bottomBar, elemento => {
        ajustaCSS(elemento, '15px', '0.8em')
    })
    
    //ajuste para menor tamanho da área de jogo (dificuldade difícil)
    ajustaBottomBarAbaixoDe(bottomBarWidth, 378, $bottomBar, elemento => {
        ajustaCSS(elemento, '13px', '0.2em')
    })
    
}

/**
 * função que recebe um elemento HTML e então acessa tanto o elemento quanto todos os elementos filhos do elemento original e então aplica uma função callback recebida como parâmetro
 * a todos os elementos HTML acessados
 */
function acessaTodosNodes(parentNode, callback = new Function) {
    callback(parentNode);
    if(parentNode.children.length > 0) {
        const children = parentNode.children;
        for (const child of children) {
            acessaTodosNodes(child, callback);
        }
    } else {
        return
    }
}

/**
 * função recebe o tamanho da bottom bar e um tamanho limite e, caso a bottom bar esteja abaixo do tamanho limite, a função aplica uma função callback recebida como parâmetro a todos
 * os elementos HTML da bottom bar
 */
function ajustaBottomBarAbaixoDe(bottomBarWidth, limitWidth, bottomBarHTML, callback = new Function) {
    if(bottomBarWidth < limitWidth) {
        acessaTodosNodes(bottomBarHTML, callback)
    }
}

/**
 * função que recebe um elemento HTML e aplica a ele um tamanho de fonte e um espaçamento recebidos como parâmetros, porém o espaçamento só é aplicado a elemetnos que possuam o data
 * attribut "padding"
 */
function ajustaCSS(elemento, fontSize, padding) {
    const $estilo = elemento.style;
    $estilo.fontSize = fontSize;
    if (elemento.dataset.padding === 'yes') {
        $estilo.paddingRight = padding;
    }
}

export { coordenadascIniciaisSnake, ajustaElementosBottomBar }