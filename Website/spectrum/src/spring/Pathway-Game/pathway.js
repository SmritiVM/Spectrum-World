// pathway.js
import {useEffect} from "react";
import './pathwaystyle.css';

export default function Pathway(){
const numRows = 10;
const numCols = 19;
const tileSize = 80;

const board = document.getElementById('board');
const Person = document.getElementById('character');

const boardData = new Array(numRows).fill(null).map(() => new Array(numCols).fill(0));

let PersonRow = 9;
let PersonCol = 9;

function createGrid(){
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const tile = document.createElement('div');
        tile.className = 'tile';

        // Creating the paths
        if (
            ((4 < col && col < 7) && (0 <= row && row <= 5)) ||
            ((11 < col && col < 14) && (0 <= row && row <= 5)) ||
            ((5 <= col && col <= 13) && (6 <= row && row <= 7)) ||
            ((8 <= col && col <= 10) && (8 <= row && row <= 9))
        ) {
            const stone = document.createElement('img');
            stone.src = 'stonetile.png'; // Path to the stone pathway image
            stone.alt = 'Path';
            stone.style.display = 'block';
            tile.style.backgroundColor = 'transparent';
            stone.style.width = '100%';
            stone.style.height = '100%';
            tile.appendChild(stone);
            boardData[row][col] = 1;
        } else {
            const meadow = ['flowertile11.png', 'flowertile12.png', 'flowertile8.png', 'flowertile10.png'];
            const fieldtile = meadow[Math.floor(Math.random() * meadow.length)];
            const grass = document.createElement('img');
            grass.src = fieldtile;
            grass.alt = 'Grass';
            grass.style.display = 'block';
            tile.style.backgroundColor = 'transparent';
            grass.style.width = '100%';
            grass.style.height = '100%';
            tile.appendChild(grass);
            boardData[row][col] = 0;
        }
        board.appendChild(tile);
    }
}



document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (boardData[PersonRow - 1][PersonCol] === 1) {
                PersonRow--;
                updatePersonPos();
            }
            break;
        case 'ArrowDown':
            if (boardData[PersonRow + 1][PersonCol] === 1) {
                PersonRow++;
                updatePersonPos();
            }
            break;
        case 'ArrowLeft':
            if (boardData[PersonRow][PersonCol - 1] === 1) {
                PersonCol--;
                updatePersonPos();
            }
            break;
        case 'ArrowRight':
            if (boardData[PersonRow][PersonCol + 1] === 1) {
                PersonCol++;
                updatePersonPos();
            }
            break;
    }
});
}

function updatePersonPos() {
    const top = PersonRow * tileSize;
    const left = PersonCol * tileSize;
    Person.style.top = `${top}px`;
    Person.style.left = `${left}px`;
}

useEffect(() => {
    createGrid()
}, [])

return(
    <div className="pathwayGrid">
    <div id = "board"></div>
    <img id = "character" src="avatar.png" alt = "Person"></img>
    </div>
)
}
