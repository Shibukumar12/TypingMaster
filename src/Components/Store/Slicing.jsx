import {createSlice } from '@reduxjs/toolkit'

const initialState={
        words:0,
        error:0,
        accuracy:0,
        wpm:0,
}

export const slicerr=createSlice({
    name: 'Typing',
    initialState: initialState,
    reducers:{
        UpdateScore:(state,action)=>{
            let minute=action.payload
            state.words+=1
            state.wpm=Math.floor((state.words/minute))
        },
        UpdaterrorScore:(state)=>{
            state.error+=1
        },
        UpdateAccuracy:(state)=>{
            state.accuracy=Math.round((state.words*100)/(state.error+state.words))
        },
        playAgain:(state)=>{
            state.accuracy=0
            state.error=0
            state.words=0
            state.wpm=0
        }
    }
})

export const {UpdateScore,UpdaterrorScore,UpdateAccuracy,playAgain}=slicerr.actions
export default slicerr.reducer