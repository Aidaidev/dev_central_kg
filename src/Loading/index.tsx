import React from "react";
import load from "../assets/images/Spinner@1x-1.4s-200px-200px.svg";

const Loading = () => {
  return (
    <div id="load">
      <div className="container">
        <div className="load">
          <img src={load} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
