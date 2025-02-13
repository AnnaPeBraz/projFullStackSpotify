// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas Populares</h2>
          <a className="item-list__link" href="">
            Mostrar mais
          </a>
        </div>

        <div className="single-item">
          <img className="single-item__image" src="" alt="" />
          <p>Nome do artista</p>
          <p>Artista</p>
          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Main;
