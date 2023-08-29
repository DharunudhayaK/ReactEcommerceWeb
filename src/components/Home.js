import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useReducer } from 'react'
import Fetch from './Fetch'

const initialState = {
    positiveResponse: [],
    cartItems: [],
    cartCount: 0,
}

const reduce = (state, action) => {
    switch (action['type']) {
        case 'APIRESPONSE':
            return {
                ...state,
                positiveResponse: action['payload'],
            }
        case 'cart':
            return {
                ...state,
                cartItems: [...state.cartItems, action['payload']],
            }
        case 'inc':
            return {
                ...state,
                cartCount: state.cartCount++
            }
        default:
            return state
    }
}

let isClick = { clicked: false }

const Home = () => {
    const location = useLocation()
    // console.log(location.state.data);
    const navigate = useNavigate()
    const [state, dispatch] = useReducer(reduce, initialState)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then((response) => response.data)
            .then((response) => {
                dispatch({ type: "APIRESPONSE", payload: response })
            })
    }, [])

    const handleAddCart = (ele) => {
        isClick['clicked'] = true
        if (!state['cartItems'].includes(ele)) {
            dispatch({ type: "cart", payload: ele })
        }
    }

    const handleSearch = (val) => {
        state['positiveResponse'].filter((value) => {
            if (value.category === val) {
                console.log(value);
                // dispatch({ type: "APIRESPONSE", payload: value })
            }
        })
    }

    function gotoCart() {
        dispatch({ type: "inc" })
        navigate('/Cart', { state: { capture: state['cartItems'] } })
    }

    return (
        <div className='navHead'>
            <nav className='navBar'>
                <div>
                    <h2 className='titleLabelA'>Capital <span className='titleLabelB'>shop</span></h2>
                </div>

                <div className='navBarB'>
                    <h2 className='loginLabel' onClick={() => navigate('Login')}>Login</h2>
                    <h2>About</h2>
                    <h2>Hello....<span className='unameLabel'>{location.state.inputA}</span></h2>
                    <form>
                        <input type='text' placeholder='what you want to buy peoples ?' className='searchInputBox' onInput={(event) => handleSearch(event.target.value)}></input>
                    </form>
                    <h2 onClick={gotoCart}>Cart <span>{state['count']}</span></h2>
                    {/* <Link to='Cart' state={state['cartItems']}><h2>Cart</h2></Link> */}
                </div>

            </nav>
            <Fetch state={state} dispatch={dispatch} handleAddCart={handleAddCart} />
        </div>

    )
}

export default Home
