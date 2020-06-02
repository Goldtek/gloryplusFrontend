import React from 'react';

import { ws, RAVE_PUBLIC_KEY } from '../../lib/constant';

function give() {

  //  window.payWithRave(phone, amt, email, RAVE_PUBLIC_KEY);
}

function card(props) {
  const { title, btnText, click } = props;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="col-sm-6 col-md-6 top-mrgin">
      <div className="give-thumbnail">
        <div className="caption">
          <h3 align="center">{title}</h3>
          <p className="card-description give-div">
            {props.desc}
          </p>
          <button className="btn btn-danger btn-block" role="button" onClick={click}>{btnText}</button>
        </div>
      </div>
    </div>

  );
}

export default card;