import {Button,List } from 'antd'
import {connect} from 'react-redux'
import React, { Component } from 'react'
import store from './store'
import  {getListAction} from './actionCreator'
import axios from 'axios'

// const asyncAdd =()=>{
//     return (dispatch ,getState)=>{
//         setTimeout(() => {
//             dispatch({type: 'INCREMENT'})
//         }, 1000);
//     }
// }

const mapStateToProps = (state)=>{
    return{
        num: state.value,
        list:state.list
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
        getList: ()=>{
            return ()=>{
                dispatch(asyncAdd)
                console.log(asyncAdd())
            }
        }
    }
}

const asyncAdd = () => {
    let action 
    axios.post('https://www.fastmock.site/mock/7b97928f51421b2bc14557ad1d29692e/api/test/getList').then((res)=>{    
        const data = res.data.data.dataList
        action = getListAction(data)   
    })
    console.log(action)
    return (dispatch, getState) => {
            dispatch(action)
    }
}

class ReactReduxTest extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        console.log('this.state',this.state);
    }
    render() {
      return (
        <div>
          <h3>{this.props.num}</h3>
          <Button type='success' onClick={this.props.increment}> +1 </Button>
          <Button type='success' onClick={this.props.decrement}> -1 </Button>
          {/* <Button type='success' onClick={this.props.asyncIncrement}> 异步+1 </Button> */}

          <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index)=>(<List.Item >{item.name}</List.Item>)}
                    />   
              <Button type='success' onClick={ this.props.getList()}> 更新</Button>

                </div>
        </div>
      )
    }

    componentDidMount(){
     
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxTest)