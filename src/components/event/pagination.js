import React from "react";
import { Link } from "react-router-dom";
const Pagination = ({ eventPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-area">
      <ul className="pageination-list">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="javascript:void(0)"
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
        {/*        
        <li>
          <Link to="#">
            Next <i className="fa fa-angle-double-right"></i>
          </Link>
        </li> */}
      </ul>
      {/* <p>Page 1 of 8 results</p> */}
    </div>
  );
};

export default Pagination;
