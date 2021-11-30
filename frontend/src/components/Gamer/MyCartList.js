import React from "react";
import MyCartItem from "./MyCartItem.js";
import "./styles/MyCartList.css";

// Yuanyuan
// Cart List, holing cart items
const MyCartList = ({ cart, cartItemInfo }) => {

  const cartList = () => {
    return cart.map((c) => (
      <MyCartItem key={`cartGameID_${c._id}`} cartItemInfo={cartItemInfo} game={c}></MyCartItem>
    ));
  }

  return (
    <div className="cartItems col-md-4 col-sm-6">{cartList()}</div>
  );
}
export default MyCartList;