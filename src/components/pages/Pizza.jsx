import { Avatar, Rating } from "@mui/material";
import React from "react";
import './pizza.scss'

const Pizza = () => {
  return (
    <div className="body">
      <div className="main">
        <section className="main__header">
          <div className="main__goBack">
            <span><img src="https://qualityhomescostacalida.com/assets/layout/chevron-left.png" width="35px"/></span>Todas las pizzas
          </div>
        </section>
        <div className="main__contentContainer">
        <section className="main__info container">
          <h1>Master CSS Pizza</h1>
          <div className="main__chips">
            <button className="main__chips1">$89 MXN</button>
            <button className="main__chips2">⭐ 445 Reviews</button>
          </div>
          <h3>Descripción</h3>
          <p>
            Deliciosa Pizza clásica, con orilla de pan esponjoso. Es un manjar,
            si estás a punto de enviar cambios a producción un viernes,
            necesitarás una de estas.
          </p>
        </section>
        <section className="main__reviews container">
            <article className="main__review">
                <div className="main__avatarContainer"><Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" /></div>
                <div className="main__reviewInfo">
                    <span>Marcos Toledo</span>
                    <Rating name="read-only" value={3} size="small" readOnly />
                    <p>De las mejores pizzas que he probado, recomendada.</p>
                </div>
            </article>

            <article className="main__review">
                <div className="main__avatarContainer"><Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" /></div>
                <div className="main__reviewInfo">
                    <span>Marcos Toledo</span>
                    <Rating name="read-only" value={3} size="small" readOnly />
                    <p>De las mejores pizzas que he probado, recomendada.</p>
                </div>
            </article>

            <article className="main__review">
                <div className="main__avatarContainer"><Avatar alt="Remy Sharp" src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?k=20&m=1309328823&s=612x612&w=0&h=RqA2lYygvOxisNPp6UwFjz7bCw_rYITJMqFTMSrhpis=" /></div>
                <div className="main__reviewInfo">
                    <span>Marcos Toledo</span>
                    <Rating name="read-only" value={3} size="small" readOnly />
                    <p>De las mejores pizzas que he probado, recomendada.</p>
                </div>
            </article>
        </section>
        </div>
    </div>
    <div className="buySection">
        <div className="buySection__container container">
          <div className="buySection__counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="buySection__cartButton">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABJklEQVRIie2UMVLDMBBF9zOcIQVpoYMiNTAcD07DFQIToMBQQgMtLkKZ9I8CMSMrayIc2QNMfqPxSvufdi3JbKvfKGAEPLCqChiVAIyBS2DhQHK1CB7jXKiAx28MG9WFLlRr1isHPAkJNbC3Ydfq4DVJ53ecnKMwTiXVXcGS3szsOnwe5oD3w/jaFRrpJYwHBbz+i4DbzhcnX7MvniIwQxQoSWb+4RpEMfhmAN7MjQJXPf7facxKW/3UstNjMzvtGHO9d5PJZy9D0p2ZWXz+cmNt3mnFLriQGhXntrqE2iuWNDez9x6gc0kNX+8e99HuFc/0cJl9tvssDgAnFr1yP4lFnmvBXsXexc+NuZ5eq6uW5E10n7UKuACWBV6rJXDeQyFb/QF9ALYLHHR5OwtgAAAAAElFTkSuQmCC"
              alt="cart icon"
            />
          </button>
          <button className="buySection__buyButton">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
