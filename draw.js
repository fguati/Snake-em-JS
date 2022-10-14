
function drawCircle (element, x, y) {
    element.style.borderRadius = '100%';
    element.style.background = "#FFFFFF"
    element.style.gridColumn = x;
    element.style.gridRow = y;
}

// const elemento = document.querySelector('.teste');
// console.log(elemento)
// drawCircle(elemento, 15, 10);

export default drawCircle