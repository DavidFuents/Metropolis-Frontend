import React from "react";
import { Link } from "react-router-dom";
import "../css/CollectionBannerV2.css";

function CollectionBannerV2(props) {
  const { id, name, collection_banner_v2_img } = props.collection;

  const imageStyle = {
    height: 1000,
    backgroundImage: `url(` + collection_banner_v2_img + `)`,
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    postion: "relative",
    display: "block",
    zIndex: 0,
  };

  return (
    <div className="collection-banner-v2">
      <a href={`/collections/${id}`} style={imageStyle}></a>
      <div className="collection-info-v2">
        <h1 className="name">{name}</h1>
        <Link className="link" to={`${id}`}>Shop the collection</Link>
      </div>
    </div>
  );
}

export default CollectionBannerV2;
