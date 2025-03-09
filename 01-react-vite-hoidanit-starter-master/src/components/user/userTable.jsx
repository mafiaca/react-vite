import { Space, Table, Tag } from 'antd';
function UserTable(props) {
    const { usersData } = props
    const handleDelete = () => {
        alert('Chức năng chưa phát triển')
    }
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
    return (<Table columns={columns} dataSource={usersData} rowKey='_id' />)
}

export default UserTable

