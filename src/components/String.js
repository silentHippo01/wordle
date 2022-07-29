import React, { useState } from 'react';
import '../styles/Board.scss';
import Cell from './Cell';
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';


const String = (props) => {
    let letters = [];
    if(props.item != undefined){
       letters = props.item.split("");
       console.log(letters);
    }

    return (
        <div>
            <div className="board_string">
                <Cell letter={letters[0]} />
                <Cell letter={letters[1]} />
                <Cell letter={letters[2]} />
                <Cell letter={letters[3]} />
                <Cell letter={letters[4]} />
            </div>
        </div>
    );
};

export default String;