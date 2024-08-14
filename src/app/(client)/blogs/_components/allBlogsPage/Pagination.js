import React from "react";

function Pagination() {
  return (
    <div className="pagination-area">
      <ul className="paginations">
        <li className="page-item active">
          <a href="#">01</a>
        </li>
        <li className="page-item">
          <a href="#">02</a>
        </li>
        <li className="page-item">
          <a href="#">03</a>
        </li>
        <li className="page-item">
          <a href="#">04</a>
        </li>
      </ul>
      <div className="paginations-button">
        <a href="#">
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={7}
            height={14}
            viewBox="0 0 7 14"
          >
            <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
