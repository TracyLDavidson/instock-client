import "./WarehouseSpecifics.scss";
import backArrow from "../../assets/icons/back-arrow.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function WarehouseSpecifics() {
  const { warehouseId } = useParams();
  const [warehouseData, setWarehouseData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((res) => {
        setWarehouseData(res.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, [warehouseId]);
  return (
    <section className="warehouse-details">
      <div className="warehouse-details__container">
        <div className="warehouse-details__address-container">
          <h4>WAREHOUSE ADDRESS:</h4>
          <div className="address__content">
            <p className="address__address">{warehouseData.address},&nbsp;</p>
            <p className="address_city">
              {warehouseData.city},&nbsp;{warehouseData.country}
            </p>
          </div>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact-name-container">
            <h4>CONTACT NAME:</h4>
            <p>{warehouseData.contact_name}</p>
            <p>{warehouseData.contact_position}</p>
          </div>
          <div className="warehouse-details__contact-info-container">
            <h4>CONTACT INFORMATION:</h4>
            <p>{warehouseData.contact_phone}</p>
            <p>{warehouseData.contact_email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
