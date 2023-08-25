// import React from 'react'
import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Home from './Home';

// export const Content = React.createContext();

const Fetch = ({ state = [], handleAddCart }) => {

    return (
        <div className='imageDiv'>
            {
                state['positiveResponse']?.map((value) => {
                    return value.map((ele) => {
                        return (
                            <div className='img'>
                                <img src={ele['image']} alt='img' width='250px' height='220px' ></img>
                                <h3 className='imgTitle'>{ele['title']}</h3>
                                <h2>{ele['category']}</h2>
                                <h4>{ele['price']}</h4>
                                <p className='rate'>{ele['rating']['rate']}</p>
                                <p>{ele['description']}</p>
                                <button className='cart' onClick={() => handleAddCart(ele)}>add to cart</button>
                            </div>
                        )
                    })

                })
            }
            {/* <Content.Provider value={state['initialState']} >
                <Home />
            </Content.Provider> */}
        </div>
    )
}

export default Fetch
