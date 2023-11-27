import { useRef } from "react";
import "./style.css";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="imageContainer">
        <img
          className="animatedImage"
          width="100"
          height="100"
          src="https://bounceinsights.com/wp-content/uploads/2020/06/method-draw-image-1.svg"
        ></img>
      </div>
      <nav ref={navRef}>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        style={{ color: "white" }}
        onClick={showNavBar}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Header;
