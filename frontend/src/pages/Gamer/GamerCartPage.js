import React from "react";
import { useState, useEffect } from "react";
import NavBarGamer from "../../components/Gamer/NavBarGamer.js";
import MyCartList from "../../components/Gamer/MyCartList";
import "./styles/GamerCartPage.css"

// Yuanyuan
// Gamer Cart Page
const GamerCartPage = () => {
  let curUser = JSON.parse(sessionStorage.getItem("currUser"));
  let [cartItem, setCartItem] = useState([]);
  console.log("cartItem:", cartItem);
  const cartItemInfo = async () => {
    const userInfo = {
      userName: curUser.userName,
      role: curUser.role,
      cart: curUser.cart,
    };
    const cartInfo = await fetch("/api/getCartItems" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    console.log("Cart information:", cartInfo);
    if (!cartInfo.ok) {
      console.log("Error:", cartInfo.status);
    } else {
      let userCart = await cartInfo.json();
      let cartItems = userCart.cart; 
      console.log("Cart items are:", cartItems);
      setCartItem(cartItems);
    }
  };
  useEffect(() => {
    cartItemInfo()
  }, []);

  return (
    <div id="gamerCartContainer">
      <NavBarGamer />
      {/*<MyCartList cart={curUser.cart} cartItemInfo={cartItemInfo} />*/}
      <MyCartList cart={cartItem} cartItemInfo={cartItemInfo} />
      <div className="footer">
        <div className="center">Copyright 2021</div>
        <div className="center">Designed by Nathaniel & Yuanyuan</div>
      </div>
    </div>
  );
}

export default GamerCartPage;