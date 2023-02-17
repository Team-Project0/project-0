import React from 'react'
import ProductDetails from './ProductDetails.jsx'

const ListProduct = ({items}) => {
  return (
    <div>
        
    {items.map(item => (
      
        <ProductDetails item={item} />
      
    ))}
 
    </div>
  )
}

export default ListProduct;
