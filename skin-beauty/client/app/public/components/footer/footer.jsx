import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerBox">
          <a href="#">
            <i className="bx bx-spa" />
            Skin Beauty
          </a>
          <p>
            Türkiye'de herhangi bi yerde...
            <br />
            Kapı,1330
          </p>
          <div className="social">
            <a href="#">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#">
              <i className="bx bxl-twitter " />
            </a>
            <a href="#">
              <i className="bx bxl-instagram " />
            </a>
            <a href="#">
              <i className="bx bxl-youtube" />
            </a>
          </div>
        </div>
        <div className="footerBox">
          <h2>Kategoriler</h2>
          <a href="#">Temizleme Jelleri</a>
          <a href="#">Nemlendiriciler</a>
          <a href="#">Serumlar</a>
          <a href="#">Maskeler</a>
          <a href="#">Güneş Kremleri</a>
        </div>
        <div className="footerBox">
          <h2>Bağlantılar</h2>
          <a href="#">Kullanım Şartları</a>
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Bloğum</a>
        </div>
        <div className="footerBox">
          <h2>Haber bülteni</h2>
          <p>
            Bütün gelişmelerden <br />
            anında haberdar ol
          </p>
          <form action="true">
            <i className="bx bxs-envelope" />
            <input type="email" placeholder="Email'inizi giriniz" />
          </form>
        </div>
      </footer>
      <div className="copyright">
        <p>© A&amp;E Production All Right Reserved.</p>
      </div>
    </div>
  );
};
