import { configureStore } from '@reduxjs/toolkit'
import UserLoginReducer from '../../src/Slice/UserLogin'
export const store = configureStore({
  reducer: {
    UserLogin: UserLoginReducer,
  },
  
})