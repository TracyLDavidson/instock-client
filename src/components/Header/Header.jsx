import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "./InStock-Logo.svg";

export default function Header() {
  const location = useLocation();

  const isWarehousesPage = location.pathname.includes('/warehouses');
  const isInventoryPage = location.pathname.includes('/inventory');

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
              className={`header__buttoncontainer--warehouses ${isWarehousesPage ? 'active' : ''}`}
            >
              Warehouses
            </Link>
          </div>
          <div className="header__buttoncontainer">
            <Link
              to="/inventory"
            //   type="button"
              className={`header__buttoncontainer--inventory ${isInventoryPage ? 'active' : ''}`}
            >
              Inventory
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
