const container = document.querySelector('.container');
const boardDOM = document.querySelector('.board');
const colorDOM = document.querySelector('#color');
const sizeDOM = document.querySelector('#size');
const clearBtn = document.querySelector('.clear-btn');

let color = "black";
let boardSize = 16;

function buildTheGrid(size) {
    let gridCellSize = boardDOM.clientWidth / size;
    for (let i = 0; i < (size * size); i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add(`grid-cell-${i + 1}`);
        gridCell.style = `width : ${gridCellSize}px; height : ${gridCellSize} px;`
        boardDOM.append(gridCell);
    }
}

function drawing(event){
    let gridElement = document.querySelector(`.${event.target.className}`);
    if (gridElement === null || gridElement.className === "board") return
    else if (gridElement !== null) {
        gridElement.style.backgroundColor = `${color}`;
    }
}

function setNewBoard(){
    boardDOM.innerHTML = "";
    buildTheGrid(boardSize);
}

boardDOM.addEventListener("mousedown", () => {
    boardDOM.addEventListener("mouseover", drawing)
});

boardDOM.addEventListener("mouseup", () => {
    boardDOM.removeEventListener('mouseover', drawing)
});

colorDOM.addEventListener('change', (e)=>{
    color = e.target.value
})

sizeDOM.addEventListener('change', (e)=>{
    boardSize= e.target.value;
    setNewBoard();
})

clearBtn.addEventListener('click', setNewBoard)

buildTheGrid(16);
console.log(colorDOM)