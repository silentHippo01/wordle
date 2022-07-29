import { createSlice } from '@reduxjs/toolkit'

export const stringSlice = createSlice({
    name: 'strings',
    initialState: {
        letters: [],
        rightWord: '',
    }, 
    reducers: {
        add: (state, action) => {
            state.letters.push(action.payload);
        },
        addRightWord: (state, action) => {
            state.rightWord = action.payload;
        }
    }
})

export const {add, addRightWord} = stringSlice.actions;

export default stringSlice.reducer;
