import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

export default function configureStore(initialeState){
    return createStore(
        rootReducer,
        initialeState,
        applyMiddleware(thunk)
    )
}