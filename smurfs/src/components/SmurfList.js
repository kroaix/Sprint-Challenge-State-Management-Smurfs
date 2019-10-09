import React from "react";
import SmurfCard from './SmurfCard';

const SmurfList = ({ smurfs }) => {
  return (
    <div className="cards">
      {smurfs.map(smurf => 
        <SmurfCard key={smurf.id} smurf={smurf} />
      )}
    </div>
  );
};

export default SmurfList;
