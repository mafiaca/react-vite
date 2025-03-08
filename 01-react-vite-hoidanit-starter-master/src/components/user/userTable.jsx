import { Space, Table, Tag } from 'antd';
import { getUsersAPI } from "../../services/api.services"
import { useEffect, useState } from 'react';


function UserTable() {
    const [usersData, setUsersData] = useState([])
    const handleDelete = () => {
        alert('Chức năng chưa phát triển')
    }

    useEffect(() => {
        const loadUsers = async () => {
            const res = await getUsersAPI()
            console.log(res.data)
            setUsersData(res.data)
        }
        loadUsers()
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            render: (role) => (
                <Tag color="blue">{role}</Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => handleDelete(record._id)}>Delete</a>
                </Space>
            ),
        },
    ];
    const data = [

    ];
    return (<Table columns={columns} dataSource={usersData} rowKey='_id' />)
}

export default UserTable