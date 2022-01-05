import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';

const LoginCont = styled.div`
    width: 90%;
    ${centerIt};

    button {
        padding: 3px;
        margin: 10px 0;
    }
`

const Login = () => {
    return (
        <LoginCont>
            <button>Login</button>
        </LoginCont>
    )
}

export default Login
