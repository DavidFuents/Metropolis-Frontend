import React from "react";
import { Link } from "react-router-dom";
import "../css/CollectionBanner.css";

function CollectionBanner(props) {
  const { id, name, collection_banner_img } = props.collection;

  const imageStyle = {
    height: 1000,
    width: "100%",
    backgroundImage: `url(` + collection_banner_img + `)`,
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    postion: "relative",
    display: "block",
    zIndex: 0,
  };

  return (
    <div className="collection-banner">
      <a href={`/collections/${id}`} style={imageStyle}></a>
      <div className="collection-info">
        <h1 className="name">{name}</h1>
        <Link className="link" to={`${id}`}>
          Shop the collection
        </Link>
      </div>
    </div>
  );
}

export default CollectionBanner;
