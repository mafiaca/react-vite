import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';


function App() {
  // Data fake
  const [todoLists, setTodoLists] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Learning Java' }
  ]);

  // Function thêm công việc mới
  const addNewTodo = (input) => {
    setTodoLists([
      ...todoLists,
      { id: todoLists.length + 1, name: input }
    ]);
  };

  // Function xóa công việc
  const deleteTodo = (id) => {
    setTodoLists(prev => prev.filter(todoList => todoList.id !== id));
  };

  return (
    <>
      <Header />

      <div className="todo-container">

        <h2 className="todo-title">Todo List</h2>

        <TodoNew addNewTodo={addNewTodo} />

        {todoLists.length !== 0 ? (
          <TodoData todoLists={todoLists} deleteTodo={deleteTodo} />
        ) : (
          <div className='todo-image'>
            <img className='logo' src={reactLogo} alt="React logo" />
          </div>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
