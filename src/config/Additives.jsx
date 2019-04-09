import React from "react";
import DisplayAdditives from "./DisplayAdditives";


const Additives = (props) => {
  
  
return (
  <div className="secondary">
    {props.additives.map((additive, index) => (
      <DisplayAdditives key={index} additive={additives.additives_original_tags} />
    ))}
  </div>
)
};


export default Weathers;

