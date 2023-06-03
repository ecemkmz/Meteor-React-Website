import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTracker } from "meteor/react-meteor-data";
import { BlogTexts } from "../../../../../lib/collections/blogTexts";
import { PaginationComponent } from "../../components/pagination/pagination";

export const Blog = () => {
  Meteor.subscribe('blogTexts');
  const blogTexts = useTracker(() => BlogTexts.find({}).fetch());
  const [popUpBackgroundDisplay, setPopUpBackgroundDisplay] = useState(false);
  const [activePopUpContent, setActivePopUpContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedBlog, setDisplayedBlog] = useState([]);
  const perPage = 3;

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
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    setDisplayedBlog(blogTexts.slice(startIndex, endIndex));
    AOS.init();
  }, [currentPage,blogTexts]);
  const totalPages = Math.ceil(blogTexts.length / perPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {displayedBlog.map((blogText) => {
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
              <div
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
              </div>
            </div>
          );
        })}
        <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        />
      </section>
      <section className="sidebar">
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
      </section>
    </div>
  );
};
