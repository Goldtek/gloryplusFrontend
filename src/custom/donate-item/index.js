import React from "react";
import { Link } from "react-router-dom";

const DonateItem = () => {
  return (
    <section className="about-section spad">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-content">
            <h2>
              <strong>Partner With Us</strong>
            </h2>
            <p>
              The scriptures say we are in the last days. God expects us to walk
              in his glory, now more than ever before. <br />
              When we talk about the glory of God, we are talking about His
              character; the substance that makes God who He is, His manifest
              presence, His power and His reputation.
              <br />
              In GloryPlus International, we teach you to walk in the glory of
              God, to enable you live the life that you were designed to live.
            </p>
            <Link to="/login" className="site-btn sb-wide">
              Donate Now
            </Link>
          </div>
          <div className="col-md-6 about-img col-sm-12 join-img">
            <img src="img/partner-with-us.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateItem;
