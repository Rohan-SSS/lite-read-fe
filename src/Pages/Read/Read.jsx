import React from "react";
import { Foo, Navigator, Text } from "../../Components";
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
      <div className="foo">
        <Foo />
      </div>
    </div>
  );
};

export default Read;
