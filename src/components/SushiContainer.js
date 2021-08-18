import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"


function SushiContainer({sushis, setSushis}) {

  function moreSushiHandler() {
    setSushis(sushis)
  }
  
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi 
          key={sushi.id}
          sushi={sushi}
          moreSushiHandler={moreSushiHandler}
        />
      )).slice(0, 4)}
      
      <MoreButton moreSushiHandler={moreSushiHandler}/>
    </div>
  );
}

export default SushiContainer;