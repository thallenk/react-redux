import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import contador from './contador'
import modal from './modal'
import logger from './middleware/logger'
import login from './login'

const middleware = [...getDefaultMiddleware(),logger]

const reducer = combineReducers({contador, modal, login})
const store = configureStore({ reducer, middleware })

export default store