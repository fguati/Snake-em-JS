'use strict'

import { getMoveKey, startButton } from '../controls.js'
import { loadInicial } from "../loads/loadInicial.js"
    
function startGame() {
    document.addEventListener('DOMContentLoaded', () => {
        let {snake, fruta} = loadInicial()
    
        getMoveKey(snake, snake.cabeca);
        startButton('Shift', snake, fruta);
    })

}

startGame();

// export default startGame
