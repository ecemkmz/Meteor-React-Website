import React from "react";

export const Footer = () => {
  // const scrollTop = document.querySelector('.scroll-top');
  // if (scrollTop) {
  //   const togglescrollTop = function() {
  //     window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  //   }
  //   window.addEventListener('load', togglescrollTop);
  //   document.addEventListener('scroll', togglescrollTop);
  //   scrollTop.addEventListener('click', window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   }));
  // }
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
              <i className="fa-brands fa-facebook fa-xl" />
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter fa-xl" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram fa-xl" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube fa-xl" />
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
            <i className="fa-solid fa-envelope fa-xl" />
          </form>
        </div>
      </footer>
      <div className="copyright">
        <p>© A&amp;E Production All Right Reserved.</p>
      </div>
      {/* <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}
    </div>
  );
};
