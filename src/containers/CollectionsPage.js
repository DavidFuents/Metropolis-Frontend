import React, { Component } from "react";
import { Outlet } from "react-router";
import { getCollections } from "../api";
import Navbar from "../components/Navbar";
import CollectionBanner from "../components/CollectionBanner";
import CollectionBannerV2 from "../components/CollectionBannerV2";
import CollectionCard from "../components/CollectionCard";
import FeaturedProducts from "../components/FeaturedProducts";
import "../css/CollectionsPage.css";

class CollectionsPage extends Component {
  render() {
    const collections = getCollections();

    const featuredCollection = [...collections][0];
    const otherCollections = collections.filter(
      (collection) => collection !== featuredCollection
    );

    return (
      <>
        <Navbar />
        <div className="collections-container">
          <CollectionBanner collection={featuredCollection} />
          <div className="collections-card-container">
            {otherCollections.map((collection) => (
              <li key={collection.id}>
                <CollectionCard collection={collection} />
              </li>
            ))}
          </div>
          <div className="featured-collectionV2-container">
            <CollectionBannerV2 collection={featuredCollection} />
          </div>
          <div className="featured-products">
            <FeaturedProducts collection={featuredCollection} />
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

export default CollectionsPage;
