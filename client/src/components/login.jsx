export default function Login () {

    return (

<div>
    <header>
            <div class="headerData">
                <img src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png" alt="bookHouse" class="headerImg"/>
                <h1 class="headerTitle">House of Books</h1>
                <h2 class="headerParagraph">BEST IN MARKET</h2>
            </div>
    </header>    

    <div className="loginas" id="loginData">
        <form className="myLogin" id="myLogin">
            <div>
                <label className="loginas0" for="nameField">Login (enter your login details)</label>
            </div>
            <div>
            <input type="email" placeholder="Email" id="EmailField" className="usdata" name="email"/>
            </div>
            <div>
            <input type="text" placeholder="Password" id="PasswordField" className="usdata" name="password"/>
            </div>
            <div>
            <input className="button-primary" type="submit" value="Login"/>
            </div>
        </form>
            
            <div>
                <p className="loginParachraf">Don't have an account? <a href="http://127.0.0.1:5500/FrontEnd/registration.html">Registration</a></p>
            </div>
        
    </div>

    <footer>
            <div class="footer">
                <div class="footerPharagrap">
                    © 2023 UAB „House of Books“. Visos teisės saugomos. _1 v1.10
                </div>
            </div>
        </footer>

</div>
)}