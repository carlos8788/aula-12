import { useEffect, useRef, useState } from "react"
import FormUser from "./FormUser"

function Users() {

    const [users, setUsers] = useState([])
    const formRef = useRef(null)

    useEffect(() => {
        fetch('https://665e0fe1e88051d604094a93.mockapi.io/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = Object.fromEntries( new FormData(event.target))
        console.log(data)
        fetch(`https://665e0fe1e88051d604094a93.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setUsers(prevData => [...prevData, data]);   
        })
        formRef.current.reset();      
    }

    return (
        <>
            <h2>Users</h2>
            <div className="d-flex justify-content-around align-items-center vh-100bg-info">
                <ul className="">
                    {users.map(user => <li key={user.id}>{user.fullname}</li>)}
                </ul>
                <FormUser handleSubmit={handleSubmit} formRef={formRef}/>
            </div>
        </>
    )
}
export default Users