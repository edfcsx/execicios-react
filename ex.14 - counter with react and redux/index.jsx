import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'
import counterReducer from './counterReducer';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
     counter : counterReducer
})

ReactDOM.render(<Provider store={createStore(reducers)}><Counter/></Provider>,document.getElementById('app'))