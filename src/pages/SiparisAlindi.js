import React from "react";
import "./SiparisAlindi.css";
import { useLocation } from "react-router-dom";
const SiparisAlindi = () => {
  const location = useLocation();
  const orderData = location.state;
  console.log(orderData);

  return (
    <div className="siparis-container">
      <h1 className="title">Teknolojik Yemekler</h1>
      <h2 className="subtitle">lezzetin yolda</h2>
      <h2 className="siparis-title">SİPARİŞ ALINDI</h2>
      <h3 className="customer-name">
        Müşteri adı:
        <span className="customer-name-span">{orderData.customerName}</span>
      </h3>
      <h3 className="pizza-name">{orderData.pizzaName}</h3>
      <div className="order-details">
        <hr />
        <p>
          Boyut: <span className="order-data">{orderData.size}</span>{" "}
        </p>
        <p>
          Hamur: <span className="order-data">{orderData.thickness}</span>
        </p>
        <p>
          Ek Malzemeler:{" "}
          <span className="order-data">
            {orderData.extraIngredients
              .filter((ingredient) => ingredient)
              .join(", ")}
          </span>
        </p>{" "}
        <p>
          {" "}
          Sipariş Notu: <span className="order-note">{orderData.note}</span>
        </p>
      </div>

      <div className="order-summary">
        <h4>Sipariş Toplamı</h4>
        <div className="siparis-cost">
          <p>Seçimler: </p>
          <span>{orderData.secimler}₺</span>
        </div>
        <div className="siparis-cost">
          <p>Toplam:</p> <span>{orderData.totalPrice}₺</span>
        </div>
      </div>
    </div>
  );
};
export default SiparisAlindi;
