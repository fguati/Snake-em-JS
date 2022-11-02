'use strict'

const placar = {
    pontos:0,
    updatePlacar: function() {
        const $placar = document.getElementById('placar')
        $placar.innerHTML = this.pontos
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