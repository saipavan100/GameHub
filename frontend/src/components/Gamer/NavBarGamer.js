import { Link } from "react-router-dom";
import "./styles/NavBarGamer.css";
// Yuanyuan 
// Gamer Navbar
const NavBarGamer = () => {
    return (
        <nav className="navbar navbar-expand-lg navBarGamer" role="navigation">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item navItemHome"><Link to="/gamer"><button className="button"><span>Home</span></button></Link></li>
                    <li className="nav-item navItemCart"><Link to="/gamer/myCart"><button className="button"><span>Cart</span></button></Link></li>
                    <li className="nav-item navItemStore"><Link to="/gamer/gamerStore"><button className="button"><span>Store</span></button></Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBarGamer;