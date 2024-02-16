import "./success.css";
import IconSuccess from "../assets/images/icon-success.svg";

const Success = (props) => {
  return (
    <div className="success-container">
      <div className="success-text-container">
        <img
          className="icon-success"
          src={IconSuccess}
          alt="icon success"
        ></img>
        <h1>Thanks for subscribing!</h1>
        <div className="subscribe-text">
          A confirmation email has been sent to{" "}
          <span className="bold">{props.email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </div>
      </div>
      <button className="dismiss-button" onClick={props.handleDismiss}>
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
