import React from "react";
// import { Link } from "react-router-dom";
const Pagination = ({ PerPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / PerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination pagination-lg">
        {pageNumbers.map(number => (
          <li key={number} className="page-item" aria-current="page">
            <span
              style={{ cursor: "pointer" }}
              className="page-link active"
              onClick={() => paginate(number)}
              aria-disabled="true"
            >
              {number}
            </span>
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