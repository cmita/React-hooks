import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import * as action from '../action.js'
import Search from './Search.js'


function TodoList(){ 
    let initialState=[]
       
    const [list, setList] = useState(initialState);
    const stateList = useSelector(state=>state.list);
    const dispatch = useDispatch();
 

    async function getList(){
        const data = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const json = await data.json();
       
        dispatch(action.load(json.data))
       // setList(json.data)
       
    }
    const searchMe=(value)=>{
        // console.log('I am here', value);
        // const filterList = stateList.filter((item)=>{
        //     console.log('item', item);
        //    return item.employee_name == value
        // });
        // console.log('filterList', filterList);
        // setList(filterList)
        dispatch(action.search(value));

    }

    useEffect(()=>{
        getList()

    },[])
        return(
            <React.Fragment>
    
            {stateList.map((item, index)=>{
                 return(
                <div key={index}>{item.employee_name}</div>
            )
           })}
            <Search onClick = {searchMe}></Search>
            </React.Fragment>
        )  
}

export default TodoList;