import React from "react";
import { Navigator, Text } from "../../Components";
import "./Read.css";

const Read = () => {
  return (
    <div className="read">
      <div className="navigator">
        <Navigator />
      </div>
      <div className="text">
        <Text />
      </div>
    </div>
  );
};

export default Read;
