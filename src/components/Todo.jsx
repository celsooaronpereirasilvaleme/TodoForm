import { useState } from 'react'


const todo = ({todo, removeTodo, completeTodo}) => {


  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through": ""}}>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <dir>
      <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className='remove' onClick={() => removeTodo(todo.id)}>Deletar Tarefa</button>
    </dir>
  </div>
  )
}

export default todo