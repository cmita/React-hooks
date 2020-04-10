import React, { useRef} from  'react';

function Search(props){
    const nameRef = useRef();

    const searchMe= ()=>{
        console.log('search', nameRef.current.value);
        props.onClick(nameRef.current.value)
    }

    return(
        <React.Fragment>
            <input type="text" ref={nameRef}/>
            <button onClick={searchMe}>Search</button>
        </React.Fragment>
    )
}

export default Search;