import React, { useRef, useState } from 'react'

const TodoRef = () => {
    const inputRef = useRef('');
    const [todos,setTodos] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        const obj = {
            id: Date.now(),
            val: inputRef.current.value
        }
        setTodos([...todos,obj])
        inputRef.current.value = '';
      }

    function handleDelete(id){
        const updateTodo = todos.filter((item)=>item.id !== id);
        setTodos(updateTodo);
    }

    console.log(todos);

  return (
    <div>
      <h1>Todo Ref</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <br />
        <button type='submit'>Add</button>
      </form>
      {todos.map((item)=>(
        <li key={item.id}>{item.val}<span><button onClick={()=>handleDelete(item.id)}>Delete</button></span></li>
      ))}
    </div>
  )
}

export default TodoRef
