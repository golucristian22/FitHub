import Nav from "../../components/organisms/navigation/navigation-component.tsx";
import LoginForm from "../../components/molecules/forms/login-from/login-form-component";

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
