import { Outlet, useParams } from "react-router";
import { getCollection } from "../api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../css/CollectionPage.css";

function CollectionPage(props) {
  let { collectionId } = useParams();
  const collection = getCollection(collectionId);
  const collectionProducts = collection.products;

  const renderProducts = () =>
    collectionProducts.map((product) => ( 
      <div key={product.id} className="collection-grid-item"><ProductCard collectionId={collection.id} product={product} /></div>
    ));

  return (
    <>
      <Navbar />
      <div className="collection-container">
        <div className="collection-title">
          <p>{collection.name}</p>
        </div>
        <div className="collection-products-container">{renderProducts()}</div>
      </div>
      <Outlet />
    </>
  );
}

export default CollectionPage;
