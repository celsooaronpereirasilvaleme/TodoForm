import { useState } from 'react'

const Todoform = ({addTodo}) => {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return;
    //Adicionar todo
    addTodo(value, category);
    setValue("");
    setCategory("");

   // console.log(value, category);
  };

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handlesubmit}>
        <input type="text"  placeholder='Digitar o titulo' 
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>

  )
}

export default Todoform