import NavDropdown from "./NavDropdown";
import "../css/Nav.css";

function Nav() {
  let newLinks = [
    { to: "collections", name: "Collections" }
  ]

  let mensLinks = [
    { to: "collections/mens-footwear", name: "Footwear" },
    { to: "collections/mens-apparel", name: "Apparel" },
    { to: "collections/mens-accessories", name: "Accessories" },
    { to: "collections/mens-lifestyle", name: "Lifestyle" }
  ]

  let womensLinks = [
    { to: "collections/womens-footwear", name: "Footwear" },
    { to: "collections/womens-apparel", name: "Apparel" },
    { to: "collections/womens-accessories", name: "Accessories" },
    { to: "collections/womens-lifestyle", name: "Lifestyle" }
  ]

  return (
    <nav className="nav">
      <ul>
        <li>
          <p>METROPOLIS</p>
        </li>
        <li>
          <NavDropdown links={newLinks} category="NEW" />
        </li>
        <li>
          <NavDropdown links={mensLinks} category="MENS" />
        </li>
        <li>
          <NavDropdown links={womensLinks} category="WOMENS" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
