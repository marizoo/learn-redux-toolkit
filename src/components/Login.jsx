import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';


const LoginCont = styled.div`
    width: 90%;
    ${centerIt};

    button {
        padding: 3px;
        margin: 10px 0;
    }
`

const Login = () => {

    const dispatch = useDispatch();

    const changeName = () => {
        dispatch(login({
            name: 'Pedro', 
            age: '27',
            email: 'pedro@fake.com',
        }))
    }

    const revertName = () => {
                dispatch(logout())
    }

    return (
        <LoginCont>
            <button onClick={changeName}>Login</button>
            <button onClick={revertName}>Logout</button>
          
        </LoginCont>
    )
}

export default Login
