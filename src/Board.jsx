import React from "react";
import { useSelector } from "react-redux";
import Square from './Square';
import "./Board.css";


export default function Board() {

    const boardState = useSelector((state) => state.board);

    const boardcomponent = []; 

    for (let i = 0; i < boardState.length; i++) {
        let row = boardState[i];

        for (let j = 0; j < row.length; j++) {
            boardcomponent.push(<Square colorFill={boardState[i][j]} x={i} y={j}/>);
        };
    };

    return (
        <div>
            <div id="header"> &emsp;&emsp;Click Count: {boardState[1]} </div>
            <div id="board">{boardcomponent} </div>
        </div>
    );
}