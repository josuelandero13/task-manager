import "../assets/css/Footer.css";
import imgLogo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <a className="logo">
          <img src={imgLogo} alt="logo" className="logo-img" />
          <span className="logo-text">TM</span>
        </a>

        <div className="footer-left">
          <p className="copyright">Copyright 2025 &copy; Task Manager</p>
          <div className="footer-links">
            <a>Contact Us</a>
            <a>Terms & Conditions</a>
            <a>Privacy</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100078502143370"
              className="social facebook"
            >
              <i className="fab fa-facebook-f"></i>
              Facebook
            </a>
            <a href="https://x.com/jlandero13" className="social twitter">
              <i className="fab fa-twitter"></i>
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/josue-landero-44015a230/"
              className="social linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
