import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

function App() {

  const hoidanit = `Eric`
  const addNewTodo = () => {
    alert(`Hello`)
  }


  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={hoidanit}
      />
      <div className='todo-image'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  )

}

export default App
