import {createStore ,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// 创建reducer
function counter(state=0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}


// 创建store 有state和reducer
const store = createStore(counter,applyMiddleware(logger,thunk))

export default store