import {createSlice } from '@reduxjs/toolkit'

const initialState={
        score:0,
        error:0,
        timer:60,
}

const slicerr=createSlice({
    name: 'Typing',
    initialState: initialState,
    reducers:{
        
    }
})