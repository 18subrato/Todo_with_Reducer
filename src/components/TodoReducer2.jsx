import React, { useReducer, useRef } from 'react'

const initialState = []
function reducer(state,action){
    switch(action.type){
        case 'add': {
            let arr = []
            arr.push(...state);
            arr.push(action.payload);
            return arr;
        }
        
        case 'remove':{
            const updatedTodo = state.filter((item)=>item.id != action.payload);
            return updatedTodo;
        }
    }
}
const TodoReducer2 = () => {
    const inputRef = useRef('');
    const [state,dispatch] = useReducer(reducer,initialState);
    console.log(state);
    function handleFormSubmit(e){
        e.preventDefault();
        let obj = {
            id: Date.now(),
            task: inputRef.current.value
        }

        dispatch({type:'add',payload:obj});
        inputRef.current.value = '';
    }
  return (
    <div>
      <h1>TodoReducer</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Enter task' ref={inputRef} />
        <button type='submit'>Add</button>
      </form>
      {state.map((item)=>(
        <p key={item.id}>{item.task}<span><button onClick={()=>dispatch({type:'remove',payload:item.id})}>Remove</button></span></p>
      ))}
    </div>
  )
}

export default TodoReducer2
