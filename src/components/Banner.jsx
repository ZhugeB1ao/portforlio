import headerImg from "../assets/img/header-img.svg";
import "../assets/style/banner.css";
import { CircleArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Banner = () => {
  const word = "Front-end Developer";
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingSpeed = 200;
  const deletingSpeed = 100;
  const delayBeforeDelete = 2000;
  const delayBeforeTyping = 1000;

  useEffect(() => {
    const handleTypingEffect = () => {
      if (isTyping) {
        if (charIndex < word.length) {
          setText((prev) => prev + word[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsTyping(false), delayBeforeDelete);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setTimeout(() => setIsTyping(true), delayBeforeTyping);
        }
      }
    };

    const timeout = setTimeout(
      handleTypingEffect,
      isTyping ? typingSpeed : deletingSpeed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping]);

  return (
    <section id='banner'>
      <header>
        <div className="banner-container-1">
          <h4>Welcome to my Portfolio</h4>
          <h1>
            Hi! I'm Gia Bao <span className="text">{text}</span>
            <span className="cursor">|</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="connect-content">
            <h4>Let's connect</h4>
            <CircleArrowRight className="c-arr-r-icon" />
          </div>
        </div>

        <div className="banner-container-2">
          <img src={headerImg} alt="This is a header image" />
        </div>
      </header>
    </section>
  );
};

export default Banner;
