/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";

const RecentWorksDefault = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid-items", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // Cleanup function to destroy Isotope instance
    return () => {
      if (isotope.current) isotope.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Projects</div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          {[
          ].map((filter) => (
            <div
              key={filter.value}
              className={`f_btn ${activeBtn(filter.value)}`}
              onClick={handleFilterKeyChange(filter.value)}
            >
              <label>
                <input type="radio" name="fl_radio" defaultValue={filter.value} />
                {filter.label}
              </label>
            </div>
          ))}
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {[
            {
              href: "-",
              imgSrc: "images/blog/chatAi.png",
              name: "Predicting stock prices",
            },
            {
              href: "https://github.com/JATINMOUR/Paytm-clone",
              imgSrc: "images/blog/paytm clone.png",
              name: "Paytm Clone",
            },
            {
              href: "https://github.com/JATINMOUR/Weather-website",
              imgSrc: "images/blog/weather.png",
              name: "Live Weather",
            },
            {
              href: "https://github.com/JATINMOUR/chat-with-multiple-pdfs-using-gemini-pro-",
              imgSrc: "images/blog/chatAi.png",
              name: "Chat with MultiPDF",
            },
          ].map((work, index) => (
            <div
              key={index}
              className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h"
            >
              <div className="box-item">
                <div className="image">
                  <a href={work.href} className="has-popup-image">
                    <img src={work.imgSrc} alt={work.name} />
                    <span className="info">
                      <span className="ion ion-paintbrush" />
                    </span>
                  </a>
                </div>
                <div className="desc m-4">
                  <a href={work.href} className="name has-popup">
                    {work.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default RecentWorksDefault;
