function TodoNew(props) {

    console.log(props)
    return (
        <div>
            <input type="text" className="custom-input" placeholder="Nhập văn bản..." />
            <button className='add-button'>Add</button>
        </div>
    )
}

export default TodoNew
