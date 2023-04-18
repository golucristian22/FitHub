import Nav from "../../components/navigation/navigation-component";
import LoginForm from "../../components/forms/login-from/login-form-component";

function Login() {
  return (
    <>
      <Nav />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
