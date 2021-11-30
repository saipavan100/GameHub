import React from "react";
import { Link } from "react-router-dom";
import NavBarGamer from "../../components/Gamer/NavBarGamer.js";
import "./styles/GamerPage.css";

// Yuanyuan 
// Gamer Page
const GamerPage = () => {
  const currUser = JSON.parse(sessionStorage.getItem('currUser'));
  return (
    <div id="GamerPage">
      <NavBarGamer />
      <div className="container center">
        <h1 className="welcomeGamerPage">Welcome, {currUser.role} {currUser.userName}!</h1>
      </div>
      <div className="footer">
        <div className="center">Copyright 2021</div>
        <div className="center">Designed by Nathaniel & Yuanyuan</div>
      </div>
    </div>
  );
}

export default GamerPage;