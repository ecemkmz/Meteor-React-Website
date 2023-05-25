import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Categories } from "../../../../../lib/collections/categories";
import { SkinTypes } from "../../../../../lib/collections/skinTypes";
import { useTracker } from "meteor/react-meteor-data";

export const Home = () => {
  const categories = useTracker(() => Categories.find({}).fetch());
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
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="homeSwiper"
        >
          <SwiperSlide
            className="slideContainer"
            style={{ backgroundImage: `url("/assets/blog3.jpg")` }}
          >
            {" "}
            <div className="slideText">
              <span>Skin Beauty'e Hoş Geldin!</span>
              <h1>
                Aradığın Her Şey <br />
                Burada...
              </h1>
              <a href="#" className="btn">
                Devam Et{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#000000" }}
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slideContainer"
            style={{ backgroundImage: `url("/assets/blog2.jpg")` }}
          >
            {" "}
            <div className="slideText">
              <span>Skin Beauty'e Hoş Geldin!</span>
              <h1>
                Aradığın Her Şey <br />
                Burada...
              </h1>
              <a href="#" className="btn">
                Devam Et{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#000000" }}
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slideContainer"
            style={{ backgroundImage: `url("/assets/blog1.jpg")` }}
          >
            {" "}
            <div className="slideText">
              <span>Skin Beauty'e Hoş Geldin!</span>
              <h1>
                Aradığın Her Şey <br />
                Burada...
              </h1>
              <a href="#" className="btn">
                Devam Et{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#000000" }}
                />
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
            Şimdi İncele{" "}
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#000000" }}
            />
          </a>
        </div>
        <Swiper
          className="categoryContainer"
          slidesPerView={5}
          spaceBetween={30}
          navigation={{
            clickable: true,
          }}
        >
          {categories.map((category, i) => (
            <SwiperSlide>
              <div className="boxContainer" key={category._id}>
                <div
                  className="box"
                  id="boxProducts"
                  style={{ background: category.color }}
                >
                  <img src={category.image} alt="" />
                  <h2>{category.title}</h2>
                  <span>{category.item}</span>
                  <i
                    className="fa-solid fa-arrow-right openModal"
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
                    <a href="/Product">{skinType.title}</a>
                  ))}
                  <i
                    className="fa-solid fa-arrow-right closeModal"
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
      <section href="#about" className="about">
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
          <a href="/About" className="btn">
            Devam Et
            <i
              className="fa-solid fa-arrow-right"
              style={{ color: "#000000" }}
            />
          </a>
        </div>
      </section>
    </div>
  );
};
