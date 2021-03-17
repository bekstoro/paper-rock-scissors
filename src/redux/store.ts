import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers/index'

export default function configureStore() {
    const middleware = applyMiddleware(thunkMiddleware)
    return createStore(rootReducer, composeWithDevTools(middleware))
}
