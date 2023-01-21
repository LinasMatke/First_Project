import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/sql/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                navigate('/');
            }
        });
    }

    return (

<div>
    <header className="headerLogin">
            <div class="headerData">
                <img src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png" alt="bookHouse" class="headerImg"/>
                <h1 class="headerTitle">House of Books</h1>
                <h2 class="headerParagraph">BEST IN MARKET</h2>
            </div>
    </header>    

    <div className="loginas" id="loginData">
        <form className="myLogin" id="myLogin" onSubmit={handleLogin}>
            <div>
                <label className="loginas0" for="nameField">Login (enter your login details)</label>
            </div>
            <div>
            <input 
                type="email" 
                placeholder="Email" 
                id="EmailField" 
                className="usdata" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
            />
            </div>
            <div>
            <input type="text" placeholder="Password" id="PasswordField" className="usdata" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div>
            <input className="button-primary" type="submit" value="Login"/>
            </div>
        </form>
            
            <div>
                <p className="loginParachraf">Don't have an account? <a href="http://127.0.0.1:3000/registration">Registration</a></p>
            </div>
            <div>
                <p className="loginParachraf"><a href="http://127.0.0.1:3000/password">Forgot password?</a></p>
            </div>
        
    </div>

    <footer className="footerLogin">
            <div>
                   <p> © 2023 UAB „House of Books“. Visos teisės saugomos. _1 v1.10 </p>
            </div>
        </footer>

</div>

)}