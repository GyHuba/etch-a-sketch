const container = document.querySelector('.container');
const boardDOM = document.querySelector('.board');
const colorSelectDOM = document.querySelector('.colors');
const colors = document.querySelectorAll('.color')
const sizeDOM = document.querySelector('#size');
const clearBtn = document.querySelector('.clear-btn');
let playgroundDOM = document.querySelector('.playground-board')
const html = document.querySelector('html');

let color = "black";
let boardSize = 16;

function buildTheGrid(size) {
    boardDOM.style = `width : ${html.clientHeight / 1.3}px; height : ${html.clientHeight / 1.3}px;`;
    playgroundDOM.style = `width : ${html.clientHeight / 1.2}px`;
    boardDOM.style.height = html.clientWidth / 3;
    let gridCellSize = boardDOM.clientWidth / size;
    for (let i = 0; i < (size * size); i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add(`grid-cell-${i + 1}`);
        gridCell.style = `width : ${gridCellSize}px; height : ${gridCellSize} px;`
        boardDOM.append(gridCell);
    }
}

function randomizeNumbers(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

function drawing(event) {
    let gridElement = document.querySelector(`.${event.target.className}`);
    if (gridElement === null || gridElement.className === "board") return
    else if (gridElement !== null) {
        if(color === "random-color"){
            gridElement.style.backgroundColor = `${randomizeNumbers()}`;
        }
        else{
            gridElement.style.backgroundColor = `${color}`;
        }
    }
}

function setNewBoard() {
    boardDOM.innerHTML = "";
    buildTheGrid(boardSize);
}

boardDOM.addEventListener("mousedown", () => {
    boardDOM.addEventListener("mouseover", drawing)
    boardDOM.addEventListener("click", drawing)
});

container.addEventListener("mouseup", () => {
    boardDOM.removeEventListener('mouseover', drawing)
    boardDOM.addEventListener("click", drawing)
});

colorSelectDOM.addEventListener('click', (e) => {
    console.log(e.target.id)
    color = e.target.id
})

sizeDOM.addEventListener('change', (e) => {
    boardSize = e.target.value;
    setNewBoard();
})

clearBtn.addEventListener('click', setNewBoard)



window.onload = (event) => {
    buildTheGrid(16);
    colors.forEach(element => {
        element.style.backgroundColor = element.id
    })
};