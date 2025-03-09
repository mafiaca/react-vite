import UserTable from "../components/user/userTable"
import UserForm from "../components/user/userForm"
import { getUsersAPI } from "../services/api.services"
import { useState, useEffect } from "react"

function UsersPage() {
    const [usersData, setUsersData] = useState([])
    //Call API get danh sach user
    const loadUsers = async () => {
        const res = await getUsersAPI()
        setUsersData(res.data)
    }
    useEffect(() => {
        loadUsers()
    }, [])



    return (
        <>
            <div>
                <UserForm loadUsers={loadUsers} />
                <UserTable usersData={usersData} />
            </div>
        </>
    )

}

export default UsersPage

