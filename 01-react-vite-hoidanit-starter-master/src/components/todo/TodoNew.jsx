import { useState } from "react"

function TodoNew(props) {
    const { setTodoLists } = props

    const [input, setInput] = useState('')

    function handleInput(e) {
        setInput(e.target.value)
    }
    console.log(input)

    function handleAdd() {
        setTodoLists(prev => [...prev, { id: prev.length + 1, name: input }])
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
