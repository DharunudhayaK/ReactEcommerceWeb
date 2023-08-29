// import React from 'react'
import { useState } from 'react';
import React, { useLocation } from 'react-router-dom';

const Cart = () => {
    const location = useLocation();
    const store = location.state.capture.map((item) => ({ ...item }))
    const [state, setState] = useState(store)

    const handleRemove = (index) => {
        const cap = state.filter((value, ind) => ind !== index)
        setState(cap)
    }

    const add = (id) => {
        const el = state.map((item) => {
            if (item.id === id) {
                return ({
                    ...item, count: item.count + 1,
                })
            }
            else {
                return (item)
            }
        })
        setState(el)
    }

    const sub = (id) => {
        const inc = state.map((item) => {
            if (item.id === id) {
                return ({
                    ...item, count: item.count - 1,
                })
            }
            else {
                return (item)
            }
        })
        setState(inc)
    }

    return (
        <div className='cartDiv'>
            {
                state.map((value) => {
                    return (
                        <div className='cartLabel'>
                            <img src={value['image']} alt='img' width='250px' height='220px' ></img>
                            <h3 className='imgTitle'>{value['title']}</h3>
                            <h4>Price : {value['price']}</h4>
                            <p>{value['description']}</p>
                            <div className='btnAdd'>
                                <button onClick={() => add(value.id)} className='addBtn'>+</button>
                                <p>{value.count}</p>
                                <button onClick={() => sub(value.id)} className='addBtn'>-</button>
                            </div>
                            <button className='removeBtn' onClick={() => handleRemove(state.indexOf(value))}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
