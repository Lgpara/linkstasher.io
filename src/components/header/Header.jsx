import { useState } from "react";
import {Link} from "react-router-dom";
import "./header.css"

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header>
        <h1 className="headTitle">linkstasher.io</h1>
      <div className="interface">
        {loggedIn ? (
          <>
            <p className="logTxt">Log Out</p>
            <i class="fa-solid fa-user"></i>
          </>
        ) : (
          <Link to="/log-in" className="logTxt">
            Log-In
          </Link>
        )}
      </div>
    </header>
  );
}
