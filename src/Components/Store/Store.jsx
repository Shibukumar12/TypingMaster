import {configureStore} from '@reduxjs/toolkit'
import  slicerr  from './Slicing'

const store=configureStore({
    reducer:{
        Typingmaster:slicerr
    }
})

export default store
