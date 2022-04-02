import React, { useEffect } from "react";
import "../../styles/sections/DetailBlog.scss";
import moment from "moment";
import EmptyFile from "./EmptyFile";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BlogData from "../../api/BlogData";

const DetailBlog = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <div className="main-container_detail">
          <div className="container_detail">
            <div className="image_detail">
              <img src={item.images} alt={item.title} />
            </div>
            <div className="content_detail">
              <h6>{moment(item.createdAt).fromNow()}</h6>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default DetailBlog;
