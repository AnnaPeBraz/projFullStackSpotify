// import { React } from 'react'

import SingleItem from "./Singleitem";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Itemlist = ({ title, items }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        <a className="item-list__link" href="/">
          Mostrar mais
        </a>
      </div>

      <div className="item-list__container">
        {artistArray.map((currentValue, index) => (
            <SingleItem key={`${title}-${index}`}/>
          ))}
      </div>
    </div>
  );
};

export default Itemlist;
