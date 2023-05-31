import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTracker } from "meteor/react-meteor-data";
import { BlogTexts } from "../../../../../lib/collections/blogTexts";

export const Blog = () => {
  const blogTexts = useTracker(() => BlogTexts.find({}).fetch());
  const [popUpBackgroundDisplay, setPopUpBackgroundDisplay] = useState(false);
  const [activePopUpContent, setActivePopUpContent] = useState("");

  const openPopUp = (id) => {
    setPopUpBackgroundDisplay(true);
    setActivePopUpContent(id);
    document.body.style.overflow = "hidden"; // body scroll'u kapatılıyor
  };
  const closePopUp = () => {
    setPopUpBackgroundDisplay(false);
    setActivePopUpContent("");
    document.body.style.overflow = "auto"; // body scroll'u tekrar açılıyor
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="imgContainer">
        <div
          className="imgItem"
          style={{ backgroundImage: `url("/assets/background/bg11.jpg")` }}
        >
          <h1 className="imgText">
            CİLDİNİZİ
            <br />
            TANIYIN
          </h1>
        </div>
        <div
          className="imgItem"
          style={{ backgroundImage: `url("/assets/background/bg5.jpg")` }}
        >
          <h1 className="imgText">
            CİLDİNİZE UYGUN
            <br />
            ÜRÜNÜ BULUN
          </h1>
        </div>
        <div
          className="imgItem"
          style={{ backgroundImage: `url("/assets/background/bg13.jpg")` }}
        >
          <h1 className="imgText">
            CİLT BAKIMI
            <br />
            RUTİNİNİZİ OLUŞTURUN
          </h1>
        </div>
      </div>

      <section className="blogLeftColumn">
        {blogTexts.map((blogText) => {
          return (
            <div key={blogText.dataId}>
              <div
                className="blogCard"
                data-aos="flip-right"
                data-aos-duration={1500}
              >
                <img src={blogText.image} alt="img" className="blog-img" />
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                >
                  <h3>{blogText.title}</h3>
                  <p>{blogText.content}</p>
                  <button
                    className="btnMore"
                    onClick={() => openPopUp(blogText.dataId)}
                  >
                    Devam
                  </button>
                </div>
              </div>
              <popup
                className="popUpBackground"
                style={{
                  display:
                    activePopUpContent === blogText.dataId &&
                    popUpBackgroundDisplay
                      ? "flex"
                      : "none",
                }}
              >
                <div
                  className={`popUpContent ${
                    activePopUpContent === blogText.dataId ? "active" : ""
                  }`}
                  data-target={blogText.dataTarget}
                >
                  <span className="btnClose" onClick={closePopUp}>
                    <i className="bx bx-x" />
                  </span>
                  <img src={blogText.image} alt="img" />
                  <div className="popUpText">
                    <h1>{blogText.title}</h1>
                    <p>{blogText.detailedContent}</p>
                  </div>
                </div>
              </popup>
            </div>
          );
        })}
      </section>
      <sidebar className="sidebar">
        <div className="popularPosts">
          <h2>Popüler Postlar</h2>
          <div className="popularPost">
            <div className="postImage">
              <img src="/assets/background/bg2.jpg" className="img" alt="" />
            </div>
            <div className="postTitle">
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </a>
            </div>
          </div>
          <div className="popularPost">
            <div className="postImage">
              <img src="/assets/background/bg15.jpg" className="img" alt="" />
            </div>
            <div className="postTitle">
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </a>
            </div>
          </div>
          <div className="popularPost">
            <div className="postImage">
              <img src="/assets/background/bg14.jpg" className="img" alt="" />
            </div>
            <div className="postTitle">
              <a href="#">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </a>
            </div>
          </div>
        </div>
      </sidebar>
    </div>
  );
};
