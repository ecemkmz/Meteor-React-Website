import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Categories } from "../../../../../lib/collections/categories";
import { SkinTypes } from "../../../../../lib/collections/skinTypes";
import { useTracker } from "meteor/react-meteor-data";
import "swiper/modules/navigation/navigation.scss";

export const Home = () => {
  Meteor.subscribe("categories");
  const categories = useTracker(() => Categories.find().fetch());
  Meteor.subscribe("skinTypes");
  const skinTypes = useTracker(() => SkinTypes.find({}).fetch());

  return (
    <div>
      <div className="home">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          className="homeSwiper"
        >
          <SwiperSlide
            className="slideContainer"
            style={{ backgroundImage: `url("/assets/blog3.jpg")` }}
          >
            {" "}
            <div className="slideText">
              <span>Skin Beauty'e Hoş Geldİn!</span>
              <h1>
                Aradığın Her Şey <br />
                Burada...
              </h1>
              <a href="/auth/signup" className="btn">
                Üye Ol
                <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slideContainer"
            style={{ backgroundImage: `url("/assets/blog2.jpg")` }}
          >
            {" "}
            <div className="slideText">
              <span>İlgİnİ Çekebİlecek Yazılarımız var...</span>
              <h1>
                Blog Sayfamızı İncelemek <br />
                İster Misin?
              </h1>
              <a href="/Blog" className="btn">
                Devam Et <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slideContainer"
            style={{ backgroundImage: `url("/assets/blog1.jpg")` }}
          >
            {" "}
            <div className="slideText">
              <span>Cİlt Bakımı Hakkında Neler Bİlİyorsun?</span>
              <h1>Haydi Kendini Dene..</h1>
              <a href="/SkinTypeTests" className="btn">
                Teste Git <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="categories" id="categories">
        <div className="heading">
          <h1>
            Ürün
            <br />
            <span>Kategorileri</span>
          </h1>
          <a href="/Product" className="btn">
            Şimdi İncele <i className="bx bx-right-arrow-alt bx-sm" />
          </a>
        </div>
        <Swiper
          className="categoryContainer"
          slidesPerView={5}
          spaceBetween={30}
          navigation={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
        >
          {categories.map((category, i) => (
            <SwiperSlide key={i}>
              <div className="boxContainer">
                <div
                  className="box"
                  id="boxProducts"
                  style={{ background: category.color }}
                >
                  <img src={category.image} alt="" />
                  <h2>{category.title}</h2>
                  <span>{category.item}</span>
                  <i
                    className="bx bx-right-arrow-alt openModal"
                    onClick={() => {
                      const boxes = document.querySelectorAll(".boxContainer");
                      boxes.forEach((box) => box.classList.remove("active"));
                      boxes[i].classList.add("active");
                    }}
                  />
                </div>
                <div
                  className="box allBox"
                  id="boxCategories"
                  style={{ background: category.color }}
                >
                  <h2>Cilt Tipi</h2>
                  {skinTypes.map((skinType) => (
                    <a key={skinType._id} href="/Product">
                      {skinType.title}
                    </a>
                  ))}
                  <i
                    className="bx bx-right-arrow-alt closeModal"
                    onClick={() => {
                      const boxes = document.querySelectorAll(".boxContainer");
                      boxes[i].classList.remove("active");
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="test">
        <div className="testText">
          <span>CİLT BAKIMINI NE KADAR DOĞRU BİLİYORSUN?</span>
          <p>
            Cilt bakımı konusunda çok fazla bilgi kirliliği mevcut. Biz de bu
            yüzden senin için eğlenceli içerikler oluşturduk. Haydi testleri çöz
            hem eğlen hem kendini dene. Yanlış bildiklerinin doğrusunu öğren.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            est corporis quisquam modi earum, tempore possimus magni incidunt
            saepe inventore.
          </p>
          <a href="/SkinTypeTests" className="btn">
            Devam Et
            <i className="bx bx-right-arrow-alt" />
          </a>
        </div>
        <img className="testImg" src="/assets/skincare5.jpg" alt="" />
      </section>
      <section className="about">
        <img className="aboutImg" src="/assets/cilt-bakimi.jpg" alt="" />
        <div className="aboutText">
          <span>Hakkımızda</span>
          <p>
            Ecem ve Azra olarak lanet ede ede hiç zevk almayarak bazen kusasımız
            gelerek gece gündüz demeden bu sayfayı yapıyoruz. Neden yapıyoruz
            biz de bilmiyoruz. Neden, ne zaman, nasıl verdik bu kararı sıkça
            sorguluyoruz. Biten bir şey gibi de durmuyor ama inş bir gün bitecek
            umuduyla devam ediyoruz.
          </p>
          <p>
            Hakkımızda daha çok şey mi bilmek istiyorsun ama bilemezsin çünkü
            hakkımızda sayfasında bir test var orayı düzeltmedik
          </p>
        </div>
      </section>
    </div>
  );
};
