import React, {useState} from 'react'
import {connect} from "react-redux"
import {useDispatch} from "react-redux"
import {addUser} from '../redux/userAction.jsx'
import '../App.css'

const UserForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleForm = (e) => {
        e.preventDefault()
        addUser({name, email, password})
        dispatch(addUser({name,email,password}))
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <form onSubmit={handleForm}>
                <input type="text" placeholder='Имя' value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Пароль' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Добавить</button>
            </form>
        </div>
    )
}

export default connect(null, {addUser})(UserForm)