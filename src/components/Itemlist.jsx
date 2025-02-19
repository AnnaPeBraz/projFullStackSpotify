// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Itemlist = () => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>Artistas Populares</h2>
        <a className="item-list__link" href="/">
          Mostrar mais
        </a>
      </div>

      <div className="item-list__container">
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img className="single-item__image" src="" alt="" />
            </div>
          </div>
          <p>Nome do artista</p>
          <p>Artista</p>
          <FontAwesomeIcon
            className="single-item__icon"
            icon={faCirclePlay}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Itemlist;
