import 'normalize.css'
import './styles/app.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Game from './containers/game'
import createStore from './stores'
import {ANALYTICS_RESULTS} from './constants'

const store = createStore()

store.subscribe(() => {
    const board = store.getState().board
    if (board.isGameOver){
        window.ga('send', 'event', 'game', 'play', 'Result', ANALYTICS_RESULTS[board.result])
    }
})

ReactDOM.render((
    <Provider store={store}>
        <Game/>
    </Provider>
), document.getElementById('root'))
