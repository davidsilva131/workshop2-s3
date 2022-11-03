import React from "react";
import "../home/footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
              alt=""
              className="iconos__footer"
            />
            <div className="footer__home-title">Home</div>
          </div>

          <div className="footer__buscar">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7764/7764538.png"
              alt=""
              className="iconos__footer"
            />
            <div className="footer__buscar">Buscar</div>
          </div>
        </div>
      </div>
      <div className="footer__cesta__trasparente">
        <div className="footer__cesta">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144460.png"
            alt=""
            className="iconos__footer1"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
