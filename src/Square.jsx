import React from "react";
import "./Square.css"
import "./index.css"
import { useDispatch } from "react-redux";

export default function Square(props) {
    
    const colorFill = props.colorFill;

    const dispatch = useDispatch();
    
    return (
        <div onClick={() => dispatch({
            type: 'clickAction',
            x: props.x,
            y: props.y, 
        })}
            id="square"
            style={{backgroundColor: colorFill}}>
        </div>
    );

}