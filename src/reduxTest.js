import React, { Component } from 'react'
import store from './store'
import {Button} from 'antd'
import './index.css';
export default class reduxTest extends Component {
  increment = ()=>{
    store.dispatch({
      type:'INCREMENT'
    })
  }

  decrement =()=>{
    store.dispatch({
      type:'DECREMENT'
    })
  }
  render() {
    return (
      <div>
        <h3>{store.getState()}</h3>
        <Button type='success' onClick={this.increment}> +1 </Button>
        <Button type='success' onClick={this.decrement}> -1 </Button>
      </div>
    )
  }
}
