
import axios from 'axios'

export const getListAction =(data)=>{
    return{
        type: 'GET_List',
        data
    }
}
        

 const getTodoList = () =>{
    return ()=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            // dispatch(action)
        })
    }
}