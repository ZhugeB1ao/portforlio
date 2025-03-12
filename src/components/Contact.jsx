import contactImg from "../assets/img/contact-img.svg";
import "../assets/style/contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <section id="contact-section">
        <div className="contact-container-1">
          <img src={contactImg} alt="" />
        </div>

        <div className="contact-container-2">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="input-container">
            <input
              type="text"
              className="input-first-name"
              placeholder="First Name"
            />
            <input
              type="text"
              className="input-last-name"
              placeholder="Last Name"
            />
            <input
              type="email"
              className="input-email"
              placeholder="Email Address"
            />
            <input
              type="tel"
              className="input-phone-number"
              placeholder="Phone Number"
            />
            <input
              type="text"
              className="input-message"
              placeholder="Message"
            />
          </div>
          <button className="send-button">Send</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
