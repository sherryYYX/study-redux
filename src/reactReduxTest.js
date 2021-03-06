import {Button} from 'antd'
import {connect} from 'react-redux'
import React, { Component } from 'react'

const mapStateToProps = (state)=>{
    return{
        num: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        increment: ()=>{
            dispatch({type: 'INCREMENT'})
        },
        decrement: ()=>{
            dispatch({type: 'DECREMENT'})
        },
    }
}

class ReactReduxTest extends Component {
    render() {
      return (
        <div>
          <h3>{this.props.num}</h3>
          <Button type='success' onClick={this.props.increment}> +1 </Button>
          <Button type='success' onClick={this.props.decrement}> -1 </Button>
        </div>
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTest)