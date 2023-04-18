import Nav from "../../components/navigation/navigation-component";
import RegisterForm from "../../components/forms/register-form/register-form-component";

function Register() {
  return (
    <>
      <Nav />
      <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "20px"}}>
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;
