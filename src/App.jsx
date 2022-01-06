import React from 'react'
import styled from 'styled-components';
import ChangeColor from './components/ChangeColor';
import Login from './components/Login'
import Profile from './components/Profile'
import { centerIt, columnIt, mainColor } from './globalStyle';

const AppCont = styled.div`
width: 100vw;
${centerIt};
`

const AppWrapper = styled.div`
margin-top: 30px;
width: 450px;
${columnIt};
align-items: center;
border: 1px solid ${mainColor};
border-radius: 10px;
`

const App = () => {

  

  return (
    <AppCont>
      <AppWrapper>
        <Profile />
        <Login />
        <ChangeColor />
      </AppWrapper>
    </AppCont>
  )
}

export default App
