import "./login-form-styles.css";

import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const serverResponse = await response.json();
    setSubmitMessage(serverResponse.message);
    setUsername("");
    setPassword("");
  }

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <div className="login-form__username">
        <label className="username__label">Username</label>
        <input
          className="username__input"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          minLength={6}
          maxLength={18}
          required
        />
      </div>
      <div className="login-form__password">
        <label className="password__label">Password</label>
        <input
          className="password__input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          minLength={6}
          maxLength={18}
          required
        />
      </div>
      <button className="login-form__button" type="submit">
        Login
      </button>
      {submitMessage ? <h2>{submitMessage}</h2> : ""}
    </form>
  );
}

export default LoginForm;
