import "./logo.css";
import imgLogo from "../../assets/dino-mark.png";

function Logo() {
  return (
    <div className="dino-content">
      <img id="dino" src={imgLogo} alt="dino-logo" />
    </div>
  );
}

export default Logo;
