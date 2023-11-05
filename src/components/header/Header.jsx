import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header>
        <h1 className="headTitle">linkstasher.io</h1>
      <div className="interface">
        {loggedIn ? (
          <>
            <p className="logOut">Log Out</p>
            <i class="fa-solid fa-user"></i>
          </>
        ) : (
          <Link to="/log-in" className="logIn">
            Log-In
          </Link>
        )}
      </div>
    </header>
  );
}
