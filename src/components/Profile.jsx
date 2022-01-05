import React from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';
import { useSelector } from 'react-redux';

const ProfileCont = styled.div`
width: 90%;
${columnIt};
margin: 15px 0;
`

const Profile = () => {
    const user = useSelector( (state) => state.user.value );
    const themeColor = useSelector((state) => state.theme.value)

    return (
        <ProfileCont style={{color: themeColor}}>
            <h2>Profile Page</h2>
            <p>Name: {user.name} </p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </ProfileCont>
    )
}

export default Profile
