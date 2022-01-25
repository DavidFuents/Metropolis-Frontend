import { Link } from "react-router-dom";
import "../css/CollectionCard.css";

function CollectionCard(props) {
  const { id, name, description, collection_card_img } = props.collection;

  return (
    <div className="collection-card">
      <a href={`/collections/${id}`}>
        <img src={collection_card_img} className="collection-card-image" alt={name}></img>
      </a>
      <h3 className="collection-card-title">{name}</h3>
      <div className="solid-divider"></div>
      <p className="collection-card-description">{description}</p>
      <Link className="link" to={id}>
        Shop the collection
      </Link>
    </div>
  );
}

export default CollectionCard;
