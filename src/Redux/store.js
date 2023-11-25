import { configureStore } from '@reduxjs/toolkit'
import authSlice from './reducers/userReducer'

/*const logMiddleware = (store) => (next) => (action) => {
    // on affiche chaque action dans la console
    console.log(action)
    return next(action)
}*/

const store = configureStore({
  reducer: {
    auth: authSlice
  },
  /*middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      logMiddleware,
  ],*/
})
export default store;