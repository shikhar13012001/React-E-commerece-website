import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../Custombutton/custombutton.components";
import { auth,signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async(event) => {
    event.preventDefault();
    const { email, password }=this.state;
    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
    }catch(error){console.log(error);

    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            required
            handleChange={this.handleChange}
            name="email"
            value={this.state.email}
            label="Email"
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            required
            name="password"
            value={this.state.password}
            label="password"
          />
<div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
