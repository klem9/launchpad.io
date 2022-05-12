import { Link } from "react-router-dom";
import "./nav.css"
import { Button } from "react-bootstrap";

function NavBar({user, setUser}){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
    }

    return(
    <header className="nav">
        <div className="homeLogoBox">
            <img id="homeLogo" src="./assets/home-logo.png" alt="Launchpad Logo"></img>
        </div>
        <div className="mid_nav">
            <Link className="mid_nav_items" to ="home">Home</Link>
            <Link className="mid_nav_items"to="/coins">Coins</Link>
            <Link className="mid_nav_items"to="/defi">DeFi Protocols</Link>
            <Link className="mid_nav_items"to="/yourportfolio">Your Portfolio</Link>
            <Link className="mid_nav_items"to="/yourwallet">Your Wallet</Link>
        </div>
        <div className="login_section">
        <style type="text/css">
        {`
        .btn-flat {
        background-color: #012169;
        color: white;
        }

        `}
  </style>
            {user ? (
                <Button variant="flat" onClick={handleLogoutClick}>Logout</Button>
            ) : (
            <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
            </>
            )}
        </div>
    </header>
    );
}

export default NavBar;