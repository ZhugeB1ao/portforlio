import "../assets/style/footer.css";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <div id="footer">
      <footer id="footer-section">
        <div id="footer-content">
          <img src={logo} alt="This is a logo" className="footer-logo" />

          <ul className="footer-container-ul">
            <li>
              <img
                src={navIcon1}
                alt="This is a nav icon 1"
                className="nav-icon-1"
              />
            </li>
            <li>
              <img
                src={navIcon2}
                alt="This is a nav icon 2"
                className="nav-icon-2"
              />
            </li>
            <li>
              <img
                src={navIcon3}
                alt="This is a nav icon 3"
                className="nav-icon-3"
              />
            </li>
          </ul>
        </div>

        <p className="footer-copyright">
          Copyright © 2025 YourCompany. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
