import { Link } from "react-router-dom";
import "./styles/NavBarCompany.css";

const NavBarCompany = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <ul>
        <li>
          <Link to="/gamingCompany">Store</Link>
        </li>
        <li>
          <Link to="/gamingCompany/myGames">My Games</Link>
        </li>
        <li>
          <Link className="btn btn-primary" to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarCompany;