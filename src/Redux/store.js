import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cakeReducer from './cakes/cakeReducer'
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk))) //earlier it was cakeReducer passed as arg


export default store
