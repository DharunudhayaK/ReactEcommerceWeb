import React, { useEffect, useReducer } from 'react'
const Fetch = ({ state = [], handleAddCart }) => {
    return (
        <div className='imageDiv'>
            {
                state['positiveResponse']?.map((ele) => {
                    return (
                        <div className='img'>
                            <img src={ele['image']} alt='img' width='250px' height='220px' ></img>
                            <h3 className='imgTitle'>{ele['title']}</h3>
                            <h2 className='category'>{ele['category']}</h2>
                            <h4 className='elePrice'>{ele['price']}</h4>
                            <p className='rate'>{ele['rating']['rate']}</p>
                            <p className='elePrice'>{ele['description']}</p>
                            <button className='cart' onClick={() => handleAddCart(ele)}>pin this</button>
                        </div>
                    )
                })
            }
            {/* <Content.Provider value={state['initialState']} >
                <Home />
            </Content.Provider> */}
        </div>
    )
}

export default Fetch
