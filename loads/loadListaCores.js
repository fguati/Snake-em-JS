'use strict'

const $listaDeCores = document.getElementById('listaDeCores')
const listaDeCores = [
    {
        nome: 'Preto',
        corBackgroundVarCSS: '--preto',
        corFonteVarCSS: '--branco'
    },
    {
        nome: 'Branco',
        corBackgroundVarCSS: '--branco',
        corFonteVarCSS: '--preto'
    },
    {
        nome: 'Rosa',
        corBackgroundVarCSS: '--rosa',
        corFonteVarCSS: '--preto'
    }, 
    {
        "nome": 'Verde Escuro',
        corBackgroundVarCSS: '--verdeEscuro',
        corFonteVarCSS: '--branco'
    }, 
    {
        "nome": "Verde Fosforescente",
        corBackgroundVarCSS: '--verdeMarcaTexto',
        corFonteVarCSS: '--preto'
    }, 
    {
        nome: 'Roxo',
        corBackgroundVarCSS: '--roxo',
        corFonteVarCSS: '--branco'
    }
]

function adicionarListaDeCores() {
    listaDeCores.forEach(cor => {
        adicionarCor(cor)
    })
}

function adicionarCor (cor) {
    const corFonte = cor.corFonteVarCSS;
    const corJSON = JSON.stringify(cor); 
    const opcaoStr = `<option class="lista__opcao" style="background-color:var(${cor.corBackgroundVarCSS});color:var(${corFonte})" value='${corJSON}'>${cor.nome}</option>`;
    $listaDeCores.innerHTML += opcaoStr;
}

adicionarListaDeCores()