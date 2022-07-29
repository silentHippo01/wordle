import { WORDS } from './words.js';
import Board from './components/Board.js';
import './styles/App.scss';
import { useSelector, useDispatch } from 'react-redux';
import {add, addRightWord} from './reducers/stringSlice'
import { useState } from 'react';

function App() {
  // const NUMBER_OF_GUESSES = 6;
  // let guessesRemaining = NUMBER_OF_GUESSES;
  // let currentGuess = [];
  // let nextLetter = 0;
  // console.log(rightGuessString);

  const dispatch = useDispatch();
  
  let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)];
  dispatch(addRightWord(rightGuessString));

  return (
    <div className="App">
      <div>
        <h1 className='App_title'>Wordle</h1>
        <Board/>

      </div>

    </div>
  );
}

export default App;
