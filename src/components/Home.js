
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useState, useContext, useEffect, useReducer } from 'react'
import Fetch from './Fetch'
// import { Content } from './App'

const initialState = {
    positiveResponse: [],
}

const reduce = (state, action) => {
    switch (action['type']) {
        case 'APIRESPONSE':
            return {
                positiveResponse: [...state.positiveResponse, action['payload']],
            }
    }
}

const Home = () => {
    // const store = useContext(Content)
    // console.log(store);
    const [search, setSearch] = useState("")

    const [state, dispatch] = useReducer(reduce, initialState)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then((response) => response.data)
            .then((response) => {
                dispatch({ type: "APIRESPONSE", payload: response })
            })
    }, [])

    const handleAddCart = (ele) => {
        console.log(ele);
    }
    const handleSearch = (val) => {
        state['positiveResponse'].map((value) => {
            value.filter((ele) => {
                // console.log(ele['category'] === val)
                console.log(ele['category']);
            })
        })
    }
    return (
        <div>
            <nav className='navBar'>
                <div>
                    <h2 className='titleLabelA'>Capital <span className='titleLabelB'>shop</span></h2>
                </div>
                <div className='navBarB'>
                    <Link to='Login'><Outlet /><h2 className='loginLabel'>Login</h2></Link>
                    <h2>About</h2>
                    <h2>Product</h2>
                    <h2>Description</h2>
                    <form>
                        <input type='text' placeholder='what you want to buy peoples ?' className='searchInputBox' onInput={(event) => handleSearch(event.target.value)}></input>
                    </form>
                </div>

            </nav>
            <Fetch state={state} dispatch={dispatch} handleAddCart={handleAddCart} />
        </div>

    )
}

export default Home
