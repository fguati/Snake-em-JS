
function getMoveKey (parte) {
    document.addEventListener('keydown', (tecla) => {
        const teclaDir = tecla.key
        if(teclaDir.substring(0,5) !== 'Arrow') {
            console.log(teclaDir)
            throw new Error('Tecla não aceita')
        }
        const dir = teclaDir.substring(5).toLowerCase()
        console.log(dir)
        parte.direcao = dir;
        // moveSnake(parte, 5)
        // console.log(parte.x, parte.y)
    })
}

function moveSnake(parte, veloc) {
    switch(parte.direcao) {
        case 'up':
            parte.y -= veloc
            break
        case 'down':
            parte.y += veloc
            break
        case 'left':
            parte.x -= veloc
            break
        case 'right':
            parte.x += veloc
            break
    }
    
return parte.draw()
}

function continousMove(parte, tamanhoPasso, intervaloDeChamada) {
    const timer = setInterval(()=>{
        moveSnake(parte, tamanhoPasso)
        parte.draw()
    }, intervaloDeChamada)
    
    
}

export {getMoveKey, moveSnake, continousMove}