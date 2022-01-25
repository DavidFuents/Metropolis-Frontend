import { useParams } from "react-router";
import { getProduct } from "../api";
import Navbar from "../components/Navbar";
import ProductDropdown from "../components/ProductDropdown";
import RelatedProducts from "../components/RelatedProducts";
import AddToCartForm from "../components/AddToCartForm";

import "../css/ProductPage.css";

function ProductPage() {
  let params = useParams();
  const product = getProduct(params);
  const {
    id,
    name,
    price,
    sizes,
    details,
    color,
    front_img_url,
    back_img_url,
  } = product;

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-images">
          <img className="product-image" src={front_img_url} alt={name}></img>
        </div>
        <div className="product-info">
          <h1 className="product-name">{name}</h1>
          <p className="product-price">{`$${price}`}</p>
          <div className="product-solid"></div>
          <p className="product-color">{color}</p>
          <div className="product-solid"></div>
          <AddToCartForm product={product}/>
          <ProductDropdown toggleSetting={true} details={details} />
        </div>
      </div>
      <RelatedProducts currentProductId={id} collection={params.collectionId} />
    </>
  );
}

export default ProductPage;
