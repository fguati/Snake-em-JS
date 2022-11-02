'use strict'

import { getMoveKey, startButton } from '../controls.js'
import { loadInicial } from "../loads/loadInicial.js"
    
function startGame() {
    document.addEventListener('DOMContentLoaded', () => {
        let {snake, fruta, placar} = loadInicial()
        getMoveKey(snake, snake.cabeca);
        startButton('Shift', snake, fruta, placar);
    })

}

startGame();

// export default startGame
