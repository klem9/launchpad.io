import React,{useState} from "react";
import { Button } from "react-bootstrap";
import "./login.css"


function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
        })
        .then((r) => {
            if(r.ok){
                r.json().then(onLogin)
            }
            else{
                r.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
        e.target.reset();
    }
    return(
        <div className="login_area">
        <form className="login_form" onSubmit={handleSubmit}>
        <h1> Log in to your account here!</h1>
            <label htmlFor="username" className="login_element">
                Username
                <br/>
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
                <br/>
            </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <Button className="login_button_2" type="submit">Login</Button>
        </form>
        </div>
    )

}

export default LoginForm;