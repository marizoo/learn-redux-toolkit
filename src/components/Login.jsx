import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'


const Login = () => {
    const dispatch = useDispatch();

    const changeName = () => {
        dispatch(login({
            name: "Brandi",
            age: 27, 
            email: "brandi@fake.com"
        }))
    }
    
    const logoutHandle = () => {
        dispatch(logout())
    }

    return (
        <div>
            <button onClick={changeName}>Login</button>
            <button onClick={logoutHandle}>Logout</button>
        </div>
    )
}

export default Login
