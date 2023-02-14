import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";
//BEM-> Block Element Modifier

// const Menu = () => {
//   <>
//     <p>
//       <a href="#home"></a>Home
//     </p>
//     <p>
//       <a href="#wgpt3"></a>What is GPT3?
//     </p>
//     <p>
//       <a href="#possibility"></a>Open AI
//     </p>
//     <p>
//       <a href="#features"></a>Case Studies
//     </p>
//     <p>
//       <a href="#blog"></a>Library
//     </p>
//   </>;
// };

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home"></a>Home
          </p>
          <p>
            <a href="#wgpt3"></a>What is GPT3?
          </p>
          <p>
            <a href="#possibility"></a>Open AI
          </p>
          <p>
            <a href="#features"></a>Case Studies
          </p>
          <p>
            <a href="#blog"></a>Library
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#FFF"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-centre">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home"></a>Home
              </p>
              <p>
                <a href="#wgpt3"></a>What is GPT3?
              </p>
              <p>
                <a href="#possibility"></a>Open AI
              </p>
              <p>
                <a href="#features"></a>Case Studies
              </p>
              <p>
                <a href="#blog"></a>Library
              </p>
            </div>
            <div className="gpt3__navbar-menu_containers-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
