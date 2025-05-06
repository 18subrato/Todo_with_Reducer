import React, { useState } from 'react'

const Todo = () => {

    const [inputVal,setInputVal] = useState('')
    const [todos,setTodos] = useState([])

    function handleInputChange(e){
        setInputVal(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault(); 
        if(inputVal.length < 1){
            alert('todos empty')
            return ;
        }
        const obj = {
            id:Date.now(),
            val:inputVal,
        }

        setTodos([...todos,obj]);
        setInputVal('');
    }

    function handleDelete(id){
        const updateTodo = todos.filter((item)=>item.id !== id)
        setTodos(updateTodo);
    }

    console.log(todos);

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='enter task' value={inputVal} onChange={handleInputChange} />
        <br />
        <button type='submit'> 
            Add
        </button>
      </form>
      {todos.map((item)=>(
        <li key={item.id}>{item.val}<span><button onClick={()=>handleDelete(item.id)}>Delete</button></span></li>
      ))}
    </div>
  )
}

export default Todo
