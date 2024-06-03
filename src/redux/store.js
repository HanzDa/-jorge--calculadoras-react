import { configureStore } from '@reduxjs/toolkit'
import propertiesReducer from './reducer'


export default configureStore({
  initialState: [],
  reducer:{
    properties: propertiesReducer
  },
})

