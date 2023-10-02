import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "./InStock-Logo.svg";

export default function Header() {
  return (
    <div className="header__allcontainer">
      <div className="header__container">
        <Link to="/" className="header__logocontainer">
          <img src={logo}></img>
        </Link>

        <div className="header__twobuttonscontainer">
          <div className="header__buttoncontainer">
            <Link
              to="/warehouses"
              className="header__buttoncontainer--warehouses"
            >
              Warehouses
            </Link>
          </div>
          <div className="header__buttoncontainer">
            <Link
              to="/inventory"
            //   type="button"
              className="header__buttoncontainer--inventory"
            >
              Inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
