import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {

  const [todoLists, setTodoLists] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Learning Java' }
  ])


  const hoidanit = `Eric`
  const addNewTodo = () => {
    alert(`Hello`)
  }


  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <TodoNew
        addNewTodo={addNewTodo}
        setTodoLists={setTodoLists}
      />
      <TodoData
        todoLists={todoLists}
        name={hoidanit}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )

}

export default App
