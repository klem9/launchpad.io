
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { Button } from "react-bootstrap";
import "./login.css"

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login_container">
        <img id="login_logo" src="./assets/home-logo.png" alt="Launchpad Logo"></img>
        {showLogin? (
            <>
                <LoginForm onLogin={onLogin}/>
                <p className="signin_prompt">Don't have an account?
                <Button className="login_button" onClick={() => setShowLogin(false)}> Signup </Button>
                </p>
            </>
        ) : (
            <>
                <SignUpForm onLogin={onLogin}/>
                <p className="signin_prompt">Already have an account?
                <Button className="login_button" onClick={() => setShowLogin(true)}> Log in</Button>
                </p>
            </>
        )
        }
    </div>
  );
}

export default Login;