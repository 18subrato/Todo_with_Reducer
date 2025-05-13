import React, { useState } from 'react'

const Todo2 = () => {
    const [inputval,setInputval] = useState('');
    const [todos,setTodos] = useState([]);
    function handleFormSubmit(e){
        e.preventDefault();
        let obj = {
            id: Date.now(),
            task: inputval
        }
        setTodos([...todos,obj]);
        setInputval('');
    }
    console.log(inputval,'inputval');
    console.log(todos,'todos');

    function handleDelete(id){
        const updateTodo = todos.filter((item)=> item.id != id)
        console.log(updateTodo);
       
       setTodos(updateTodo);
    }
  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleFormSubmit}>
        <input type='text' placeholder='Enter task' value={inputval} onChange={(e)=>setInputval(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      {todos.map((item)=>{
        return <p key={item.id}>{item.task}<span><button onClick={()=>handleDelete(item.id)}>Delete</button></span></p>
      })}
    </div>
  )
}

export default Todo2
