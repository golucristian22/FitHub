import "./register-form-styles.css";
const { useState } = require("react");

function RegisterForm() {
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
    const response = await fetch("http://localhost:8000/register", {
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
    <form className="register-form" onSubmit={handleFormSubmit}>
      <div className="register-form__username">
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
      <div className="register-form__password">
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
      <button className="register-form__button" type="submit">
        Register
      </button>
      {submitMessage ? <h2>{submitMessage}</h2> : ""}
    </form>
  );
}

export default RegisterForm;
