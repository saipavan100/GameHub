import React from "react";
import MyCartItem from "./MyCartItem.js";
import "./styles/MyCartList.css";

// Yuanyuan
// Cart List, holing cart items
const MyCartList = ({ cart, getCartItems }) => {

  const cartList = () => {
    return cart.map((c) => (
      <MyCartItem key={`gameID_${c._id}`} getCartItems={getCartItems} game={c}></MyCartItem>
    ));
  }

  return (
    <div className="cartItems col-md-4 col-sm-6">{cartList()}</div>
  );
}
export default MyCartList;