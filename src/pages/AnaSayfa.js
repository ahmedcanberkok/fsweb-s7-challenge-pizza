import React from "react";
import backgroundImage from "../mvp-banner.png";
import { NavLink } from "reactstrap";
import kore from "../Assets/adv-aseets/icons/1.svg";
import pizza from "../Assets/adv-aseets/icons/2.svg";
import burger from "../Assets/adv-aseets/icons/3.svg";
import kizartmalar from "../Assets/adv-aseets/icons/4.svg";
import fastfood from "../Assets/adv-aseets/icons/5.svg";
import icecek from "../Assets/adv-aseets/icons/6.svg";
import bigCard from "../Assets/adv-aseets/kart-1.png";
import smallCardFirst from "../Assets/adv-aseets/kart-2.png";
import smallCardSecond from "../Assets/adv-aseets/kart-3.png";
import foodFirst from "../Assets/adv-aseets/food-1.png";
import foodSecond from "../Assets/adv-aseets/food-2.png";
import foodThird from "../Assets/adv-aseets/food-3.png";
import "./AnaSayfa.css";
import Footer from "../layouts/Footer";
const AnaSayfa = () => {
  return (
    <>
      <div className="anasayfa">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maxWidth: "1920px",
            width: "100%",
            height: "1080px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "3%",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <h1
              style={{ color: "white", marginTop: "20px", fontSize: "3.5em" }}
            >
              Teknolojik Yemekler
            </h1>
            <p className="firsat">fırsatı kaçırma</p>
            <h2 style={{ color: "white", marginTop: "0", fontSize: "3.5em" }}>
              KOD ACIKTIRIR
            </h2>
            <h2 style={{ color: "white", fontSize: "3.5em" }}>
              PIZZA, DOYURUR
            </h2>
          </div>
          <NavLink href="/pizza">
            <button
              role="button"
              id="order-pizza"
              style={{
                padding: "20px 50px",
                fontSize: "2rem",
                backgroundColor: "#fdc913",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              ACIKTIM
            </button>
          </NavLink>
        </div>
        <div className="main-container">
          <div className="menu-bar">
            <span className="menu-bar-category">
              <img src={kore} alt="kore lezzetleri" />
              <p className="food-name">YENİ! Kore</p>
            </span>
            <span className="menu-bar-category">
              <img src={pizza} alt="pizzalar" />
              <p className="food-name">Pizza</p>
            </span>
            <span className="menu-bar-category">
              <img src={burger} alt="burgerler" />
              <p className="food-name">Burger</p>
            </span>
            <span className="menu-bar-category">
              <img src={kizartmalar} alt="kızartmalar" />
              <p className="food-name">Kızartmalar</p>
            </span>
            <span className="menu-bar-category">
              <img src={fastfood} alt="fast food" />
              <p className="food-name">Fast Food</p>
            </span>
            <span className="menu-bar-category">
              <img src={icecek} alt="gazlı içecekler" />
              <p className="food-name">Gazlı İçecek</p>
            </span>
          </div>

          <div>
            <div className="card-container">
              <div
                className="big-card"
                style={{ backgroundImage: `url(${bigCard})` }}
              >
                <div>
                  <p className="big-paragraph">
                    Özel <br />
                    Lezzetus
                  </p>
                  <p className="small-paragraph">Position:Absolute Acı Pizza</p>
                  <NavLink href="/pizza"> 
                  <button role="button" className="order-button">
                    SİPARİŞ VER
                  </button>
                  </NavLink>
                </div>
              </div>
              <div className="small-cards">
                <div
                  className="small-card"
                  style={{ backgroundImage: `url(${smallCardFirst})` }}
                >
                  <p className="small-card1-p">
                    DevOps <br />
                    Burger Menü
                  </p>
                  <button role="button" className="order-button">
                    SİPARİŞ VER
                  </button>
                </div>
                <div
                  className="small-card"
                  style={{ backgroundImage: `url(${smallCardSecond})` }}
                >
                  <p className="small-card2-p">
                    <span style={{ color: "#ce2829" }}>Çoooook</span> hızlı{" "}
                    <br />
                    npm gibi kurye
                  </p>
                  <NavLink href= "/pizza">
                    <button role="button" className="order-button">
                    SİPARİŞ VER
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <p className="paketlenen">En çok paketlenen menüler </p>
          <p className="aciktiran">Acıktıran Kodlara Doyuran Lezzetler</p>
          <div className="below-menu-bar">
            <span className="below-menu-bar-category">
              <img src={kore} alt="kore lezzetleri" />
              <p className="food-name">Ramen</p>
            </span>
            <span className="below-menu-bar-category pizza">
              <img src={pizza} alt="pizzalar" />
              <p className="food-name pizza">Pizza</p>
            </span>
            <span className="below-menu-bar-category">
              <img src={burger} alt="burgerler" />
              <p className="food-name">Burger</p>
            </span>
            <span className="below-menu-bar-category">
              <img src={kizartmalar} alt="kızartmalar" />
              <p className="food-name">French fries</p>
            </span>
            <span className="below-menu-bar-category">
              <img src={fastfood} alt="fast food" />
              <p className="food-name">Fast Food</p>
            </span>
            <span className="below-menu-bar-category">
              <img src={icecek} alt="gazlı içecekler" />
              <p className="food-name">Soft drinks</p>
            </span>
          </div>
          <div className="foods-div">
            <div className="food-card food1">
              <img src={foodFirst} alt="pizza" />
              <p className="below-food-name">Powershell Pizza</p>
              <div className="rate-comment-price">
                <div>4.9</div>
                <div>(200)</div>
                <div>
                  <strong>60₺</strong>
                </div>
              </div>
            </div>

            <div className="food-card food2">
              <img src={foodSecond} alt="pizza" />
              <p className="below-food-name">Position Absolute Acı Ekşi Pizza</p>
              <div className="rate-comment-price">
                <div>4.9</div>
                <div>(928)</div>
                <div>
                  <strong>85₺</strong>
                </div>
              </div>
            </div>

            <div className="food-card food3">
              <img src={foodThird} alt="pizza" />
              <p className="below-food-name">useEffect Tavuklu Burger</p>
              <div className="rate-comment-price">
                <div>4.9</div>
                <div>(462)</div>
                <div>
                  <strong>75₺</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AnaSayfa;
