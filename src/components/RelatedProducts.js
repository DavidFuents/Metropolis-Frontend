import { getCollection } from "../api";
import ProductCard from '../components/ProductCard';
import "../css/RelatedProducts.css";

function RelatedProducts(props) {
  const products = getCollection(props.collection).products;
  
  const renderRelatedProducts = () => products.filter(product => product.id !== props.currentProductId).slice(0,4).map(product => <ProductCard collectionId={props.collection} product={product} />)
  
  return (
    <div className="related-products-container">
      <h2 className="related-products-title">Related Products</h2>
      <div className="related-products">
        {renderRelatedProducts()}
      </div>    
    </div>
  );
}

export default RelatedProducts;
