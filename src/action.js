export function load(value){
    return{
        type:"LOAD",
        payload:value

    }
}

export function search(value){
    return (dispatch, getState) => {
        const { list } = getState();
        dispatch({
          type: 'SEARCH',
          value:{
              payload:value,
              state:list
          }
        });
    };
}