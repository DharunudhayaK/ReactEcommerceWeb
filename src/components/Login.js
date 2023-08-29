import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    inputA: "",
    inputB: "",
    errA: "",
    errB: "",
}

const reduce = (state, action) => {
    switch (action['type']) {
        case 'uname':
            return {
                ...state,
                inputA: action['payload']
            }
        case 'pword':
            return {
                ...state,
                inputB: action['payload']
            }
        case 'err1':
            return {
                ...state,
                errA: action['payload']
            }
        case 'err2':
            return {
                ...state,
                errB: action['payload']
            }
        default:
            return state
    }
}

let isVerfied = { bool: true }
const Login = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reduce, initialState);

    function handleClick() {
        if (state['inputA'] === '' || state['inputB'] === '') {
            dispatch({ type: "err1", payload: "enter the username" }, { type: "err2", payload: "enter the password" })
            isVerfied['bool'] = false
        }
        if(isVerfied['bool'] === true && (state['inputA'] !== '' && state['inputB'] !== ''))
        {
            navigate('/Home', { state: { inputA: state.inputA } })
        }
    }

    return (
        <div className='loginDiv'>
            <div className='contentDiv'>
                <p className='content1'>Explore your favourite activities here</p>
                <p className='content2'>log in to grab the products</p>
            </div>
            <form className='formLabel'>
                <label className='labelA'>Username</label>
                <input type='text' placeholder='Uname' onInput={(event) => dispatch({ type: "uname", payload: event.target.value })} className='inputBoxA' required />
                <span className='err'>{state['errA']}</span>
                <label className='labelA'>Password</label>
                <input type='password' placeholder='Pword' onInput={(event) => dispatch({ type: "pword", payload: event.target.value })} className='inputBoxA' required />
                <span className='err'>{state['errB']}</span>
                <input type='button' value='submit' className='button' onClick={handleClick} />
            </form>
        </div>
    )
}

export default Login
