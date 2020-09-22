import React from 'react';
import { Link } from 'react-router-dom';

import { cardBody } from './styles';

const CourseItem = ({ imagePath, title, id }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Link to={`/schedule/${id}`}>
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="view overlay">
          <img
            className="card-img-top img-responsive"
            src={imagePath}
            alt="Card image cap"
             style={{ width: '100%', height: 300 }}
          />
          <a>
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body" style={cardBody}>
          <strong>
            {title}
            {' '}
          </strong>

        </div>
      </div>
    </div>
  </Link>
);


export default CourseItem;
