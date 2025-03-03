
function TodoData(props) {
    console.log(props)
    const { todoLists } = props

    return (
        <div style={{ marginTop: 30 }}>
            {todoLists.map((todoList) => {
                return <div key={todoList.id}>{todoList.name}</div>
            })}
        </div>
    )
}

export default TodoData
