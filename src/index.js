import 'normalize.css'
import './styles/app.css'

import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Game from './containers/game'
import createStore from './stores'
import {ANALYTICS_RESULTS} from './constants'
import config from 'config'

const store = createStore()

if (config.appEnv == 'dist'){
    store.subscribe(() => {
        const board = store.getState().board
        if (board.isGameOver){
            ga('send', 'event', 'game', 'play', 'Result', ANALYTICS_RESULTS[board.result])
        }
    })
}

ReactDOM.render((
    <Provider store={store}>
        <Game/>
    </Provider>
), document.getElementById('app'))
