import Nav from "../../components/organisms/navigation/navigation-component.tsx";
import RegisterForm from "../../components/molecules/forms/register-form/register-form-component";

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
