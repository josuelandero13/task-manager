import "../assets/css/Footer.css";
import imgLogo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <img src={imgLogo} alt="logo" className="logo" />
        <a className="logo">
          TM
        </a>
        <div className="footer-left">
          <p className="copyright">Copyright 2024 &copy; Task Manager</p>
          <p className="footer-links">
            <a>Contact Us</a> |<a>Terms & Conditions</a> |
            <a>Privacy</a>
          </p>
        </div>
        <div className="footer-right">
          <a className="social facebook">
            Facebook
          </a>
          <a className="social twitter">
            Twitter
          </a>
          <a className="social google">
            Linkind
          </a>
        </div>
      </div>
    </footer>
  );
}
