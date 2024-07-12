import React, { useState } from "react";

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const mail = e.target.email.value;
    const password = e.target.password.value;

    fetch("/authLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("fullName");
    const dogname = formData.get("petName");
    const mail = formData.get("email");
    const password = formData.get("password");
    const passwordRetype = formData.get("passwordRetype");

    setActiveTab("login");

    try {
      const response = await fetch("/authReg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          dogname,
          mail,
          password,
          passwordRetype,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Log In
          </button>
          <button
            className={`tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "login" && (
          <div className="login-form">
            <p>Log-In With Social</p>
            <hr />
            <div className="social-login">
              <button>Google</button>
              <button>Facebook</button>
            </div>

            <p>Or Log-In With Email</p>
            <hr />
            <form method="post" onSubmit={handleSubmitLogin}>
              <input
                className="formInp"
                type="email"
                name="email"
                placeholder="Enter email address"
                required
              />
              <input
                className="formInp"
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
              <div className="checkbox">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <button className="authBtn" type="submit">
                Log In
              </button>
            </form>
          </div>
        )}

        {activeTab === "register" && (
          <div className="register-form">
            <p>Sign-up With Social</p>
            <hr />
            <div className="social-login">
              <button>Google</button>
              <button>Facebook</button>
            </div>

            <p>Or Sign-Up With Email</p>
            <form method="post" onSubmit={handleSubmitRegister}>
              <input
                className="formInp"
                name="fullName"
                type="text"
                placeholder="Your full name"
                required
              />
              <input
                className="formInp"
                type="text"
                name="petName"
                placeholder="Your dog name"
                required
              />
              <input
                className="formInp"
                name="email"
                type="email"
                placeholder="Your email address"
                required
              />
              <input
                className="formInp"
                type="password"
                name="password"
                placeholder="Set your password"
                required
              />
              <input
                className="formInp"
                name="passwordRetype"
                type="password"
                placeholder="Retype your password"
                required
              />
              <button className="authBtn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthTabs;
