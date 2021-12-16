// import { useState, useEffect } from "react";
import PublishGameForm from "../../components/GamingCompany/PublishGameForm.js";
import "./styles/PublishGamePage.css";

// Gaming company publicist's publish game page
// Nathaniel
const PublishGamePage = () => {
  // Current user data (gaming company publicist)
  let currUserData = sessionStorage.getItem("currUser");
  currUserData = JSON.parse(currUserData);

  return (
    <div id="publishGameContainer">
      <h1 className="publishGameTitle">Publish a game</h1>
      <div className="publishGameInfo1">
        When you publish a game the game is published as the gaming company you
        work for.
      </div>
      <div className="publishGameInfo2">
        The gaming company you work for is {currUserData.gamingCompany}.
      </div>
      <div className="publishGameInfo3">
        You can view your published games in the My Games page and Store page.
      </div>
      <div className="publishGameInfo4">
        Note: Once you publish a game you cannot edit your published game but
        you can remove your published game.
      </div>
      {<PublishGameForm></PublishGameForm>}
      <div className="footer publishGameFooter">
        <div className="publishGameFooter1">Copyright 2021</div>
        <div className="publishGameFooter2">
          Designed by Nathaniel & Yuanyuan
        </div>
      </div>
    </div>
  );
};

export default PublishGamePage;
