import { useCallback, useEffect, useState } from "react";

import "../styles/sudoku.css";

const Sudoku = () => {

    const [sudoku, setSudoku] = useState([]);
    const [sudokuSolved, setSudokuSolved] = useState([]);
    const [colors, setColors] = useState([]);
    
    const shuffle = useCallback((array) => {
      let currentIndex = array.length;
      let randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }, []);

    const findEmptyCell = useCallback((grid) => {
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
          if (grid[row][col] === 0) {
            return [row, col];
          }
        }
      }
      return [-1, -1];
    }, []);

    const isValidNumber = useCallback((grid, row, col, num) => {
      for (var i = 0; i < 9; i++) {
          if (grid[row][i] === num) {
              return false;
          }
      }
      
      for (var j = 0; j < 9; j++) {
        if (grid[j][col] === num) {
          return false;
        }
      }
  
      var startRow = Math.floor(row / 3) * 3;
      var startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
  
      return true;
  }, []);

  const removeNumbers = useCallback((grid) => {
    var emptyCells = 0;
    var maxEmptyCells = 81 - 17;
    
    while (emptyCells < maxEmptyCells) {
        var row = Math.floor(Math.random() * 9);
        var col = Math.floor(Math.random() * 9);

        if (grid[row][col] !== 0) {
            grid[row][col] = 0;
            emptyCells++;
        }
    }
  }, []);
  const solveSudoku = useCallback((grid) => {
      var cell = findEmptyCell(grid);
      var row = cell[0];
      var col = cell[1];

      if (row === -1) {
        return true;
      }
      let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      
      values = shuffle(values);


      for(let i = 0; i < values.length; i++){
        let num = values[i];
        if (isValidNumber(grid, row, col, num)) {
          grid[row][col] = num;

          if (solveSudoku(grid)) {
            return true;
          }
      
          grid[row][col] = 0;
        }
      }

      return false;
  }, [findEmptyCell, isValidNumber, shuffle]);

  

  const setSudokuValue = (row, col, value) => {
      var newSudoku = sudoku;
      newSudoku[row][col] = Number(value);
      setSudoku(newSudoku);

      console.log(sudokuSolved[row][col], value)

      if(parseInt(value) !== sudokuSolved[row][col]){
        let newColors = colors;
        newColors[row][col] = "red";
        setColors(newColors);
      }
      else {
        let newColors = colors;
        console.log("Here");
        newColors[row][col] = "white";
        setColors(newColors);
      }
    };

    const generateSudoku = useCallback(() => {

        var grid = [];
        for (var i = 0; i < 9; i++) {
          grid[i] = [];
          for (var j = 0; j < 9; j++) {
            grid[i][j] = 0;
          }
        }
      
        solveSudoku(grid);

        let newGrid = Array.from(grid, (arr) => [...arr]);

        setSudokuSolved(newGrid);

        removeNumbers(grid);

        setSudoku(grid);
    }, [solveSudoku, removeNumbers, setSudokuSolved, setSudoku]);

    useEffect(() => {
        generateSudoku();
    }, [generateSudoku]);

    useEffect(() => {
      var colors = [];
        for (var i = 0; i < 9; i++) {
          colors[i] = [];
          for (var j = 0; j < 9; j++) {
            colors[i][j] = "white";
          }
        }
        setColors(colors);
    }, []);

    return (
        <div className="table">
            <div style={{color: "white", marginBottom: "5rem", textAlign: "center"}}>Sudoku</div>
            <table className="table_1">
                <tbody>
                    {sudoku.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    if(cell === 0)
                                    {
                                        return (
                                            <td key={cellIndex}><input type="number" maxLength="1" onChange={(e) => {
                                              const val = e.target.value;
                                              if(val.length > 1){
                                                e.target.value = val.slice(0,1);
                                              }
                                              setSudokuValue(rowIndex, cellIndex, e.target.value)
                                              console.log(colors[rowIndex][cellIndex]);
                                              e.target.style.color = colors[rowIndex][cellIndex];
                                            }}/></td>
                                        )
                                    }
                                    else{
                                        return (
                                            <td key={cellIndex}><div className="num" style={{color:"white"}} key={cellIndex}>{cell}</div></td>
                                        )
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button className="button" style={{margin: "5vh",alignSelf: "center", justifySelf:"center"}} onClick={() => {window.location.href = "/#"}}>Go Back</button>
        </div>
        
    );
}

export default Sudoku;