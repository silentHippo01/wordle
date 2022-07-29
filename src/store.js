import { configureStore } from '@reduxjs/toolkit';
import stringsReducer from './reducers/stringSlice'

export default configureStore({
    reducer: {
        strings: stringsReducer,
    },
})