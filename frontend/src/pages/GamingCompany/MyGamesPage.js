import { useState, useEffect } from "react";
import MyGamesList from "../../components/GamingCompany/MyGamesList.js";
import "./styles/MyGamesPage.css";

// Gaming company publicist's published games page
// Nathaniel
const MyGamesPage = () => {
  // Current user data (gaming company publicist)
  let currUserData = sessionStorage.getItem("currUser");
  currUserData = JSON.parse(currUserData);

  // myGames state holds the array of my games for a gaming company publicist
  // setMyGames will set the state of myGames
  let [myGames, setMyGames] = useState([]);

  // Function for loading my games data for a gaming company publicist user
  const loadMyGamesData = async () => {
    console.log("Getting my games ...");

    // Send gaming company publicist user data to /api/getMyGames route and
    // return the response (as raw data).
    // The response we get is the gaming company publicists's published games
    const gamingCompanyUser = {
      userName: currUserData.userName,
      role: currUserData.role,
    };

    const myGamesResRawData = await fetch("/api/getMyGames", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gamingCompanyUser),
    });

    // If response is not returned successfully
    if (!myGamesResRawData.ok) {
      console.log("Response status ", myGamesResRawData.status);
    }

    // If response is returned successfully
    else {
      let myGamesResData = await myGamesResRawData.json();

      // An array of the current gaming company publicist's published games
      let myGamesData = myGamesResData.myGames;
      // setMyGames will trigger a re render of the MyGamesList
      // component
      setMyGames(myGamesData);
    }
  };

  // useEffect for loading my games data and re-rendering MyGames page
  // once.
  // This prevents the MyGames page (component) from loading my games data
  // and re-rendering in a loop.
  useEffect(() => {
    console.log("The effect (loading my games)");
    loadMyGamesData();
  }, []);

  return (
    <div>
      <h2 className="myGamesTitle">My Games</h2>
      <MyGamesList
        myGames={myGames}
        loadMyGamesData={loadMyGamesData}
      ></MyGamesList>
    </div>
  );
};

export default MyGamesPage;
