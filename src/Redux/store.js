import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/userReducer'

const store = configureStore({
  reducer: {
    auth: authSlice
  },

})
export default store;