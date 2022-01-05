import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'
import styled from 'styled-components';

const ThemeCont = styled.div`
margin: 20px 0;
` 

const ChangeColor = () => {
    const [color, setColor] = useState("")

    const dispatch = useDispatch();

    const changeColorClick = () => {
        dispatch(changeColor(color))
    }

    return (
        <ThemeCont>
            <input type="text" onChange={(ev) => {setColor(ev.target.value)}}/>
            <button 
            onClick={changeColorClick}
            >CHANGE COLOR</button>
        </ThemeCont>
    )
}

export default ChangeColor
