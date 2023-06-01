import React, { useEffect, useState } from "react";
import {useTracker} from 'meteor/react-meteor-data';
import { NavLink } from "react-router-dom";

export const Header = () => {
  const user = useTracker(() => Meteor.user());
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };


  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        scrolled ? "header-scrolled" : "header-transparent"
      }`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="/">
              <img src="/logo2.png" className="logoPng" alt="Logo" />
              <span>Skin Beauty</span>
            </a>
          </h1>
        </div>
        <nav id="navbar" className={` ${mobileNavOpen ? "navbar-mobile" : "navbar"}`}>
          <ul>
            <li>
              <NavLink exact to="/" className="nav-link scrollto" activeClassName="active">
                Anasayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/Product" className="nav-link scrollto" activeClassName="active">
                Ürünler
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" className="nav-link scrollto" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/SkinTypeTests" className="nav-link scrollto" activeClassName="active">
                Testler
              </NavLink>
            </li>
            <li className="dropdown">
              <a href="#" >
              {user? (Meteor.user().profile.firstName):(`Kullanıcı`)}<i className="bx bx-chevron-down bx-sm"/>
              </a>
              <ul ul style={{"display": "block"}}>
                <li>
                  <a href="#">Hesabım</a>
                </li>
                <li>
                  <a href="#">Ayarlar</a>
                </li>
                <li>
                  <a href="#">Yardım&amp;Sorular</a>
                </li>
                <li>

                  {user? (<a onClick={() => { Meteor.logout()}}>Çıkış Yap</a>) :(<a href="/auth/signup">Üye Ol</a>)}
                </li>
              </ul>
            </li>
          </ul>
          <i className='bx bx-menu bx-md mobileNavToggle' onClick={handleMobileNavToggle} />

        </nav>
      </div>
    </header>
  );
};
