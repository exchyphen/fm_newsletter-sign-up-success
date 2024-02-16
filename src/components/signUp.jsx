import { useState } from "react";
import "./signUp.css";

const SignUp = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [errorState, setErrorState] = useState(false);

  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // check email
    if (!isEmail(emailInput)) {
      setErrorState(true);
      return;
    }

    // success -> move to success page
    props.handleSignUp(emailInput);
  };

  return (
    <div className="signup-container">
      <div className="subscribe-container">
        <h1>Stay updated!</h1>
        <div>Join 60,000+ product managers receiving monthly updates on:</div>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        {errorState ? (
          <form className="email-form" action="#">
            <div className="email-label-container">
              <div className="main-label">Email address</div>
              <div className="error-message">Valid email required</div>
            </div>
            <input
              className="email error-email-input"
              type="email"
              placeholder="email@company.com"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            ></input>
            <button
              className="submit-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        ) : (
          <form className="email-form" action="#">
            <div className="email-label-container">
              <div className="main-label">Email address</div>
            </div>
            <input
              className="email"
              type="email"
              placeholder="email@company.com"
              onChange={(e) => setEmailInput(e.target.value)}
              required
            ></input>
            <button
              className="submit-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        )}
      </div>
      <div className="hero-img"></div>
    </div>
  );
};

export default SignUp;
