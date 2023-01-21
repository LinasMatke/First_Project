import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buyer_address, setBuyer_address] = useState("");
  const [delivery_address, setDelivery_address] = useState("");
  const [city, setCity] = useState("");
  const [post_code, setPost_code] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/sql/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone,
        setPhone,
        buyer_address: buyer_address,
        delivery_address: delivery_address,
        city: city,
        post_code: post_code,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error.false) {
          console.log("data");
          navigate("/login");
        }
        if (data.error.true) {
          <inputError className="text">
            User data or password were wrong
          </inputError>;
        }
      });
  };
  return (
    <div>
      <header className="headerRegistration">
        <div className="headerData">
          <img
            src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png"
            alt="bookHouse"
            className="headerImg"
          />
          <h1 className="headerTitle">Registration form</h1>
        </div>
      </header>
      <div className="loginas" id="loginData">
        <div id="myForm" className="userDataForm">
          <div id="error-box"></div>
          <div>
            <label className="loginas0">Fill registration data</label>
          </div>
          <div className="registrationData">
            <input
              type="text"
              placeholder="Name, Surname"
              id="full_name"
              className="usdata"
              name="name"
              onChange={(event, element) => {
                setName(event.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email: name@gmail.com"
              id="email"
              className="usdata"
              name="email"
              onChange={(event, element) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Phone number +370 000 00000"
              id="phone"
              className="usdata"
              name="phone"
              onChange={(event, element) => {
                setPhone(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Invoice address:"
              id="buyer_address"
              className="usdata"
              name="invoiceAddress"
              onChange={(event, element) => {
                setBuyer_address(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Delivery address:"
              id="delivery_address"
              className="usdata"
              name="deliveryAddress"
              onChange={(event, element) => {
                setDelivery_address(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="City, Country:"
              id="city"
              className="usdata"
              name="country"
              onChange={(event, element) => {
                setCity(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Post code:"
              id="post_code"
              className="usdata"
              name="postCode"
              onChange={(event, element) => {
                setPost_code(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Password"
              id="user_password"
              className="usdata"
              name="password"
              onChange={(event, element) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="button-primary"
              type="submit"
              value="Register"
              onClick={(e) => {
                handleRegistration(e);
                navigate("/login");
              }}
            />
          </div>

          <div>
            <p className="loginParachraf">
              Or perhaps, just login?{" "}
              <a href="http://127.0.0.1:3000/login">Login</a>
            </p>
          </div>
        </div>
      </div>

      <footer className="footerRegistration">
        <div className="footerReg">
          <p> © 2023 UAB „House of Books“. Visos teisės saugomos. _1 v1.10 </p>
        </div>
      </footer>
    </div>
  );
}
