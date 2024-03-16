import React from "react";
import "./Footer.css";
import iconFirst from "../Assets/adv-aseets/icons/icon-1.png";
import iconSecond from "../Assets/adv-aseets/icons/icon-2.png";
import iconThird from "../Assets/adv-aseets/icons/icon-3.png";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="upper-footer-div">
        <div className="left-div">
          <div className="contact">
            <h1>
              Teknolojik
              <br />
              Yemekler
            </h1>
            <div className="contact-div">
              <div>
                <img className="location-img" src={iconFirst} alt="location" />
                <p>
                  360 Rome Colosseum AVM, <br />
                  Istanbul Türkiye
                </p>
              </div>
              <div>
                <img src={iconSecond} alt="email" />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div>
                <img src={iconThird} alt="phone" />
                <p> 0(216) 789 45 61</p>
              </div>
            </div>
          </div>
          <div className="sicacik-menuler">
            <h2 className="sicacik-menuler-heading">Sıccacık Menuler</h2>
            <p className="sicacik-menuler-p">Powershell Pizza</p>
            <p className="sicacik-menuler-p">10 Kişilik ReactDOM Pizza</p>
            <p className="sicacik-menuler-p">useEffect Tavuklu Pizza</p>
            <p className="sicacik-menuler-p">Acılı Git Pizza</p>
            <p className="sicacik-menuler-p">Testler Geçti Mutlu Burger</p>
            <p className="sicacik-menuler-p">Position Absolute Acı Ekşi Pizza</p>
          </div>
        </div>

        
      </div>
      <div className="below-footer-div">
        <p>© 2024 Teknolojik Yemekler. </p>
        
      </div>
    </div>
  );
};
export default Footer;
