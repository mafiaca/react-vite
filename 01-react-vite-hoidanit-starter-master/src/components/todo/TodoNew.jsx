import { useState } from "react"

function TodoNew(props) {
    const { addNewTodo } = props

    const [input, setInput] = useState('')

    function handleInput(e) {
        setInput(e.target.value)
    }


    function handleAdd() {
        addNewTodo(input)
        setInput('')
    }

    return (
        <div>
            <input value={input} onChange={e => handleInput(e)} type="text" className="custom-input" placeholder="Nhập văn bản..." />
            <button onClick={handleAdd} className='add-button'>Add</button>
            <div style={{ marginTop: 20 }}>My text input: {input}</div>
        </div>
    )
}

export default TodoNew
