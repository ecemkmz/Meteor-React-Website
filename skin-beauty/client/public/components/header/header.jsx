import React, { useState, useEffect } from "react";
import { Register } from "../register/register";

export const Header = () => {

  const [header, setHeader] = useState("header");

  useEffect(() => {
    function scroll() {
      if (window.scrollY >= 20) {
        setHeader("header after");
      } else {
        setHeader("header");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  //  scroll()
  const [isRegistrationActive, setIsRegistrationActive] = useState(false);
  

  return (
    <header className={header}>
      <a href="#" className="logo">
        <img src="/logo2.png" className="logoPng" />
        Skin Beauty
      </a>
      {/* menu icon */}
      <div className="bx bx-menu" id="menuIcon" />
      {/* nav list */}
      <ul className="navbar">
        <li>
          <a className="a" href="/">
            Anasayfa
          </a>
        </li>
        <li>
          <a className="a" href="Product">
            Ürünler
          </a>
        </li>
        <li>
          <a className="a" href="About">
            Hakkımızda
          </a>
        </li>
        <li>
          <a className="a" href="Blog">
            Blog
          </a>
        </li>
        <li className="dropdown">
          <i className="bx bx-user" />
          <i className="bx bx-chevron-down" />
          <a className="a" href="#"></a>
          <ul className="dropdownMenu">
            <li>
              <a className="a" href="#">
                <i className="bx bx-user-circle" />
                Hesabım
              </a>
            </li>
            <li>
              <a className="a" href="#">
                <i className="bx bx-cog" />
                Ayarlar
              </a>
            </li>
            <li>
              <a className="a" href="#">
                <i className="bx bx-help-circle" />
                Yardım&amp;Sorular
              </a>
            </li>
            <li>
              <a className="a" onClick={() => setIsRegistrationActive(true)}>
                <i className="bx bx-lock-alt" />
                Üye Ol
              </a>
            </li>
            <li>
              <a className="a" href="#">
                <i className="bx bx-door-open" />
                Çıkış
              </a>
            </li>
            
          </ul>
        </li>
      </ul>
      {isRegistrationActive && <Register />}
    </header>
  );

}