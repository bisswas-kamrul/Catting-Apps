import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Mern-bangaladesh",
}

export const UserLogin = createSlice({
  name: 'UserLogine',
  initialState,
  reducers: {
    UserLogine: (state) => {
    },
  },
})


export const { UserLogine } = UserLogin.actions

export default UserLogin.reducer