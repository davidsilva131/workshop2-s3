import React from "react";
import "../home/footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    const home = () => {
        navigate("/home");
      }; 
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__home">
            <button className="button__footer" onClick={home}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
              alt=""
              className="iconos__footer"
            />
            </button>
            
            <div className="footer__home-title">Home</div>
          </div>

          <div className="footer__buscar">
            <button className="button__footer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7764/7764538.png"
              alt=""
              className="iconos__footer"
            />
            </button>
            
            <div className="footer__buscar">Buscar</div>
          </div>
        </div>
      </div>

      <div className="center">
      <div className="footer__cesta__trasparente">
        <div className="footer__cesta">
            <button className="button__footer">
            <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144460.png"
            alt=""
            className="iconos__footer1"
          />

            </button>
          
        </div>
      </div>
      </div>
      
    </>
  );
};
export default Footer;
