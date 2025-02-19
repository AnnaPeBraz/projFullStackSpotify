// import React from 'react'

import Itemlist from "./Itemlist";

const Main = () => {
  return (
    <div className="main">
      {/* Item list artistas */}
      <Itemlist title="Artistas" items={5}/>

      {/* Item list musicas */}
      <Itemlist title ="Musicas" items={10}/>
      
    </div>
  );
};

export default Main;
