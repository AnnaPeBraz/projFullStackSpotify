/* eslint-disable react/prop-types */
// import { React } from 'react'

import { Link } from "react-router-dom";
import SingleItem from "./Singleitem";

const Itemlist = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>
        <Link className="item-list__link" to={path}>
          Mostrar mais
        </Link>
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currentObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default Itemlist;
