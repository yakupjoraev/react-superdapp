import React from "react";

const Loading = (props) => {
  return (
    <div className={`loading ${props.className}`}>
      <div className="loading__outer">
        <div className="loading__middle">
          <div className="loading__inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;