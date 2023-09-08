import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemAmount=cartItems[id];
  return (
    <div className='product'>

        <img src={productImage} alt='productImage'/>
        <div className='description'>
         <p>
            <b style={{color:'black'}}>{productName}</b>
         </p>
         <p style={{color:'black'}}>${price}</p>
        </div>
        <Button onClick={()=>addToCart(id)} className='addToCartBttn' variant="contained" size="small">
          Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
        </Button>
    </div>
  )
}

export default Product