import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <div className="align page404">
      <Helmet>
        <title>404</title>
        <meta name="description" content="Home " />
      </Helmet>
      <div class="grid mt-8">
        <div class="grid__row">
          <div class="grid__col">
            <div class="box animation animation--shake--vertical">4</div>
          </div>

          <div class="grid__col">
            <div class="box animation animation--reverse animation--shake--vertical">
              0
            </div>
          </div>

          <div class="grid__col">
            <div class="box animation animation--shake--vertical">4</div>
          </div>
        </div>
        <div className="col-md-6"></div>

        <div class="grid__col">
          <Link to="/">
            <div class="box animation animation--reverse animation--shake--vertical">
              Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
