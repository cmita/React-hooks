let initalState ={
    list:[]
}
function reducer(state= initalState, action){
    switch(action.type){
        case 'LOAD':
        console.log('action', action.payload);
        return{
            ...state,
            list:action.payload
        }
        case 'SEARCH':
        
        console.log('action', action);
            return {
                ...state,
                list: action.value.state.filter((item)=>{
                    return item.employee_name == action.value.payload;
                })
            }

        default:
            return state
    }

}

export default reducer;