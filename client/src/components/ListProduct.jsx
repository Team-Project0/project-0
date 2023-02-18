import React from 'react'
import ProductDetails from './ProductDetails.jsx'

const ListProduct = ({items}) => {
  return (
    <div>
       <div className="grid-container-product1">   
    {items.map(item => (
      
        <ProductDetails item={item} />
      
    ))}
    </div>
 
    </div>
  )
}

export default ListProduct;
