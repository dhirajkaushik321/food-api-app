import React from 'react'
import Loading from './Loading.gif'
const Spinner = () => {
    return (
        <div style={{marginLeft:'30%'}}>
            <img src={Loading} alt="loading"/>
        </div>
    )
}

export default Spinner
