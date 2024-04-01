import React from "react"
import App from "../App"
export default function Game(props) {


    const [isX, setX] = React.useState(true);
    const [history, setHistory] = React.useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = React.useState(0);
    const currSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setX(!isX);
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);



    }
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setX(nextMove % 2 === 0);
    }
    const moves = history.map((squares, move) => {
        let desc;
        if (move > 0)
            desc = 'Go to move #' + move;
        else
            desc = 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    })
    return (
        <div className="game">
            <div>
                <App
                    squares={currSquares}
                    isX={isX}
                    onPlay={handlePlay}
                    className="game-board" />

                <button className="ResetB" onClick={() => jumpTo(0)}>Reset</button>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>

        </div>
    )
}
