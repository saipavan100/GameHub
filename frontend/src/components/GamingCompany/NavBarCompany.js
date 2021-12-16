import { Link } from "react-router-dom";
import "./styles/NavBarCompany.css";

// Nav bar component for gaming company publicist main page
// Nathaniel
const NavBarCompany = () => {
  // Current user data (gaming company publicist)
  let currUserData = sessionStorage.getItem("currUser");
  currUserData = JSON.parse(currUserData);

  return (
    <nav className="navbar navbar-expand-lg sticky-top justify-content-between navbar-light navBarCompany">
      <ul className="navbar-nav navItems">
        <li className="imageNavItem">
          <img src="../../../gameIcon.png" alt="gameIconImg" />
        </li>
        <li className="nav-item publishGameNavItem">
          <Link className="nav-link" to="/gamingCompany">
            Publish Game
          </Link>
        </li>
        <li className="nav-item myGamesNavItem">
          <Link className="nav-link" to="/gamingCompany/myGames">
            My Games
          </Link>
        </li>
        <li className="nav-item storeNavItem">
          <Link className="nav-link" to="/gamingCompany/store">
            Store
          </Link>
        </li>
      </ul>
      <div className="welcomeGamingCompanyPublicist">
        Welcome {currUserData.userName}
      </div>
      <Link className="btn logoutButtonCompany" to="/">
        Logout
      </Link>
    </nav>
  );
};

export default NavBarCompany;
