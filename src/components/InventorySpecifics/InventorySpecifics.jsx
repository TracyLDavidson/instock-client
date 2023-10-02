import "./InventorySpecifics.scss";
import backArrow from "../../assets/icons/back-arrow.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function InventorySpecifics() {
    const { inventoryId } = useParams();
    const [inventoryData, setInventoryData] = useState({});



    useEffect(() => {
        axios
          .get(`http://localhost:8080/inventory/${inventoryId}`)
          .then((res) => {
            setWarehouseData(res.data[0]);
          })
          .catch((error) => {
            console.error("Error fetching the data", error);
          });
    }, [inventoryId]);



    return(
        <section className="inventory-details">
            <div className="inventory-details__container">
                <div className="inventory-details__description-container">
                    <h4>ITEM DESCRIPTION:</h4>
                    <P>{inventoryData.description}</P>
                </div>

                <div className="inventory-details__category-container">
                    <h4>CATEGORY:</h4>
                    <P>{inventoryData.category}</P>
                </div>

                <div className="inventory-details__mid-container">
                    <div className="inventory-details__status-container">
                        <h4>STATUS:</h4>
                        <P>{inventoryData.status}</P>
                    </div>

                    <div className="inventory-details__quantity-container">
                        <h4>QUANTITY:</h4>
                        <P>{inventoryData.quantity}</P>
                    </div>
                </div>

                <div className="inventory-details__warehouse-container">
                    <h4>WAREHOUSE:</h4>
                    <P>{inventoryData.warehouse_id}</P>

                </div>
            </div>


        </section>


    )




}