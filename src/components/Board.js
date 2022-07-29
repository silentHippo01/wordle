import React, { useEffect, useState } from 'react';
import '../styles/Board.scss';
import String from './String.js';
import { add } from '../reducers/stringSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux';

const Board = (props) => {
    const dispatch = useDispatch();
    const words = useSelector((state) => state.strings.letters);
    let word = [];

    useEffect(() => {
        return function cleanUp()
        {
            document.removeEventListener('keydown', eventHandler);
        }
    });

    function eventHandler(event) {
        let pressedKey = event.key;
        
        if(pressedKey.match(/[a-z]/gi) && pressedKey != 'Enter' && pressedKey != 'Control' && (word.length < 5)){
            word.push(pressedKey);
        }

        if(pressedKey === 'Enter' && word.length === 5){
            let attempt = word.join('');
            word = [];
            console.log(attempt);
            dispatch(add(attempt));
        }
    }
    document.addEventListener('keydown', eventHandler);

   return(
    <div>
        <String item={words[0]}/>
        <String item={words[1]}/>
        <String item={words[2]}/>
        <String item={words[3]}/>
        <String item={words[4]}/>
    </div>
   );
};

export default Board;