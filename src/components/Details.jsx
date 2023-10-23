import React from 'react'
import './Details.css'

function Details({info,handleSelectedProduct}) {
    if (info === null) {
        return undefined
    } else {
        return (
            <div className='details-container'>
                <h1>this is the info: {info.name}</h1>
                <img src={info.image} height='200px' alt={info.name}/>
                <img src={info.image2} height='200px' alt={info.name}/>
                <img src={info.image3} height='200px' alt={info.name}/>
                <img src={info.image4} height='200px' alt={info.name}/>
                <img src={info.image5} height='200px' alt={info.name}/>
                <br/>
                <button onClick={handleSelectedProduct}>close</button>
            </div>
          )
    }
}

export default Details