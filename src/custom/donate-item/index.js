import React from "react";

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
              The Scripture made us to understand that we are living in the last
              days,
              <br /> in these last days, God expects us to work in his glory.
            </p>
            <p>
              When we talk about the glory of God, we ar talking about his
              charcter,
              <br /> the substance that makes God whom he is, his manifest
              prescence, his power and his reputation.
              <br /> In GloryPlus International we teach you to work in the
              glory of God, to enable you live the life you were designed to
              live.
            </p>
            <a href="/donation" className="site-btn sb-wide">
              Donate Now
            </a>
          </div>
          <div className="col-md-6 about-img col-sm-12 join-img">
            <img src="img/partner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateItem;
