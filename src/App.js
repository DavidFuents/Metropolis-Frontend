import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import PageNotFound from "./containers/PageNotFound";
import CollectionPage from "./containers/CollectionPage";
import Cart from "./containers/Cart";
import ProductPage from "./containers/ProductPage";
import CollectionsPage from "./containers/CollectionsPage";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="collections">
              <Route index element={<CollectionsPage />} />
              <Route path=":collectionId">
                <Route index element={<CollectionPage />} />
                <Route path="products/:productId" element={<ProductPage />} />
              </Route>
            </Route>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
