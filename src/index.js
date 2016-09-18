import './styles/app.css'

import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Game from './containers/game'
import createStore from './stores'

const store = createStore()

ReactDOM.render((
    <Provider store={store}>
        <Game/>
    </Provider>
), document.getElementById('app'))
