import { Input, notification } from 'antd';
import { Button } from "antd";
import { useState } from 'react';
import { createUserAPI } from '../../services/api.services';
import '../../style/userForm.css'


function UserForm() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleName = (e) => {
        setFullName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleSubmit = async () => {
        const res = await createUserAPI(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: 'Create User',
                description: 'Tao user thanh cong'
            })
        } else {
            notification.error({
                message: 'Error Create User',
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <div className='User-Form'>
            <div>
                <label>Full Name</label>
                <Input onChange={e => handleName(e)} value={fullName} />
            </div>
            <div>
                <label>Email</label>
                <Input onChange={e => handleEmail(e)} value={email} />
            </div>
            <div>
                <label>Password</label>
                <Input.Password onChange={e => handlePassword(e)} value={password} />
            </div>
            <div>
                <label>Phone Number</label>
                <Input onChange={e => handlePhone(e)} value={phone} />
            </div>
            <div className="container">
                <Button onClick={handleSubmit} type="primary">Submit</Button>
            </div>

        </div>
    )
}

export default UserForm