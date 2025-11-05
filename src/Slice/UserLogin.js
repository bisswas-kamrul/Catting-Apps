import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  value:localStorage.getItem("UserLogine")
    ? JSON.parse(localStorage.getItem("UserLogine"))
    : 0, 
 
}

export const UserLogin = createSlice({
  name: 'UserLogine',
  initialState,
  reducers: {
    UserLogine: (state ,action) => {
      state.value = action.payload
       localStorage.setItem("UserLogine", JSON.stringify(action.payload));
    },
  },
})


export const { UserLogine } = UserLogin.actions

export default UserLogin.reducer