import {createStore ,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import axios from 'axios'

const defaultState = {
    value : 0,
    list:[
    ]
}
// 创建reducer
function counter(state=defaultState, action) {
    switch (action.type) {
        case 'INCREMENT': 
        //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.value = state.value + 1
        return newState
        case 'DECREMENT':
        let newState2 = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState2.value = state.value - 1
        return newState2
        case 'GET_LIST':
        let newState3 = JSON.parse(JSON.stringify(state)) 
                newState3.list = action.data //复制性的List数组进去
            return newState3.list
        default:
            return state
    }
}

// 创建store 有state和reducer
const store = createStore(counter,applyMiddleware(logger,thunk))

export default store


