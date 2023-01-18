export default function Registration () {

    return (

    <div>
        <header className="headerRegistration">
            <div class="headerData">
                <img src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png" alt="bookHouse" class="headerImg"/>
                <h1 class="headerTitle">Registration form</h1>
            </div>
        </header>       
        <div class="loginas" id="loginData">
    	    <form id="myForm" class="userDataForm">
                <div id="error-box"></div>
                    <div>
                        <label class="loginas0" for="nameField">Fill registration data</label>
                    </div>
                        <div className="registrationData">  
                    <input type="text" placeholder="Name, Surname" id="full_name" class="usdata" name="full_name"/>
                    <input type="email" placeholder="Email: name@gmail.com" id="email" class="usdata" name="email"/>
                    <input type="text" placeholder="Phone number +370 000 00000" id="phone" class="usdata" name="phone"/>        
                    <input type="text" placeholder="Invoice address:" id="buyer_address" class="usdata" name="invoiceAddress"/>
                    <input type="text" placeholder="Delivery address:" id="delivery_address" class="usdata" name="deliveryAddress"/>
                    <input type="text" placeholder="Country:" id="city" class="usdata" name="country"/>
                    <input type="text" placeholder="Post code:" id="post_code" class="usdata" name="postCode"/>
                    <input type="text" placeholder="Password" id="user_password" class="usdata" name="password"/>
                        </div>
                        <div>
                            <input class="button-primary" type="submit" value="Register" onclick="myFunction()"/>
                        </div>
                            {/* <script class="myAlert">
                                    function myFunction() {
                                    alert("Your registration where successful")
                                    location.href='http://127.0.0.1:5500/FrontEnd/login.html'
                                    }
                            </script>      */}
        
                    <div>
                            <p class="loginParachraf">Or perhaps, just login? <a href="http://127.0.0.1:3000/login">Login</a></p>
                    </div>
            </form>
        </div>         
        
        <footer className="footerRegistration">
        <div class="footerRegistration">
          <div class="footerPharagrap">
            © 2023 UAB „House of Books“. Visos teisės saugomos. _1 v1.10
          </div>
        </div>
      </footer>      
            
    </div>

)
}