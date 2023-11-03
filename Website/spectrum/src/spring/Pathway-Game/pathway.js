import React, { useEffect, useRef } from "react";
import "./pathwaystyle.css";
import stonetile from './stonetile.png';
import flowertile11 from './flowertile11.png';
import flowertile12 from './flowertile12.png';
import flowertile8 from './flowertile8.png';
import flowertile10 from './flowertile10.png';
import avatar from './avatar.png';

export default function Pathway() {
  const tileSize = "5.2vw";
  //console.log(window.innerHeight);
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const vwToPx_w = window.innerWidth / 100;
  const tileHeight = parseFloat(tileSize) * vwToPx_w;
  const numRows = Math.floor(windowHeight / tileHeight);
  const numCols = Math.floor(windowWidth / tileHeight);

  const boardRef = useRef(null);
  const personRef = useRef(null);

  const boardData = new Array(numRows).fill(null).map(() => new Array(numCols).fill(0));
  const midCol = Math.floor(numCols / 2);
  
  let PersonRow = numRows-1;
  let PersonCol = midCol;

  function createGrid() {
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const tile = document.createElement("div");
        tile.className = "tile";

        // Creating the paths
        if (
          ((midCol-5 < col && col < midCol-2) && (0 <= row && row <= numRows-5)) ||
          ((midCol+2 < col && col < midCol+5) && (0 <= row && row <= numRows-5)) ||
          ((midCol-4 <= col && col <= midCol+4) && (numRows-4 <= row && row <= numRows-3)) ||
          ((midCol-1 <= col && col <= midCol+1) && (numRows-2 <= row && row <= numRows-1))
        ) 
        {
          const stone = document.createElement("img");
          stone.src = stonetile; // Path to the stone pathway image
          stone.alt = "Path";
          stone.style.display = "block";
          tile.style.backgroundColor = "transparent";
          stone.style.width = "100%";
          stone.style.height = "100%";
          tile.appendChild(stone);
          boardData[row][col] = 1;
        } 
        else {
          const meadow = [flowertile11, flowertile12, flowertile8, flowertile10];
          const fieldtile = meadow[Math.floor(Math.random() * meadow.length)];
          const grass = document.createElement("img");
          grass.src = fieldtile;
          grass.alt = "Grass";
          grass.style.display = "block";
          tile.style.backgroundColor = "transparent";
          grass.style.width = "100%";
          grass.style.height = "100%";
          tile.appendChild(grass);
          boardData[row][col] = 0;
        }
        boardRef.current.appendChild(tile);
      }
    }
  }

  function updatePersonPos() {
    const vwToPx = window.innerWidth / 100;
    const top = PersonRow * vwToPx * parseFloat(tileSize);
    const left = PersonCol * vwToPx * parseFloat(tileSize);
    //const top = PersonRow * tileSize;
    //const left = PersonCol * tileSize;
    personRef.current.style.top = `${top}px`;
    personRef.current.style.left = `${left}px`;
  }

  useEffect(() => {
    createGrid();
  }, []);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (PersonRow > 0 && (boardData[PersonRow - 1][PersonCol] === 1)) {
          PersonRow--;
          updatePersonPos();
        }
        break;
      case "ArrowDown":
        if (PersonRow < numRows-1 && boardData[PersonRow + 1][PersonCol] === 1) {
          PersonRow++;
          updatePersonPos();
        }
        break;
      case "ArrowLeft":
        if (boardData[PersonRow][PersonCol - 1] === 1) {
          PersonCol--;
          updatePersonPos();
        }
        break;
      case "ArrowRight":
        if (boardData[PersonRow][PersonCol + 1] === 1) {
          PersonCol++;
          updatePersonPos();
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="pathwayGrid">
      <div ref={boardRef} id="board"></div>
      <img ref={personRef} id="character" src={avatar} alt="Person"></img>
    </div>
  );
}
