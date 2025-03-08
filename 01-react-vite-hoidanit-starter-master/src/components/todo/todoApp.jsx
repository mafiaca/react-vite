import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

function TodoApp() {
    // Data fake
    const [todoLists, setTodoLists] = useState([
        { id: 1, fullName: 'Learning React' },
        { id: 2, fullName: 'Learning Java' }
    ]);

    // Function thêm công việc mới
    const addNewTodo = (input) => {
        setTodoLists([
            ...todoLists,
            { id: todoLists.length + 1, fullName: input }
        ]);
    };

    // Function xóa công việc
    const deleteTodo = (id) => {
        setTodoLists(prev => prev.filter(todoList => todoList.id !== id));
    };

    return (<div className="todo-container">

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
    )
}

export default TodoApp