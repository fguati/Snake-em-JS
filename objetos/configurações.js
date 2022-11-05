'use strict'

class Configuracoes {
    constructor(screenHeight, screenWidth, screenColor, pixelSize, snakeSize, snakeColor) {
        this.screenHeight = screenHeight,
        this.screenWidth = screenWidth,
        this.screenColor = screenColor,
        this.pixelSize = pixelSize,
        this.snakeSize = snakeSize,
        this.snakeColor = snakeColor,
        this.colunas = Math.round(this.screenWidth / this.pixelSize),
        this.linhas = Math.round(this.screenHeight / this.pixelSize)

    }
}

export default Configuracoes;