import React, { useContext, useEffect, useState } from 'react'
import {UserContext} from '../App'
import style from './style.module.css'

const Content = () => {
    const [count,setCount] = useState(0)
    const [flag, setFlag] = useState(false)
    let cont = useContext(UserContext)
    let [color,setColor] = useState(false)

    console.log(cont)

    function increaseCount(){
        let y =count+1
        setCount(y)
    }

    useEffect (() =>{
        alert("Content button clicked.")
    },[flag])


    function handleFlag(){
        setFlag(!flag)
    }

    function handleToggle(){
        setColor(!color)
    }


    return (
    <div className='togg'>
        <button onClick={handleToggle}>Toggle</button><br/>
        <div className={color ? style.kl : style.lk}>
            {flag && cont}<br/>
            <button onClick={handleFlag}>Content</button>
            <br />
            <div className={color ? style.kl : style.lk}>
                {count}
            </div>
            <br/>
            <button onClick={increaseCount}>Like</button>
        </div>
    </div>
  )
}

export default Content