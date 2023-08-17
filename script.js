const container = document.querySelector('.container');
const boardDOM = document.querySelector('.board');


function buildTheGrid(times) {
    let gridCellSize = boardDOM.clientWidth / times;
        for(let i = 0; i < (times * times); i++){
            let gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridCell.style = `width : ${gridCellSize}px; height : ${gridCellSize} px`
            boardDOM.append(gridCell);
        }
    }

// function buildTheGrid(times){
//     for(let i = 0; i < (times*times); i++){
//         let divDOM = document.createElement("div");
//         divDOM.classList.add("grid-element");
//         divDOM.style.width = `${window.innerWidth / times-1}px`;
//         divDOM.style.height = `${window.innerHeight / times-1}px`;
//         divDOM.style.border = '1px solid black';
//         container.append(divDOM);
//     }
// }


buildTheGrid(16);