import React, { useState } from "react";
export const Register = () => {
  const HandleClick = () => {
    const registration = document.querySelector(".registration");
    registration.classList.contains("active")
      ? registration.classList.remove("active")
      : registration.classList.add("active");
  };

  const closeRegistration = () => {
    const registration = document.querySelector(".registration");
    registration.classList.remove("active");
    registration.style.transform = "scale(0)";
  };
  // const closeRegistration = () => {
  //   isActive(false);
  // };
  // const [isActive, setIsActive] = useState(true);
  return (
    <div className="registration">
      <span className="icon-close">
        <i className="bx bx-x" onClick={closeRegistration} />
      </span>
      <div className="form-box login">
        <h2>Üye Girişi</h2>
        <form action="true">
          <div className="input-box">
            <span className="icon" />
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon" />
            <input type="password" required />
            <label>Şifre</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Beni Hatırla.
            </label>
            <a href="#">Şifreni Mi Unuttun?</a>
          </div>
          <button type="submit" className="btn-login">
            Giriş Yap
          </button>
          <div className="login-register">
            <p>
              Henüz Üye Değil Misin?
              <a href="#" className="register-link" onClick={HandleClick}>
                Üye Ol
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="form-box register">
        <h2>Üyelik Formu</h2>
        <form action="true">
          <div className="input-box">
            <span className="icon" />
            <input type="text" required />
            <label>Kullanıcı Adı</label>
          </div>
          <div className="input-box">
            <span className="icon" />
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon" />
            <input type="password" required />
            <label>Şifre</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Gizlilik Sözleşmelerini Kabul Ediyorum.
            </label>
          </div>
          <button type="submit" className="btn-login">
            Üye Ol
          </button>
          <div className="login-register">
            <p>
              Hesabın Mı Var?
              <a href="#" className="login-link" onClick={HandleClick}>
                Giriş Yap
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
