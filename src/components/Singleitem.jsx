// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const SingleItem = () => {
  return (
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
        </div>  )
}

export default SingleItem