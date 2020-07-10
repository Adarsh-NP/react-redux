import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cakeReducer from './cakes/cakeReducer'
import rootReducer from "./rootReducer";
import logger from 'redux-logger'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))) //earlier it was cakeReducer passed as arg


export default store
