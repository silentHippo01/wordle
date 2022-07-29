import React, { useEffect, useState } from 'react';
import { add } from '../reducers/stringSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Cell = (props) => {
    return (
        <div>
            <div className="board_string-cell"><p>{props.letter}</p></div>
        </div>
    );
};

export default Cell;