// import React from 'react'

import Itemlist from "./Itemlist";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Item list artistas */}
      <Itemlist
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/Artists"
      />

      {/* Item list musicas */}
      <Itemlist
        title="Musicas"
        items={10}
        itemsArray={songsArray}
        path="/Songs"
        idPath="/Song"
      />
    </div>
  );
};

export default Main;
