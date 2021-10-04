import { configureStore, combineReducers } from '@reduxjs/toolkit'
import contador from './contador'
import modal from './modal'



const reducer = combineReducers({contador, modal})
const store = configureStore({ reducer })

export default store