import "./logIn.css"
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <main className="logInPage">
            <form className="loginForm">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="button">Login</button>
            </form>
            <h2>New to <em>LINKSTASHER.IO</em> ?</h2>
            <Link to="/sign-up" className="signUpLink">Click here to sign-up</Link>
        </main>
    );
}
