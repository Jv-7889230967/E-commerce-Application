import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./Cart-items";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Alert from "@mui/material/Alert";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  
  
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePlaceOrderClick = () => {
  
    setLoading(true);

  
    setTimeout(() => {
     
      setLoading(false);
      setShowAlert(true);
    }, 2000);
  };

 
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="cart">
      <div>
        <h1>
          Your Cart Items <FaShoppingCart size={30} />
        </h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p style={{ color: "black" }}> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button onClick={handlePlaceOrderClick}> Place Order </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}

     
      {loading && (
        <div className="modal-overlay">
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        </div>
      )}

     
      {showAlert && (
        <Alert variant="outlined" severity="success">
          Congratulations, your order was placed!
        </Alert>
      )}
    </div>
  );
};

export default Cart;
