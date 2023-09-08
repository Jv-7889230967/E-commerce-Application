import React from 'react'
import Navbar from '../../components/Navbar'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './Shop.css'
const Shop = () => {
  return (
    <>
    <Navbar/>
    <div className='shop'>
      <div className='products'>
       {PRODUCTS.map((product)=>(
        <Product data={product}/>
       ))}
      </div>

    </div>
    </>)
}

export default Shop