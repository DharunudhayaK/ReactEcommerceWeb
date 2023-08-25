import React from 'react'

const Login = () => {
    return (
        <div className='loginDiv'>
            <form className='formLabel'>
                <label className='labelA'>Username</label>
                <input type='text' placeholder='Uname' className='inputBoxA'/>
                <label className='labelA'>Password</label>
                <input type='text' placeholder='Pword' className='inputBoxA'></input>
                <button className='button'>Login</button>
            </form>
        </div>
    )
}

export default Login
