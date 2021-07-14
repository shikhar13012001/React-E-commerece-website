import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../Custombutton/custombutton.components";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
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

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
