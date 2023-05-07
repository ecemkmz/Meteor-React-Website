import React from "react";
import categories from "../../../../imports/api/categories.json"
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";


export const Home = () => {
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
                    Devam Et <i className="bx bx-right-arrow-alt" />
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
                  <span>Skin Beauty'e Hoş Geldin!</span>
                  <h1>
                    Aradığın Her Şey <br />
                    Burada...
                  </h1>
                  <a href="#" className="btn">
                    Devam Et <i className="bx bx-right-arrow-alt" />
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
                Şimdi İncele <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
            <div className="categoryContainer">
  {categories.categories.map((category, i) => (
    <div className="boxContainer">
      <div
        className="box "
        id="boxProducts"
        style={{ background: category.color }}
      >
        <img src={category.image} alt="" />
        <h2>{category.name}</h2>
        <span>{category.items}</span>
        <i
          className="bx bx-right-arrow-alt openModal"
          onClick={() => {
            const boxes = document.querySelectorAll('.boxContainer');
            boxes.forEach((box) => box.classList.remove('active'));
            boxes[i].classList.add('active');
          }}
        />
      </div>
      <div className="box allBox" id="boxCategories" style={{ background: category.color }} >
        <h2>Cilt Tipi</h2>
        <a href="/Product">Karma-Yağlı Cilt</a>
        <a href="/Product">Kuru Cilt</a>
        <a href="/Product">Hassas Cilt</a>
        <a href="/Product">Atopik Cilt</a>
        <a href="/Product">Olgun Cilt</a>
        <i
          className="bx bx-right-arrow-alt closeModal"
          onClick={() => {
            const boxes = document.querySelectorAll('.boxContainer');
            boxes[i].classList.remove('active');
          }}
        />
      </div>
    </div>
  ))}
</div>

          </section>
          <section href="#about" className="about">
            <img className="aboutImg" src="/assets/cilt-bakimi.jpg" alt="" />
            <div className="aboutText">
              <span>Hakkımızda</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
                ad reiciendis sint minus distinctio aliquam ut officiis voluptate
                aspernatur, voluptatum odit dolore quia architecto explicabo
                laboriosam sapiente, perferendis deleniti quis!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                perspiciatis ex?
              </p>
              <a href="#" className="btn">
                Daha Fazla
                <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </section>
        </div>
      );
}

