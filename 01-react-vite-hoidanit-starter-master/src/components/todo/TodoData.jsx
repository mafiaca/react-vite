
function TodoData(props) {
    const { todoLists, deleteTodo } = props

    function handleDelete(id) {
        deleteTodo(id)
    }

    return (
        <div style={{ marginTop: 30 }}>
            {todoLists.map((todoList) => {
                return (
                    <div key={todoList.id}>
                        <div>{todoList.name}</div>
                        <button onClick={() => handleDelete(todoList.id)} style={{ marginTop: 10, marginBottom: 10, fontSize: 17 }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData
