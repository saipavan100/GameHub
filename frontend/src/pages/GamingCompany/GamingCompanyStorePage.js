import { useState, useEffect } from "react";
import StoreGamesList from "../../components/GamingCompany/StoreGamesList.js";
import "./styles/GamingCompanyStorePage.css";

// Store page of all published games that gaming company publicists can view
// Nathaniel
const GamingCompanyStorePage = () => {
  // storeGames state holds the array of games from the store
  // setStoreGames will set the state of storeGames
  let [storeGames, setStoreGames] = useState([]);

  // Function for loading store games data
  const loadStoreGamesData = async () => {
    console.log("Getting store games ...");

    // Fetch all store games from /api/getAllStoreGames route
    // and return the response (as raw data).
    // The response we get are all the store games.
    const storeGamesResRawData = await fetch("/api/getAllStoreGames");

    // If response is not returned successfully
    if (!storeGamesResRawData.ok) {
      console.log("Response status ", storeGamesResRawData.status);
    }

    // If response is returned successfully
    else {
      let storeGamesResData = await storeGamesResRawData.json();

      // An array of store games
      let storeGamesData = storeGamesResData.storeGames;
      // setMyGames will trigger a re-render of the StoreGamesList
      // component
      setStoreGames(storeGamesData);
    }
  };

  // useEffect for loading store games data and re-rendering GamingCompanyStore page
  // once.
  // This prevents the GamingCompanyStore page from loading store games data
  // and re-rendering in a loop.
  useEffect(() => {
    console.log("The effect (loading store games)");
    loadStoreGamesData();
  }, []);

  return (
    <div id="companyStoreContainer">
      <h1 className="gameStoreTitle">Game Store</h1>
      <div className="storeGamesInfo1">
        A list of games published by various gaming companies.
      </div>
      <div className="storeGamesInfo2">
        Your published games on behalf of the gaming company you work for
        appears in the store.
      </div>
      <div className="storeGamesInfo3">
        Whenever you delete a published game, that published game does not
        appear in the store.
      </div>
      <StoreGamesList storeGames={storeGames}></StoreGamesList>
      <div className="footer storeGamesFooter">
        <div className="storeGamesFooter1">Copyright 2021</div>
        <div className="storeGamesFooter2">
          Designed by Nathaniel & Yuanyuan
        </div>
      </div>
    </div>
  );
};

export default GamingCompanyStorePage;
