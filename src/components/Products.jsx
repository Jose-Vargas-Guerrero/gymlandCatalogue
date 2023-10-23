import React from 'react'
import { useId, useState } from 'react'
import products from './products'
import './products.css'


function Products() {
    const id = useId()
    const [selectectProduct, setselectectProduct] = useState(null)
    const handleSelectedProduct = (product) => {
      setselectectProduct(product)
    }
    const handleSetNull = () => {
      setselectectProduct(null)
    }
  return (
    <div className='products-container'>
       {
        products.map((p) => (
            <div className='box' id={id}>
            <div className='imageBox'>
            <img className='product-image' src={p.image}/>
            <img className='product-image fade' src={p.image2}/>
            </div>
            <h4 className='product-name'>{p.name}</h4>
            <p className='product-type'>{p.category}</p>
            <p className='color'>{p.color}</p>
            <strong className='price'>${p.price}</strong>
            
        </div>
        ))
       }
    </div>
  )
}



export default Products