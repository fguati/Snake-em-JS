'use strict'

class Configuracoes {
    #colunas; #linhas; #screenHeight; #screenWidth
    
    #numeroDeRows(dimensao, pixelSize) {
        return Math.round(dimensao / pixelSize)
    }

    constructor(screenHeight, screenWidth, screenColor, pixelSize, snakeSize, snakeColor, tickInterval) {
        this.#screenHeight = screenHeight,
        this.#screenWidth = screenWidth,
        this.screenColor = screenColor,
        this.pixelSize = pixelSize,
        this.snakeSize = snakeSize,
        this.snakeColor = snakeColor,
        this.#colunas = this.#numeroDeRows(this.screenWidth, this.pixelSize),
        this.#linhas = this.#numeroDeRows(this.screenHeight, this.pixelSize),
        this.tickInterval = tickInterval

    }

    get screenHeight() {
        return this.#screenHeight
    }

    get screenWidth() {
        return this.#screenWidth
    }

    get colunas() {
        return this.#colunas
    }

    get linhas() {
        return this.#linhas
    }

    set screenHeight(height) {
        this.#screenHeight = height;
        this.#linhas = this.#numeroDeRows(height, this.pixelSize);
    }

    set screenWidth(Width) {
        this.#screenWidth = Width;
        this.#colunas = this.#numeroDeRows(Width, this.pixelSize)
    }

}

export default Configuracoes;