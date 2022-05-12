import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./login.css"

function SignUpForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

  return (
    <div className="login_area">
    <h1> Sign up for your account here!</h1>
    <form className="login_form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="login_element">
            Username
        </label>
            <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        <label htmlFor="password" className="login_element"> 
            Password
        </label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            <label htmlFor="password" className="login_element"> 
            Confirm Password
        </label>
            <input
            type="password"
            id="password_confirm"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            />
        <Button className="login_button_2" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
    </form>
    </div>
  );
}

export default SignUpForm;