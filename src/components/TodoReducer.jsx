import React, { useReducer, useRef } from 'react'

const initialState = {
    todo: []
}
function reducer(state, action) {
    switch (action.type) {
        case 'add': {
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        }

        case 'delete': {
            const updatedTodo = state.todo.filter((item) => item.idx !== action.payload)
            return {
                ...state,
                todo: updatedTodo
            }
        }

        default: return state;
    }
}


const TodoReducer = () => {

    const inputRef = useRef('');
    const [state, dispatch] = useReducer(reducer, initialState)
    function handleSubmit(e) {
        e.preventDefault();
        const obj = {
            idx: Date.now(),
            data: inputRef.current.value
        }
        console.log(obj);
        dispatch({ type: 'add', payload: obj })
        inputRef.current.value = '';

    }


    console.log('todo', state.todo)

    return (
        <div>
            <h1>Todo With useReducer</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter task' ref={inputRef} />
                <br />
                <br />
                <button type='submit'>Add</button>
            </form>
            {state.todo.map((currElem)=>(
                <div key={currElem.idx}>{currElem.data}<span style={{marginLeft:'10px', padding:'10px'}}><button onClick={()=>dispatch({type:'delete',payload:currElem.idx})}>delete</button></span></div>
            ))}
        </div >
    )
}

export default TodoReducer
