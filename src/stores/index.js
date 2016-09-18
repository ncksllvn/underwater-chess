import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers/index'


export default function(initialState){

    const middleware = applyMiddleware(
        thunk,
        createLogger()
    )

    const store = createStore(
        reducers,
        initialState,
        middleware
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

