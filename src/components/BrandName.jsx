import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/BrandName.scss";

function BrandName({ isFooter = false }) {
  return (
    <div className={`brand ${isFooter === true ? "footer" : ""}`}>
      <Link to="/">
        <span>THB</span>
      </Link>
    </div>
  );
}

export default BrandName;
