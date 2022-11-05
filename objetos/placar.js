'use strict'

const placar = {
    pontos:0,
    updatePlacar: function() {
        const $placar = document.getElementById('placar')
        $placar.innerHTML = this.pontos.toLocaleString('pt-br', {minimumIntegerDigits: 3});
    },
    pontuar: function () {
        this.pontos++
        this.updatePlacar()
    },
    zerar: function () {
        this.pontos = 0
        this.updatePlacar()
    }
}

export default placar