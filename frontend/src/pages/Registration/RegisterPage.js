import React from "react";
import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/RegisterPage.css";

// Registeration Page
// Yuanyuan
const RegisterPage = () => {
  let navigate = useNavigate();

  const userNameRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const gamingCompanyRef = useRef();

  const registerHandler = async (event) => {
    event.preventDefault();

    let userInputData = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value,
    };

    // If the role is gaming company publicist, we add
    // the gaming company they work for
    if (roleRef.current.value === "Gaming company publicist") {
      userInputData.gamingCompany = gamingCompanyRef.current.value;
    }

    const newUser = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInputData),
    });

    if (!newUser.ok) {
      console.log("Response status ", newUser.status);
    } else {
      let newUserData = await newUser.json();
      if (newUserData.users.length) {
        console.log("This user already exists");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div id="registerContainer">
      <div className="row">
        <h1 className="title">Welcome to GameHub</h1>
        <h2 className="title2">Start your GameHub journey</h2>
        <div className="row">
          <div className="col-4 registerBox">
            <form id="registerForm" onSubmit={registerHandler}>
              <div className="registerTitle">Register</div>
              <div className="userName">
                <label className="label-of-form">Username</label>
                <input
                  className="form-control"
                  type="text"
                  ref={userNameRef}
                  placeholder="Username"
                  required
                ></input>
              </div>
              <div className="password">
                <label className="label-of-form">Password</label>
                <input
                  className="form-control"
                  type="password"
                  ref={passwordRef}
                  placeholder="Password"
                  required
                ></input>
              </div>
              <div className="selectRole">
                <label htmlFor="roleSelectId1" className="selectRole">
                  Select a role
                </label>
                <select
                  className="form-select"
                  ref={roleRef}
                  id="roleSelectId1"
                >
                  <option>Gamer</option>
                  <option>Gaming company publicist</option>
                </select>
              </div>
              <div className="gamingCompany">
                <label className="label-of-form">
                  Gaming company you work for (only applicable for publicists)
                </label>
                <input
                  className="form-control"
                  type="text"
                  ref={gamingCompanyRef}
                  placeholder="Gaming company name"
                ></input>
              </div>
              <hr />
              <div className="signUpContainer">
                <button type="submit" className="btn signUpButton">
                  Sign up
                </button>
              </div>
            </form>
            <hr className="registerHR" />
            <div className="loginContainer">
              <Link to="/">
                <button className="btn login">
                  Login if you have an account
                </button>
              </Link>
            </div>
          </div>
          <div className="col-4 registerInfoBox">
            <div>
              Register as a gamer or gaming company publicist if you don't have
              an account with us.
            </div>
            <div>
              When registering as a gaming company publicist you should input
              the gaming company you work for. The games you publish as a gaming
              company publicist will be published as the gaming company you work
              for.
            </div>
          </div>
        </div>
      </div>
      <div className="footerRegister">
        <div className="footerRegisterSection1">Copyright 2021</div>
        <div className="footerRegisterSection2">
          Designed by Nathaniel & Yuanyuan
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
