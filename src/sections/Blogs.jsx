import React from "react";
import Blog from "../components/Blog";
import Title from "../components/Title";
import "../styles/sections/Blogs.scss";
import { useState } from "react";
import BlogData from "../api/BlogData";

function Blogs() {
  const [items, setItems] = useState(BlogData);

  return (
    <div className="blogs-container" id="blog">
      <div className="container">
        <div className="title-container">
          <Title title="Blogs" color="pink" />
          <p>Talk about my character.</p>
        </div>
        <div className="blogs">
          {items.map((item) => {
            return <Blog key={item.id} item={item} setItems={setItems} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
