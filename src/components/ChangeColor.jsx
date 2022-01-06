import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../features/theme'

const ChangeColor = () => {

    const [color, setColor] = useState("")

    const dispatch = useDispatch();

    const colorHandle = () => {
        dispatch(changeColor(color))
    }

    return (
        <div>
            <input type="text" value={color} onChange={(ev) => setColor(ev.target.value)}/>
            <button onClick={colorHandle}>Change Color</button>
        </div>
    )
}

export default ChangeColor
