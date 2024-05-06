import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : null, 
        token : null, 
        status : null
    },
   reducers : {
    setStatus(state,action){
        state.status = action.payload
    },
    setUser(state,action){
        state.user = action.payload
    },
    setToken(state,action){
        state.token = action.payload
    }
   } 
})

export const {setStatus,setUser,setToken} = authSlice.actions 
export default authSlice.reducer