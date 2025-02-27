import {createSlice } from '@reduxjs/toolkit'

const initialState={
        score:0,
        error:0,
        accuracy:0,
}

export const slicerr=createSlice({
    name: 'Typing',
    initialState: initialState,
    reducers:{
        UpdateScore:(state)=>{
            state.score+=1
        },
        UpdaterrorScore:(state)=>{
            state.error+=1
        },
        UpdateAccuracy:(state)=>{
            state.accuracy=Math.floor((state.score*100)/(state.error+state.score))
        }
    }
})

export const {UpdateScore,UpdaterrorScore,UpdateAccuracy}=slicerr.actions
export default slicerr.reducer