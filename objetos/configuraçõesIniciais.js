'use strict'

class ConfiguracoesIniciais {
    constructor(screenHeight, screenWidth, screenColor, pixelSize, snakeSize) {
        this.screenHeight = screenHeight,
        this.screenWidth = screenWidth,
        this.screenColor = screenColor,
        this.pixelSize = pixelSize,
        this.snakeSize = snakeSize,
        this.colunas = Math.round(this.screenWidth / this.pixelSize),
        this.linhas = Math.round(this.screenHeight / this.pixelSize)

    }
}

const configuracoesIniciais = new ConfiguracoesIniciais(400, 700, '#000000', 7, 4)

export default configuracoesIniciais;