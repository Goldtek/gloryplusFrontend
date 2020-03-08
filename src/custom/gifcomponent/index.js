import React from "react";

function GifComponent() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="about-content">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-lg-offset-2">
                <img
                  src="img/gif/prayer.gif"
                  alt="senior pastor"
                  className="img-responsive"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6"></div>
        </div>
      </div>
    </section>
  );
}

export default GifComponent;
