import { useState } from "react";
import "./App.css";
import SignUp from "./components/signUp";
import Success from "./components/success";

function App() {
  const [displayState, setDisplayState] = useState(false);
  const [emailStr, setEmailStr] = useState("");

  const handleDismiss = () => {
    setDisplayState(false);
  };

  const handleSignUp = (emailStr) => {
    setEmailStr(emailStr);
    setDisplayState(true);
  };

  return (
    <>
      {displayState ? (
        <Success email={emailStr} handleDismiss={handleDismiss}></Success>
      ) : (
        <SignUp handleSignUp={handleSignUp}></SignUp>
      )}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </div>
    </>
  );
}

export default App;
