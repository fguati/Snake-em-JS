'use strict'

/**
 * classe que ao ser instanciada cria o conjunto de configurações usadas para determinar todas as caracteristicas numéricas e visuais do jogo
 */
class Configuracoes {
    #colunas; #linhas; #screenHeight; #screenWidth; #pixelSize
    
    #numeroDeRows(dimensao, pixelSize) {
        return Math.round(dimensao / pixelSize)
    }

    /**
     * os atributos colunas e linhas são sempre gerados automaticamente a partir do tamanho da tela (atributos screenWidth e screenHeight) e do atributo pixelSize, por isso são 
     * atributos privados. Os atributos de tamanho de tela também são privados já que, sempre que um deles é atualizado os atributos colunas e linhas também devem ser atualizados
     */
    constructor(screenHeight, screenWidth, screenColor, pixelSize, snakeSize, snakeColor, tickInterval) {
        this.#screenHeight = screenHeight,
        this.#screenWidth = screenWidth,
        this.screenColor = screenColor,
        this.#pixelSize = pixelSize,
        this.snakeSize = snakeSize,
        this.snakeColor = snakeColor,
        this.#colunas = this.#numeroDeRows(this.screenWidth, this.pixelSize),
        this.#linhas = this.#numeroDeRows(this.screenHeight, this.pixelSize),
        this.tickInterval = tickInterval

    }

    //getters e setters dos atributos privados
    get pixelSize() {
        return this.#pixelSize
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