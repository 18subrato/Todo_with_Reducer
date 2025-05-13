import React, { useRef, useState } from 'react'

const TodoRef2 = () => {
    const inputRef = useRef('');
    
    const [todos,setTodos] = useState([]);
    console.log(todos)
    function handleFormSubmit(e){
        e.preventDefault();
        let obj = {
            id: Date.now(),
            task: inputRef.current.value,
        }
        setTodos([...todos,obj]);
        inputRef.current.value = '';
    }

    function handleDelete(id){
        const updatedTodo = todos.filter((item)=>item.id != id)
        setTodos(updatedTodo);
    }

  return (
    <div>
      <h1>TodoRef</h1>
      <form onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Enter task' ref={inputRef} />
        <button type='submit'>Add</button>
      </form>
      {todos.map((item)=>(
        <p key={item.id}>{item.task}<span><button onClick={()=>handleDelete(item.id)}>Remove</button></span></p>
      ))}
    </div>
  )
}

export default TodoRef2
