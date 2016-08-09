import thunkMiddleware from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import reducer from './reducers/index'

export default compose (applyMiddleware(thunkMiddleware)) (createStore) (reducer)
