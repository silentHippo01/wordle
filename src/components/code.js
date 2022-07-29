const dispatch = useDispatch();
let pressedKey;

function f1(Key){
    dispatch(add(Key));
}

function eventHandler(e) {
    pressedKey = String(e.key);
    if(pressedKey.match(/[a-z]/gi) && pressedKey !== 'Enter' && pressedKey !== 'Backspace'){
        f1(pressedKey);
    }

    if(pressedKey === 'Enter'){
        console.log('Нажат Enter');
    }

    if(pressedKey === 'Backspace'){
        console.log('Нажат Backspace');
    }
}

useEffect(() => {
    return function cleanUp()
    {
        document.removeEventListener('keydown', eventHandler);
    }
});

 document.addEventListener('keydown', eventHandler);