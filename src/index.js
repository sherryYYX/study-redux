import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import ReduxTest from './reduxTest'
import ReactReduxTest from './reactReduxTest'
import {Provider} from 'react-redux'
import ReactThunkTest from './reactThunkTest'

let root= ReactDOM.createRoot(document.getElementById('root'))

// function render() {
//  root.render(<ReduxTest />)
// }


// react-redux 的使用 
// 1. 用Provider 把要用的组件包起来
function render() {
  root.render(
    <Provider store={store}>
      <ReactReduxTest />
    </Provider>
  )
 }

render()




// 注册 订阅 监听 每次 state 更新时
// store.subscribe(render)