// import { useHref, useNavigate } from "react-router-dom";
// import { useState } from "react";
export default function Password() {
  return (
    <div>
      <header className="headerRegistration">
        <div className="headerData">
          <img
            src="https://knygunamaitenerifeje.lt/wp-content/uploads/2019/08/cropped-kn_002.1.01-1.png"
            alt="bookHouse"
            className="headerImg"
          />
          <h1 className="headerTitle">Retrieve new password</h1>
        </div>
      </header>
      <div className="passwordBody">
        <p>Please enter your e-mail to retrieve your password</p>
        <input
          type="email"
          placeholder="Email: name@gmail.com"
          id="email"
          className="usdata"
          name="email"
        />
        <div>
          <input
            className="button-primary"
            type="submit"
            value="Get new password"
            // onClick="useHref={ http://127.0.0.1:3000/login }"
          />
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
