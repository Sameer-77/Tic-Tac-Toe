import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // Check all possible winning combinations
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]; // Return the winner ('X' or 'O')
            }
        }
        return null; // No winner
    };

    const winner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        if (!copyState[index] && !winner) { // Prevent clicking after a win
            copyState[index] = isXTurn ? "X" : "O";
            setState(copyState);
            setIsXTurn(!isXTurn);
        }
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }

    return (
        <div className="board-container">
            {winner ? (
                <h2>{winner} Won! <button onClick={handleReset}>Play Again</button> </h2>
            ) : (
                <>
                    <h3>It's player {isXTurn ? "X's Turn" : "O's Turn"}</h3>
                    <div className="board-row">
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </>
            )}
        </div>
    )
}

export default Board;
