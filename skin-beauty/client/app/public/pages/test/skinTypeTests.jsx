import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTracker } from "meteor/react-meteor-data";
import { SkinTypeQuestions } from "../../../../../lib/collections/skinTypeQuestions";

export const SkinTypeTests = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const skinTypeQuestions = useTracker(() =>
    SkinTypeQuestions.find({}).fetch()
  );

  return (
    <div className="testSection">
      <div className="home">
        <div className="homeText">
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            className="spanText"
          >
            CİLT BAKIMI HAKKINDA CEVABINI ARADIĞIN HER ŞEYİ
          </span>
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="homeTitle"
          >
            Testlerimizi Çözerek <strong>Bulabilirsin</strong>
          </div>
        </div>
      </div>
      <div className="cards">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="cardContainer container grid"
        >
          <div className="singleCard">
            <div className="imgDiv">
              <img src="https://i.pinimg.com/564x/bf/f8/c9/bff8c93e32de32e4e0f8f7a32f5686cc.jpg" />
            </div>
            <h4 className="textDiv">Cilt Bakımı</h4>
          </div>
          <div className="singleCard">
            <div className="imgDiv">
              <img src="https://i.pinimg.com/564x/a9/97/eb/a997eb77415c246c488e60981b8b2c75.jpg" />
            </div>
            <h4 className="textDiv">Vücut Bakımı</h4>
          </div>
          <div className="singleCard">
            <div className="imgDiv">
              <img src="https://i.pinimg.com/564x/6a/ec/e3/6aece390f529f2aab0253d7d9d8dee1b.jpg" />
            </div>
            <h4 className="textDiv">Saç Bakımı</h4>
          </div>
        </div>
      </div>
      <div className="tours container section">
        <div className="secContainer">
          <span className="secTitle">Testler</span>
          <div className="tourContainer">
            {skinTypeQuestions.map((skinTypeQuestion) => {
              return (
                <div
                  key={skinTypeQuestion.testId}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="singleTour grid"
                >
                  <div className="imgDiv">
                    <img src={skinTypeQuestion.image} />
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="tourInfo"
                  >
                    <span className="tourTitle">
                      {skinTypeQuestion.testName}
                    </span>
                    <div className="starsReview">
                      <div>
                        <p>{skinTypeQuestion.content}</p>
                        <a
                          href={`/SkinTypeTests/${skinTypeQuestion.testId}`}
                          className="testBtn"
                        >
                          Testi Çöz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="review section">
        <div className="secContainer">
          <span className="secTitle">Nasıl Bir Yol İzlemelisin?</span>
          <div className="reviewContainer container grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="singleReview"
            >
              <div className="imgDiv">
                <img src="https://i.pinimg.com/564x/d1/de/d2/d1ded296da5d8d1e6da8c201db5c1d99.jpg" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                consequatur temporibus libero aut tenetur cum!consequatur
                temporibus libero aut tenetur cum!
              </p>
              <div className="name">Cilt Sorunlarını Tespit Et</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="singleReview"
            >
              <div className="imgDiv">
                <img src="https://i.pinimg.com/564x/96/96/db/9696dbb08371f1e0b5cd299367ab8450.jpg" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                consequatur temporibus libero aut tenetur cum!consequatur
                temporibus libero aut tenetur cum!
              </p>
              <div className="name">Sorunlarına Uygun İçerikleri Öğren</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="singleReview"
            >
              <div className="imgDiv">
                <img src="https://i.pinimg.com/564x/54/49/42/54494212fe00e115de3052ea88d8aedd.jpg" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                consequatur temporibus libero aut tenetur cum!consequatur
                temporibus libero aut tenetur cum!
              </p>
              <div className="name">Cilt Bakımı Rutini Oluştur</div>
            </div>
          </div>
        </div>
      </div>
      <div className="discount section">
        <div className="secContainer">
          <video src="/video.mp4.mp4" autoPlay={true} loop muted typeof="mp4" />
          <div className="textDiv">
            <span data-aos="fade-up" data-aos-duration="2000" className="title">
              Bizimle İletişime Geç
            </span>
            <p data-aos="fade-up" data-aos-duration="2500">
              Aklına takılan soruları sormak, güncellemelerden anında haberdar
              olmak ve bilgilenmek için bize email adresini bırak.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="inputBtn flex"
            >
              <input type="text" placeholder="Email Adresini Gir"></input>
              <button className="testBtn">Gönder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
