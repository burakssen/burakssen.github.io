import { useEffect, useState } from 'react';
import produce from 'immer';

import '../styles/gameoflife.css';

import getPattern from '../components/gameoflife_patterns';

const Gameoflife = () => {

    const [grid, setGrid] = useState(() => {
        const rows = 50;
        const cols = 50;
        const array = [];
        for(let i = 0; i < rows; i++){
            array.push(Array.from(Array(cols), () => 0));
        }
        return array;
    });

    const [myInterval, setMyInterval] = useState(null); // [myInterval, setMyInterval ]
    const [prevGridList, setPrevGridList] = useState([]);
    const [start, setStart] = useState(false);
    const [initialGrid, setInitialGrid] = useState([]);

    const [enablePattern, setEnablePattern] = useState(false);

    const setPattern = (pattern) => {
        let t_pattern = getPattern(pattern);
        let patternArray = t_pattern.pattern;
        let padding = t_pattern.padding;
        const newGrid = produce(grid, gridCopy => {
            for(let i = 0; i < grid.length; i++){
                for(let k = 0; k < grid[i].length; k++){
                    gridCopy[i][k] = 0;
                }
            }

            for(let i = 0; i < patternArray.length; i++){
                for(let k = 0; k < patternArray[i].length; k++){
                    if(patternArray[i][k] === 1){
                        gridCopy[i + padding][k + padding] = 1;
                    }
                }
            }
        });
        setGrid(newGrid);
    }

    const stopInterval = () => {   
        clearInterval(myInterval);
        setMyInterval(null);
        setStart(false);
    }

    const clearGrid = () => {
        const rows = 50;
        const cols = 50;
        const array = [];
        for(let i = 0; i < rows; i++){
            array.push(Array.from(Array(cols), () => 0));
        }
        setGrid(array);
        setInitialGrid(array);
        setPrevGridList([]);
    }

    const returnToInitialGrid = () => {
        stopInterval();
        setTimeout(() => {
            setGrid(initialGrid);
            setPrevGridList([]);
        }, 100);
    }
    const RunGame = () => {
        const newGrid = produce(grid, gridCopy => {
            for(let i = 0; i < grid.length; i++){
                for(let k = 0; k < grid[i].length; k++){
                    // count all neighbors including diagonals
                    let neighbors = 0;
                    if(i > 0 && k > 0){
                        neighbors += grid[i - 1][k - 1];
                    }
                    if(i > 0){
                        neighbors += grid[i - 1][k];
                    }
                    if(i > 0 && k < grid[i].length - 1){
                        neighbors += grid[i - 1][k + 1];
                    }
                    if(k < grid[i].length - 1){
                        neighbors += grid[i][k + 1];
                    }
                    if(i < grid.length - 1 && k < grid[i].length - 1){
                        neighbors += grid[i + 1][k + 1];
                    }
                    if(i < grid.length - 1){
                        neighbors += grid[i + 1][k];
                    }
                    if(i < grid.length - 1 && k > 0){
                        neighbors += grid[i + 1][k - 1];
                    }
                    if(k > 0){
                        neighbors += grid[i][k - 1];
                    }
                    // rules of the game
                    if(grid[i][k] === 1 && (neighbors < 2 || neighbors > 3)){
                        gridCopy[i][k] = 0;
                    }
                    if(grid[i][k] === 0 && neighbors === 3){
                        gridCopy[i][k] = 1;
                    }
                }
            }
        });
        setGrid(newGrid);
    }

    useEffect(() => {
        if(start){
            setTimeout(()=> {
                if(prevGridList.length === 0){
                    setInitialGrid(grid);
                }
                RunGame();
                if(prevGridList.length > 10){
                    prevGridList.shift();
                }
                setPrevGridList([...prevGridList, grid]);
            }, 100);
        }

    }, [grid, start]);
    
    return (
        <div id="gameoflife">
            <h1 style={{color: "white"}}>Game of Life</h1>
            <div style={{display: "flex"}}>
                <div className="grid">
                    {grid.map((rows, i) =>
                        rows.map((col, k) => (
                            <div
                                key={`${i}-${k}`}
                                onClick={() => {
                                    const newGrid = produce(grid, gridCopy => {
                                        gridCopy[i][k] = grid[i][k] ? 0 : 1;
                                    });
                                    setGrid(newGrid);
                                }}
                                style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: grid[i][k] ? 'pink' : undefined,
                                    border: 'solid 1px black'
                                }}
                            />
                        ))
                    )}
                </div>
                <div style={{display: "grid"}}>
                    <button className='button' onClick={() => { setStart(true);}}>Run</button>
                    <div>
                        <select className='select' onChange={(e) => setPattern(e.target.value)}>
                            <option value="none">Please Select An Option</option>
                            <option value="glider">Glider</option>
                            <option value="small_exploder">Small Exploder</option>
                            <option value="exploder">Exploder</option>
                            <option value="10_cell_row">10 Cell Row</option>
                            <option value="lightweight_spaceship">Lightweight Spaceship</option>
                            <option value="tumbler">Tumbler</option>
                            <option value="gosper_glider_gun">Gosper Glider Gun</option>
                            <option value="pulsar">Pulsar</option>
                            <option value="r_pentomino">R-pentomino</option>
                            <option value="coe_ship">Coe Ship</option>
                        </select>
                    </div>
                    <button className='button' onClick={() => { stopInterval(); }}>Stop</button>
                    <button className='button' onClick={() => { returnToInitialGrid(); }}>Set initial state</button>
                    <button className='button' onClick={() => { clearGrid(); }}>Clear Grid</button>
                    <button className='button' onClick={() => {window.location.href = "/#"}}>Go back</button>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Gameoflife;